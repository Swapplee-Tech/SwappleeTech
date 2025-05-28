import { chats } from "../services/services.js";

document.addEventListener('click', e => {
    const sidebar = document.querySelector('.mobile-sidebar');
    const overlay = document.querySelector('.sidebar-overlay');

    if (e.target.closest('.mobile-menu-toggle')) {
        const isOpen = sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
        e.target.closest('.mobile-menu-toggle')
        .setAttribute('aria-expanded', isOpen);
        sidebar.setAttribute('aria-hidden', !isOpen);
        return;
    }

    if (
        e.target.closest('.close-sidebar') ||
        e.target.closest('.sidebar-overlay')
    ) {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.querySelector('.mobile-menu-toggle')
        .setAttribute('aria-expanded', false);
        sidebar.setAttribute('aria-hidden', true);
        return;
    }
});

document.addEventListener('keydown', e => {
    const sidebar = document.querySelector('.mobile-sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    if (e.key === 'Escape' && sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.querySelector('.mobile-menu-toggle')
        .setAttribute('aria-expanded', false);
        sidebar.setAttribute('aria-hidden', true);
    }
});


// Dynamically includes HTML content into a container
function includeHTML(containerId, url) {
    fetch(url)
        .then(res => res.text())
        .then(html => document.getElementById(containerId).innerHTML = html)
        .catch(console.error);
}

// Load footer partial on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    includeHTML('site-footer', '/partials/footer.html');
});

// Chat UI element references
const chatListEl = document.getElementById('chat-list');
const emptyEl = document.getElementById('empty');
const headerEl = document.getElementById('window-header');
const messagesEl = document.getElementById('messages');
const footerEl = document.getElementById('window-footer');
const winAvatar = document.getElementById('window-avatar');
const winName = document.getElementById('window-name');
const winStatus = document.getElementById('window-status');
const attachBtn = document.getElementById('attach-btn');
const attachMenu = document.getElementById('attach-menu');
const fileInput = document.getElementById('file-input');
const mediaInput = document.getElementById('media-input');

// Hide chat window sections by default
headerEl.hidden = true;
messagesEl.hidden = true;
footerEl.hidden = true;

let activeChatId = null;
let activeTab = 'all';
const tabLine = document.querySelector('.line');
const tabItems = document.querySelectorAll('.tab li');

// Tab switching logic
tabItems.forEach(tab => {
    tab.addEventListener('click', () => {
        tabItems.forEach(t => t.classList.remove('active-tab'));
        tab.classList.add('active-tab');
        activeTab = tab.dataset.tab;
        const index = Array.from(tabItems).indexOf(tab);
        tabLine.style.marginLeft = `${25 + (index * 100)}px`;
        renderChats();
    });
});

// Resets chat window to empty state
function resetToEmptyState() {
    activeChatId = null;
    emptyEl.hidden = false;
    headerEl.hidden = true;
    messagesEl.hidden = true;
    footerEl.hidden = true;
    messagesEl.innerHTML = '';
}

// Opens a chat by ID and renders its messages
function openChat(id) {
    activeChatId = id;
    const chat = chats.find(c => c.id === id);
    emptyEl.hidden = true;
    headerEl.hidden = false;
    messagesEl.hidden = false;
    footerEl.hidden = false;
    messagesEl.innerHTML = '';

    winAvatar.src = chat.avatar;
    winName.textContent = chat.name;
    winStatus.textContent = chat.status;

    chat.messages.forEach(m => {
        const div = document.createElement('div');
        div.classList.add('msg', m.who);

        //tag with proper positioning
        const tag = document.createElement('div');
        tag.classList.add('tag');
        tag.textContent = m.timeTag;

        div.appendChild(tag);

        //message text
        const text = document.createElement('div');
        text.textContent = m.text;
        div.appendChild(text);
        
        // div.innerHTML = `<div class="tag">${m.timeTag}</div>${m.text}`;
        messagesEl.append(div);
    });

    setTimeout(() => messagesEl.scrollTop = messagesEl.scrollHeight, 50);
    renderChats();
}

// Renders chat list based on active tab and search filter
function renderChats(filter = '') {
    chatListEl.innerHTML = '';
    chats.filter(c => {
        if (activeTab === 'unread') return c.unread > 0;
        if (activeTab === 'groups') return c.isGroup;
        return true;
    }).filter(c => c.name.toLowerCase().includes(filter.toLowerCase()))
    .forEach(c => {
        const item = document.createElement('div');
        item.classList.add('chat-item');
        if (c.id === activeChatId) item.classList.add('active');
        item.innerHTML = `
            <img src="${c.avatar}" class="avatar" />
            <div class="meta">
                <h4>${c.name}</h4>
                <p>${c.messages.slice(-1)[0]?.text || ''}</p>
            </div>
            <div class="time">${c.status}</div>
        `;
        item.onclick = () => openChat(c.id);
        chatListEl.append(item);
    });
}

// Message sending logic
document.getElementById('send').addEventListener('click', sendMessage);
document.getElementById('input-msg').addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
});

function sendMessage() {
    if (!activeChatId) return;
    
    const input = document.getElementById('input-msg');
    const text = input.value.trim();
    if (!text) return;

    const chat = chats.find(c => c.id === activeChatId);
    const newMessage = {
        text,
        who: 'outgoing',
        timeTag: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    chat.messages.push(newMessage);
    input.value = '';
    
    const div = document.createElement('div');
    div.classList.add('msg', 'outgoing');

    const tag = document.createElement('div');
    tag.classList.add('tag');
    tag.textContent = newMessage.timeTag;
    div.appendChild(tag);

    const messageText = document.createElement('div');
    messageText.textContent = newMessage.text;
    div.appendChild(messageText);


    // div.innerHTML = `
    //     <div class="tag">${newMessage.timeTag}</div>
    //     ${newMessage.text}
    // `;
    messagesEl.append(div);
    
    messagesEl.scrollTop = messagesEl.scrollHeight;
}

// Attachment menu logic
attachBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    attachMenu.style.display = 'flex';
});

document.addEventListener('click', () => {
    attachMenu.style.display = 'none';
});

// Attachment type handling
document.querySelectorAll('#attach-menu button').forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        const type = button.dataset.type;
        
        switch(type) {
        case 'document':
            fileInput.accept = '.pdf,.doc,.docx,.txt';
            fileInput.click();
            break;
            
        case 'camera':
            if(navigator.mediaDevices) {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(stream => {
                alert('Camera access granted - implement capture UI here');
                })
                .catch(() => {
                alert('Camera access denied');
                });
            }
            break;
            
        case 'media':
            mediaInput.accept = 'image/*,video/*';
            mediaInput.click();
            break;
        }
    });
});

// File input handlers
fileInput.addEventListener('change', handleFiles);
mediaInput.addEventListener('change', handleFiles);

function handleFiles(e) {
    const files = e.target.files;
    if(files.length > 0) {
        alert(`Selected ${files.length} file(s)`);
    }
}

// Search and new chat event handlers
document.getElementById('search').addEventListener('input', e => renderChats(e.target.value));
document.getElementById('new-chat').addEventListener('click', resetToEmptyState);

// Initial UI state
resetToEmptyState();
renderChats();

document.getElementById("year").textContent = new Date().getFullYear();
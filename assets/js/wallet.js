// Transaction Data
const transactions = [
    {
        iconClass: 'fa-solid fa-arrow-right-arrow-left',
        iconBg: 'icon-blue',
        description: 'Payment for Iphone 14 Pro',
        amount: '-200,000', positive: false,
        date: 'May 24, 2025<br>2:45 PM',
        status: 'Completed', statusClass: 'status-completed',
        ref: 'TRD-98765'
    },
    {
        iconClass: 'fa-solid fa-circle-arrow-down',
        iconBg: 'icon-green',
        description: 'Received payment for MacBook Pro',
        amount: '+450,000', positive: true,
        date: 'May 24, 2025<br>2:40 PM',
        status: 'Completed', statusClass: 'status-completed',
        ref: 'TRD-98765'
    },
    {
        iconClass: 'fa-solid fa-wallet',
        iconBg: 'icon-green',
        description: 'Wallet Top-up',
        amount: '+450,000', positive: true,
        date: 'May 24, 2025<br>2:35 PM',
        status: 'Completed', statusClass: 'status-completed',
        ref: 'TRD-98765'
    },
    {
        iconClass: 'fa-solid fa-building-columns',
        iconBg: 'icon-orange',
        description: 'Bank Withdrawal',
        amount: '-50,000', positive: false,
        date: 'May 24, 2025<br>2:31 PM',
        status: 'Completed', statusClass: 'status-completed',
        ref: 'TRD-98765'
    },
    {
        iconClass: 'fa-solid fa-circle-arrow-down',
        iconBg: 'icon-green',
        description: 'Received payment for MacBook Pro',
        amount: '+450,000', positive: true,
        date: 'May 24, 2025<br>2:30 PM',
        status: 'Completed', statusClass: 'status-completed',
        ref: 'TRD-98765'
    },
    {
        iconClass: 'fa-solid fa-arrow-right-arrow-left',
        iconBg: 'icon-blue',
        description: 'Payment for Iphone 14 Pro',
        amount: '-200,000', positive: false,
        date: 'May 24, 2025<br>2:28 PM',
        status: 'Failed', statusClass: 'status-failed',
        ref: 'TRD-98765'
    },
    {
        iconClass: 'fa-solid fa-circle-arrow-down',
        iconBg: 'icon-green',
        description: 'Received payment for MacBook Pro',
        amount: '+450,000', positive: true,
        date: 'May 24, 2025<br>2:25 PM',
        status: 'Completed', statusClass: 'status-completed',
        ref: 'TRD-98765'
    },
    {
        iconClass: 'fa-solid fa-wallet',
        iconBg: 'icon-green',
        description: 'Wallet Top-up',
        amount: '+450,000', positive: true,
        date: 'May 24, 2025<br>2:20 PM',
        status: 'Completed', statusClass: 'status-completed',
        ref: 'TRD-98765'
    },
    {
        iconClass: 'fa-solid fa-building-columns',
        iconBg: 'icon-orange',
        description: 'Bank Withdrawal',
        amount: '-50,000', positive: false,
        date: 'May 24, 2025<br>2:14 PM',
        status: 'Pending', statusClass: 'status-pending',
        ref: 'TRD-98765'
    },
    {
        iconClass: 'fa-solid fa-circle-arrow-down',
        iconBg: 'icon-green',
        description: 'Received payment for MacBook Pro',
        amount: '+450,000', positive: true,
        date: 'May 24, 2025<br>2:09 PM',
        status: 'Failed', statusClass: 'status-failed',
        ref: 'TRD-98765'
    }
];

// Render transactions
function renderTransactions(filter = 'All Transactions', date = '') {
    const body = document.getElementById('walletHistoryBody');
    body.innerHTML = '';
    transactions.forEach(tx => {
        if (
            (filter !== 'All Transactions' && tx.status !== filter) ||
            (date && !tx.date.includes(date))
        ) return;

        body.innerHTML += `
        <tr>
            <td>
                <span class="wallet-icon ${tx.iconBg}">
                    <i class="${tx.iconClass}"></i>
                </span>
                ${tx.description}
            </td>
            <td class="${tx.positive ? 'amount-positive' : 'amount-negative'}">${tx.amount}</td>
            <td>${tx.date}</td>
            <td><span class="status-pill ${tx.statusClass}">${tx.status}</span></td>
            <td>
                ${tx.ref}
                <button class="copy-btn" title="Copy Reference ID" onclick="copyRef('${tx.ref}')">
                    <i class="fa-solid fa-copy"></i>
                </button>
            </td>
        </tr>
        `;
    });
}
renderTransactions();

// Filter logic
document.getElementById('transactionFilter').addEventListener('change', function() {
    renderTransactions(this.value, document.getElementById('transactionDate').value);
});
document.getElementById('transactionDate').addEventListener('change', function() {
    renderTransactions(document.getElementById('transactionFilter').value, this.value);
});

// Copy to clipboard
function copyRef(ref) {
    navigator.clipboard.writeText(ref);
    alert('Reference ID copied!');
}

const toggleBtn = document.getElementById('escrowToggle');
const panel = document.getElementById('escrowPanel');
const header = document.getElementById('escrowHeader');

function toggleDropdown() {
  const isOpen = panel.style.display !== 'none';
  if (isOpen) {
    panel.style.display = 'none';
    toggleBtn.classList.remove('open');
  } else {
    panel.style.display = '';
    toggleBtn.classList.add('open');
  }
}

// Default state: open
panel.style.display = '';
toggleBtn.classList.add('open');

toggleBtn.addEventListener('click', toggleDropdown);
// Make header clickable and accessible
header.addEventListener('click', (e) => {
  // Prevent double toggling if click is on button
  if (e.target !== toggleBtn && !toggleBtn.contains(e.target)) {
    toggleDropdown();
  }
});
header.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    toggleDropdown();
  }
});
// Optional: close dropdown if you click outside
document.addEventListener('click', function(e) {
    if (!escrowWrapper.contains(e.target)) {
        escrowWrapper.classList.remove('open');
    }
});

// --- MODAL LOGIC ---
const modalOverlay = document.getElementById('modalOverlay');
const addFundsModal = document.getElementById('addFundsModal');
const withdrawModal = document.getElementById('withdrawModal');
const sendModal = document.getElementById('sendModal');

document.getElementById('openAddFunds').onclick = function() {
    openModal(addFundsModal);
};
document.getElementById('openWithdraw').onclick = function() {
    openModal(withdrawModal);
};
document.getElementById('openSend').onclick = function() {
    openModal(sendModal);
};

// Close Modal (by close button or overlay)
document.querySelectorAll('[data-close-modal]').forEach(btn => {
    btn.onclick = closeAllModals;
});
modalOverlay.onclick = closeAllModals;

function openModal(modal) {
    closeAllModals();
    modal.classList.add('active');
    modalOverlay.classList.add('active');
}
function closeAllModals() {
    document.querySelectorAll('.modal').forEach(m => m.classList.remove('active'));
    modalOverlay.classList.remove('active');
}

// Add Funds Modal - Payment method switch highlighting
document.querySelectorAll('.payment-option input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', function() {
        document.querySelectorAll('.payment-option').forEach(opt => opt.classList.remove('active'));
        this.closest('.payment-option').classList.add('active');
    });
});

// Prevent form submit and close modal, show alert for demo
document.getElementById('addFundsForm').onsubmit = function(e) {
    e.preventDefault();
    alert('Payment processing...');
    closeAllModals();
};
document.getElementById('withdrawForm').onsubmit = function(e) {
    e.preventDefault();
    alert('Withdrawal processing...');
    closeAllModals();
};
document.getElementById('sendForm').onsubmit = function(e) {
    e.preventDefault();
    alert('Sending funds...');
    closeAllModals();
};
// Modal show/hide logic assumed global, only add the radio highlight for bank selection:
document.querySelectorAll('.bank-account-option input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', function() {
        document.querySelectorAll('.bank-account-option').forEach(opt => opt.classList.remove('active'));
        this.closest('.bank-account-option').classList.add('active');
    });
});

// Prevent form submit for demo
document.getElementById('withdrawForm').onsubmit = function(e) {
    e.preventDefault();
    alert('Withdrawal processing...');
};
// Modal show/hide logic assumed global.
// Prevent form submit for demo:
document.getElementById('sendForm').onsubmit = function(e) {
    e.preventDefault();
    alert('Funds sent!');
};
// Copy wallet ID button logic
document.querySelectorAll('.copy-id-btn').forEach(btn => {
    btn.onclick = function() {
        const walletId = btn.parentElement.querySelector('#walletIdText').textContent.replace('Wallet ID: ', '');
        navigator.clipboard.writeText(walletId);
        btn.innerHTML = '<i class="fa-solid fa-check"></i>';
        setTimeout(() => {
            btn.innerHTML = '<i class="fa-regular fa-copy"></i>';
        }, 1200);
    };
});
// Tab switching logic
document.querySelectorAll('.tab').forEach((tab, idx) => {
  tab.addEventListener('click', function() {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    this.classList.add('active');
    // Switch content if there are multiple tabs/sections
    // For this mockup, actual tab content switching isn't implemented.
  });
});
// helper to load HTML fragment into a container
// function includeHTML(containerId, url) {
//     fetch(url)
//         .then(res => {
//         if (!res.ok) throw new Error(`Failed to load ${url}`);
//         return res.text();
//         })
//         .then(html => {
//         document.getElementById(containerId).innerHTML = html;
//     })
//     .catch(console.error);
// }

// // on DOM ready
// document.addEventListener('DOMContentLoaded', () => {
//     includeHTML('site-header', '/partials/navbar.html');
//     includeHTML('site-footer', '/partials/footer.html');
// });

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
// Show the modal when "+ Add New Bank Account" is clicked
document.querySelectorAll('.add-bank-link a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('addBankModal').classList.add('active');
        document.getElementById('modalOverlay').classList.add('active');
    });
});
// Hide modal logic (assumes global modal overlay/close logic is present)

// Prevent form submit for demo and simulate account addition
document.getElementById('addBankForm').onsubmit = function(e) {
    e.preventDefault();
    alert('Bank account added!');
    // Optionally, close modal
    document.getElementById('addBankModal').classList.remove('active');
    document.getElementById('modalOverlay').classList.remove('active');
    // Optionally, update bank list in withdraw popup dynamically here!
};
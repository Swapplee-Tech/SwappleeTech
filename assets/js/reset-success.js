document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('lottieSuccess');
    if (!container) {
        console.error('Lottie container element not found');
        return;
    }

    const anim = lottie.loadAnimation({
        container: container,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: './assets/animation/success-animation.json',
        rendererSettings: {
            progressiveLoad: true
        }
    });

    anim.addEventListener('data_failed', () => {
        console.error('Failed to load animation data');
        container.innerHTML = '<span style="font-size:50px">🎉</span>';
    });

    anim.addEventListener('error', (err) => {
        console.error('Lottie Error:', err);
    });
});
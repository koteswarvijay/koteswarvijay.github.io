(function () {
    // ── Header injection ──────────────────────────────────────────
    const page = location.pathname.split('/').pop() || 'index.html';
    const onIndex = page === 'index.html' || page === '';
    const p = onIndex ? '' : 'index.html';

    const navItems = [
        { label: 'About',            href: onIndex ? '#about' : 'index.html' },
        { label: 'Projects',         href: 'projects.html' },
        { label: 'Skills',           href: `${p}#skills` },
        { label: 'Key Achievements', href: `${p}#accomplishments` },
        { label: 'Contact',          href: `${p}#contact` }
    ];

    const isActive = (href) =>
        page === 'projects.html' ? href === 'projects.html'
                                 : onIndex && (href === '#about' || href === 'index.html');

    const navHTML = navItems.map(({ label, href, cls }) => {
        const classes = [cls, isActive(href) && 'active'].filter(Boolean).join(' ');
        return `<a href="${href}"${classes ? ` class="${classes}"` : ''}>${label}</a>`;
    }).join('');

    document.querySelector('header .header-content').innerHTML = `
        <div class="header-left">
            <img src="Vijay-Pic-2025.JPG" alt="Vijay Koteswar" class="profile-pic">
            <div class="header-text">
                <h1>Vijay Koteswar</h1>
                <p>Technology Delivery Leader</p>
            </div>
        </div>
        <nav>${navHTML}</nav>`;

    // ── Scroll-reveal utility ─────────────────────────────────────
    // Usage: revealOnScroll(selector, { threshold, stagger, once })
    //   stagger – ms delay multiplied by element index (for cascading effect)
    window.revealOnScroll = function (selector, opts) {
        const { threshold = 0.1, stagger = 0, once = true } = opts || {};
        const els = document.querySelectorAll(selector);
        if (!els.length) return;
        const io = new IntersectionObserver((entries) => {
            entries.forEach((entry, i) => {
                if (!entry.isIntersecting) return;
                setTimeout(() => entry.target.classList.add('visible'), stagger ? i * stagger : 0);
                if (once) io.unobserve(entry.target);
            });
        }, { threshold });
        els.forEach(el => io.observe(el));
    };
})();

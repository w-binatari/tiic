document.addEventListener('DOMContentLoaded', () => {
    initMobileNav();
    initHeroParallax();
    initSmoothScroll();
    initContactForm();
    initStickySubNav();
    initJourneySteps();
    initFinalistFilters();
});

function initMobileNav() {
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.main-nav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', () => {
        const open = nav.classList.toggle('open');
        toggle.setAttribute('aria-expanded', open);
    });

    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => nav.classList.remove('open'));
    });
}

function initHeroParallax() {
    const hero = document.querySelector('.hero');
    const bg = document.querySelector('.hero-bg');
    if (!hero || !bg) return;

    const maxShift = 24;

    hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        bg.style.transform = `translate(${x * maxShift}px, ${y * maxShift}px) scale(1.08)`;
    });

    hero.addEventListener('mouseleave', () => {
        bg.style.transform = 'translate(0, 0) scale(1.05)';
    });

    bg.style.transform = 'scale(1.05)';
}

function getScrollOffset() {
    const header = document.querySelector('.site-header');
    const subNav = document.querySelector('.sub-nav-bar');
    const headerH = header ? header.offsetHeight : 68;
    const subNavH = subNav && isSubNavStuck(subNav) ? subNav.offsetHeight : 0;
    return headerH + subNavH + 8;
}

function isSubNavStuck(subNav) {
    const region = subNav.closest('.section-nav-region');
    if (!region) return false;
    const rect = subNav.getBoundingClientRect();
    const header = document.querySelector('.site-header');
    const headerBottom = header ? header.getBoundingClientRect().bottom : 68;
    return Math.abs(rect.top - headerBottom) < 2;
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const id = anchor.getAttribute('href');
            if (!id || id === '#') return;
            const target = document.querySelector(id);
            if (!target) return;
            e.preventDefault();

            const offset = getScrollOffset();
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        });
    });
}

function initStickySubNav() {
    const region = document.querySelector('.section-nav-region');
    const subNavBar = document.querySelector('.sub-nav-bar');
    if (!region || !subNavBar) return;

    const links = subNavBar.querySelectorAll('.sub-nav a');
    const sections = Array.from(links)
        .map(link => document.querySelector(link.getAttribute('href')))
        .filter(Boolean);

    const header = document.querySelector('.site-header');

    const syncStickyTop = () => {
        if (!header) return;
        subNavBar.style.top = `${header.getBoundingClientRect().height}px`;
    };

    syncStickyTop();
    window.addEventListener('scroll', syncStickyTop, { passive: true });
    window.addEventListener('resize', syncStickyTop);

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    links.forEach(link => {
                        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                    });
                }
            });
        },
        {
            rootMargin: `-${getScrollOffset()}px 0px -55% 0px`,
            threshold: 0,
        }
    );

    sections.forEach(section => observer.observe(section));
}

function initContactForm() {
    const form = document.querySelector('.contact-form form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        const original = btn.textContent;
        btn.textContent = 'Message Sent';
        btn.disabled = true;
        setTimeout(() => {
            btn.textContent = original;
            btn.disabled = false;
            form.reset();
        }, 2500);
    });
}

function initJourneySteps() {
    const container = document.querySelector('.journey-steps--interactive');
    if (!container) return;

    const steps = container.querySelectorAll('.journey-step');
    const panel = document.querySelector('.journey-panel');
    if (!steps.length || !panel) return;

    const activate = (step) => {
        const key = step.dataset.step;
        steps.forEach(s => {
            const active = s === step;
            s.classList.toggle('is-active', active);
            s.setAttribute('aria-selected', active);
        });
        panel.querySelectorAll('.journey-panel-item').forEach(item => {
            item.classList.toggle('is-active', item.dataset.step === key);
        });
    };

    steps.forEach(step => {
        step.addEventListener('click', () => activate(step));
        step.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                activate(step);
            }
        });
    });
}

function initFinalistFilters() {
    const grid = document.getElementById('finalists-grid');
    const search = document.getElementById('finalist-search');
    const count = document.getElementById('finalist-filter-count');
    if (!grid) return;

    const tiles = Array.from(grid.querySelectorAll('.finalist-tile'));

    tiles.forEach(tile => {
        const project = tile.querySelector('.finalist-project');
        const button = tile.querySelector('.finalist-read-more');
        if (!project || !button) return;

        const full = project.dataset.fullTitle || project.textContent.trim();
        project.dataset.fullTitle = full;

        const needsTruncate = full.length > 90;
        if (!needsTruncate) return;

        project.classList.add('is-truncated');
        button.hidden = false;
        button.addEventListener('click', () => {
            const expanded = project.classList.toggle('is-expanded');
            project.classList.toggle('is-truncated', !expanded);
            button.textContent = expanded ? 'Show less' : 'Read more';
        });
    });

    if (!search || !count) return;

    const update = () => {
        const q = search.value.trim().toLowerCase();
        let visible = 0;
        tiles.forEach(tile => {
            const haystack = [
                tile.dataset.name || '',
                tile.dataset.org || '',
                tile.dataset.title || '',
                tile.id || ''
            ].join(' ');
            const match = !q || haystack.includes(q);
            tile.hidden = !match;
            if (match) visible += 1;
        });
        count.textContent = `Showing ${visible} of ${tiles.length}`;
    };

    search.addEventListener('input', update);
    update();
}

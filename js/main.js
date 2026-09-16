document.addEventListener('DOMContentLoaded', () => {
    const C = window.DIRI_CONTENT;
    if (!C) return;

    initMobileNav();
    initHeroParallax();
    initSmoothScroll();
    initCountdown(C);
    initApplyCtas(C);
    renderStats(C);
    renderFunnel(C);
    renderFocus(C);
    renderTimeline(C);
    renderEligibility(C);
    renderAwards(C);
    renderPartners(C);
    renderOrganisers(C);
    renderFaq(C);
    initPdfSlot(C);
    initScrollReveal();
    initActiveNav();
});

function initMobileNav() {
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.main-nav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', () => {
        const open = nav.classList.toggle('open');
        toggle.setAttribute('aria-expanded', open);
    });

    nav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            nav.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
        });
    });
}

function initHeroParallax() {
    const hero = document.querySelector('.hero');
    const bg = document.querySelector('.hero-bg');
    if (!hero || !bg) return;

    const maxShift = 18;
    hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        bg.style.transform = `translate(${x * maxShift}px, ${y * maxShift}px) scale(1.05)`;
    });
    hero.addEventListener('mouseleave', () => {
        bg.style.transform = 'translate(0, 0) scale(1.02)';
    });
}

function getScrollOffset() {
    const header = document.querySelector('.site-header');
    return (header ? header.offsetHeight : 72) + 8;
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (e) => {
            const id = anchor.getAttribute('href');
            if (!id || id === '#') return;
            const target = document.querySelector(id);
            if (!target) return;
            e.preventDefault();
            const top = target.getBoundingClientRect().top + window.scrollY - getScrollOffset();
            window.scrollTo({ top, behavior: 'smooth' });
        });
    });
}

function initCountdown(C) {
    const root = document.querySelector('[data-countdown]');
    if (!root) return;

    const open = new Date(`${C.applicationsOpen}T00:00:00`);
    const close = new Date(`${C.applicationsClose}T23:59:59`);
    const label = root.querySelector('.countdown-label');
    const daysEl = root.querySelector('[data-days]');
    const hoursEl = root.querySelector('[data-hours]');
    const minsEl = root.querySelector('[data-mins]');
    const secsEl = root.querySelector('[data-secs]');

    const tick = () => {
        const now = new Date();
        let target = open;
        let mode = 'open';

        if (now >= open && now <= close) {
            target = close;
            mode = 'close';
        } else if (now > close) {
            label.textContent = 'Applications closed';
            daysEl.textContent = '00';
            hoursEl.textContent = '00';
            minsEl.textContent = '00';
            secsEl.textContent = '00';
            return;
        }

        label.textContent = mode === 'open' ? 'Applications open in' : 'Applications close in';
        const diff = Math.max(0, target - now);
        const days = Math.floor(diff / 86400000);
        const hours = Math.floor((diff % 86400000) / 3600000);
        const mins = Math.floor((diff % 3600000) / 60000);
        const secs = Math.floor((diff % 60000) / 1000);
        daysEl.textContent = String(days).padStart(2, '0');
        hoursEl.textContent = String(hours).padStart(2, '0');
        minsEl.textContent = String(mins).padStart(2, '0');
        secsEl.textContent = String(secs).padStart(2, '0');
    };

    tick();
    setInterval(tick, 1000);
}

function initApplyCtas(C) {
    const hasUrl = Boolean(C.applyUrl);
    document.querySelectorAll('[data-apply-cta]').forEach((el) => {
        if (hasUrl) {
            el.setAttribute('href', C.applyUrl);
            el.setAttribute('target', '_blank');
            el.setAttribute('rel', 'noopener');
            el.textContent = C.applyLabel;
            el.classList.remove('is-pending');
        } else {
            el.setAttribute('href', '#apply');
            el.removeAttribute('target');
            el.textContent = C.applyPendingLabel || C.applyLabel;
            el.classList.add('is-pending');
            el.addEventListener('click', (e) => {
                // Keep scroll to #apply working; no external portal yet
                if (el.getAttribute('href') === '#apply') return;
                e.preventDefault();
            });
        }
    });
}

function renderStats(C) {
    const root = document.querySelector('[data-stats]');
    if (!root) return;

    root.innerHTML = C.stats
        .map(
            (s) => `
        <article class="stat-card">
            ${s.approx ? `<span class="qualifier">${s.qualifier || 'approx.'}</span>` : '<span class="qualifier">&nbsp;</span>'}
            <div class="num" data-count="${s.value}" data-prefix="${s.prefix || ''}" data-suffix="${s.suffix || ''}">${s.prefix || ''}0${s.suffix || ''}</div>
            <div class="label">${s.label}</div>
        </article>`
        )
        .join('');

    const nums = root.querySelectorAll('[data-count]');
    const animate = (el) => {
        const target = Number(el.dataset.count);
        const prefix = el.dataset.prefix || '';
        const suffix = el.dataset.suffix || '';
        const duration = 1100;
        const start = performance.now();
        const step = (now) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            const val = Math.round(target * eased);
            el.textContent = `${prefix}${val}${suffix}`;
            if (t < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                nums.forEach(animate);
                io.disconnect();
            });
        },
        { threshold: 0.35 }
    );
    io.observe(root);
}

function renderFunnel(C) {
    const root = document.querySelector('[data-funnel]');
    if (!root) return;
    root.innerHTML = C.funnel
        .map((f) => `<div class="funnel-step">${f.label}<span>${f.detail}</span></div>`)
        .join('');
}

const FOCUS_ICONS = {
    health: '<svg viewBox="0 0 24 24"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7z"/></svg>',
    education: '<svg viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>',
    agriculture: '<svg viewBox="0 0 24 24"><path d="M11 20A7 7 0 019.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>',
    energy: '<svg viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>',
    security: '<svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    transport: '<svg viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',
    environment: '<svg viewBox="0 0 24 24"><path d="M12 22c4-4 6-7.5 6-11a6 6 0 10-12 0c0 3.5 2 7 6 11z"/><circle cx="12" cy="11" r="2"/></svg>',
    social: '<svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>',
};

function renderFocus(C) {
    const root = document.querySelector('[data-focus]');
    if (!root) return;
    root.innerHTML = C.focusAreas
        .map(
            (f) => `
        <li class="focus-item">
            <span class="focus-icon" aria-hidden="true">${FOCUS_ICONS[f.id] || FOCUS_ICONS.social}</span>
            <strong>${f.label}</strong>
        </li>`
        )
        .join('');
}

function renderTimeline(C) {
    const root = document.querySelector('[data-timeline]');
    const note = document.querySelector('[data-timeline-note]');
    if (!root) return;
    root.innerHTML = C.timeline
        .map(
            (row, i) => `
        <li class="timeline-row">
            <span class="timeline-index">${String(i + 1).padStart(2, '0')}</span>
            <span class="timeline-stage">${row.stage}</span>
            <span class="timeline-dates">${row.dates}</span>
        </li>`
        )
        .join('');
    if (note) note.textContent = C.timelineNote;
}

function renderEligibility(C) {
    const root = document.querySelector('[data-eligibility]');
    const note = document.querySelector('[data-eligibility-note]');
    if (!root) return;
    root.innerHTML = C.eligibility
        .map(
            (item) => `
        <li>
            <span class="check-mark" aria-hidden="true">✓</span>
            <span>${item.text}${item.pending ? '<span class="pending-tag">TBC</span>' : ''}</span>
        </li>`
        )
        .join('');
    if (note) note.textContent = C.eligibilityNote;
}

function renderAwards(C) {
    const root = document.querySelector('[data-awards]');
    const budget = document.querySelector('[data-prize-budget]');
    const note = document.querySelector('[data-prize-note]');
    if (budget) budget.textContent = C.prizeBudgetLabel;
    if (note) note.textContent = C.prizeBudgetNote;
    if (!root) return;
    root.innerHTML = C.awards.categories
        .map(
            (name, i) => `
        <li class="award-item">
            <span class="award-index">${String(i + 1).padStart(2, '0')}</span>
            <strong>${name}</strong>
        </li>`
        )
        .join('');
}

function renderPartners(C) {
    const root = document.querySelector('[data-partners]');
    const note = document.querySelector('[data-partners-note]');
    if (note) note.textContent = C.partners.note;
    if (!root) return;
    root.innerHTML = C.partners.groups
        .map(
            (g) => `
        <div class="partner-group">
            <h3>${g.name}</h3>
            <div class="partner-slots">
                ${Array.from({ length: g.slots })
                    .map(() => '<div class="partner-slot">Logo soon</div>')
                    .join('')}
            </div>
        </div>`
        )
        .join('');
}

function renderOrganisers(C) {
    const root = document.querySelector('[data-organisers]');
    if (!root) return;
    root.innerHTML = C.organisers
        .map(
            (o) => `
        <article class="organiser-card">
            <img src="${o.logo}" alt="${o.name}">
            <h3>${o.name}</h3>
            <p>${o.blurb}</p>
            <a class="more" href="${o.url}" target="_blank" rel="noopener">Visit site</a>
        </article>`
        )
        .join('');
}

function renderFaq(C) {
    const root = document.querySelector('[data-faq]');
    if (!root) return;
    root.innerHTML = C.faq
        .map(
            (item, i) => `
        <div class="faq-item${i === 0 ? ' is-open' : ''}">
            <button type="button" aria-expanded="${i === 0}">${item.q}</button>
            <div class="faq-a">${item.a}</div>
        </div>`
        )
        .join('');

    root.querySelectorAll('.faq-item button').forEach((btn) => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.faq-item');
            const open = item.classList.toggle('is-open');
            btn.setAttribute('aria-expanded', open);
        });
    });
}

function initPdfSlot(C) {
    const slot = document.querySelector('[data-pdf-slot]');
    const link = document.querySelector('[data-pdf-link]');
    if (!slot || !link || !C.footer.pdfUrl) return;
    slot.hidden = false;
    link.href = C.footer.pdfUrl;
    link.textContent = C.footer.pdfLabel;
}

function initScrollReveal() {
    const targets = document.querySelectorAll(
        '.section-heading-block, .stats-strip, .funnel, .focus-grid, .timeline-track, .checklist, .awards-grid, .partner-groups, .organisers-grid, .faq-list, .about-grid'
    );
    targets.forEach((el) => el.classList.add('reveal'));
    const io = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    io.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    targets.forEach((el) => io.observe(el));
}

function initActiveNav() {
    const links = document.querySelectorAll('.main-nav a[href^="#"]');
    const sections = Array.from(links)
        .map((link) => document.querySelector(link.getAttribute('href')))
        .filter(Boolean);

    const io = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                const id = entry.target.getAttribute('id');
                links.forEach((link) => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                });
            });
        },
        { rootMargin: `-${getScrollOffset()}px 0px -55% 0px`, threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));
}

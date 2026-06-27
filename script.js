/* ─── DATA ─── */
const rates = {
    USD: 5200,
    SAR: 1386.67,
    AED: 1416.89,
    KWD: 16952,
    BHD: 13780,
    OMR: 13520,
    QAR: 1428.57,
    EUR: 5700,
    GBP: 6600,
    TRY: 152,
    EGP: 108,
    CNY: 720,
    INR: 62
};

const curNames = {
    USD: 'دولار أمريكي',
    SAR: 'ريال سعودي',
    AED: 'درهم إماراتي',
    KWD: 'دينار كويتي',
    BHD: 'دينار بحريني',
    OMR: 'ريال عماني',
    QAR: 'ريال قطري',
    EUR: 'يورو',
    GBP: 'جنيه إسترليني',
    TRY: 'ليرة تركية',
    EGP: 'جنيه مصري',
    CNY: 'يوان صيني',
    INR: 'روبية هندية'
};

/* ─── NAV TOGGLE ─── */
const burger = document.getElementById('hamburger');
const menu   = document.getElementById('navMenu');
const bIcon  = document.getElementById('hamburgerIcon');

burger.addEventListener('click', () => {
    menu.classList.toggle('open');
    bIcon.className = menu.classList.contains('open') ? 'fas fa-times' : 'fas fa-bars';
});

menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    menu.classList.remove('open');
    bIcon.className = 'fas fa-bars';
}));

/* ─── BACK TO TOP ─── */
const btt = document.getElementById('btt');
window.addEventListener('scroll', () => btt.classList.toggle('show', window.scrollY > 500));
btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ─── STAT COUNTER ─── */
function countUp(el, target, suffix, duration) {
    let start = 0;
    const step = Math.ceil(target / (duration / 30));
    const id = setInterval(() => {
        start = Math.min(start + step, target);
        el.textContent = start.toLocaleString('ar') + (suffix || '');
        if (start >= target) clearInterval(id);
    }, 30);
}

let counted = false;
const heroObs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !counted) {
        counted = true;
        countUp(document.getElementById('sUsers'), 5000, '+', 1800);
        countUp(document.getElementById('sSat'),   98,   '%', 1200);
    }
});
heroObs.observe(document.querySelector('.hero-stats'));

/* ─── MODAL ─── */
const modal = document.getElementById('modal');
const iconMap = {
    'ستارلينك': '📡',
    'فيزا':     '💳',
    'ماستر':    '💳',
    'استرجاع':  '🔐',
    'الدفع':    '💸',
    'الدعم':    '🎧',
    'default':  '⚙️'
};

function getIcon(svc) {
    for (const [k, v] of Object.entries(iconMap)) {
        if (svc.includes(k)) return v;
    }
    return iconMap.default;
}

document.querySelectorAll('.svc-card').forEach(card => {
    card.addEventListener('click', () => openModal(card.dataset.svc));
});

function openModal(svcName) {
    document.getElementById('mSvc').textContent  = svcName || '';
    document.getElementById('mIcon').textContent = getIcon(svcName || '');
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
}

modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        closeModal();
        closeCurrencyPanel();
    }
});

/* ─── CURRENCY PANEL ─── */
const currencyPanel = document.getElementById('currencyPanel');
const panelOverlay  = document.getElementById('panelOverlay');

function openCurrencyPanel() {
    currencyPanel.classList.add('open');
    panelOverlay.classList.add('show');
    panelConvert();
}

function closeCurrencyPanel() {
    currencyPanel.classList.remove('open');
    panelOverlay.classList.remove('show');
}

function panelConvert() {
    const amt    = parseFloat(document.getElementById('panelAmt').value) || 0;
    const cur    = document.getElementById('panelCur').value;
    const result = amt * rates[cur];
    document.getElementById('panelResult').textContent = result.toLocaleString('ar') + ' ج.س';
    document.getElementById('panelEq').textContent =
        `${amt} ${curNames[cur]} = ${result.toLocaleString('ar')} جنيه سوداني`;
}

/* ─── THEME TOGGLE ─── */
let isDark = true;
const themeIcon = document.getElementById('themeIcon');
const flash     = document.getElementById('themeFlash');

function flashEffect() {
    flash.classList.add('flash');
    setTimeout(() => flash.classList.remove('flash'), 300);
}

function toggleTheme() {
    flashEffect();
    isDark = !isDark;
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    themeIcon.innerHTML = isDark
        ? '<i class="fas fa-moon"></i>'
        : '<i class="fas fa-sun" style="color:#FFB400"></i>';
}

/* ─── LANGUAGE TOGGLE ─── */
let isAr = true;
const langIcon = document.getElementById('langIcon');

function toggleLang() {
    flashEffect();
    isAr = !isAr;
    const lang = isAr ? 'ar' : 'en';
    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('lang', lang);
    document.body.setAttribute('dir', isAr ? 'rtl' : 'ltr');
    document.body.style.textAlign = isAr ? 'right' : 'left';
    langIcon.textContent = isAr ? 'EN' : 'ع';

    // Swap all data-ar / data-en elements
    document.querySelectorAll(`[data-${lang}]`).forEach(el => {
        const txt = el.getAttribute(`data-${lang}`);
        if (txt) el.innerHTML = txt;
    });
}

/* ─── SCROLL REVEAL ─── */
const revealEls = document.querySelectorAll('.reveal');
const revObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('visible');
            revObs.unobserve(e.target);
        }
    });
}, { threshold: 0.12 });

revealEls.forEach(el => revObs.observe(el));

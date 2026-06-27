// ========================================
//  YasserCom - script.js
//  Language: Arabic (default) | French
// ========================================

const translations = {
  ar: {
    dir: "rtl",
    navHome: "الرئيسية",
    navAbout: "من نحن",
    navServices: "الخدمات",
    navContact: "تواصل معنا",
    heroTitle: "مرحباً بك في <span>ياسر كوم</span>",
    heroSubtitle: "منصتك الإلكترونية المتكاملة لأفضل العروض والخدمات",
    heroCTA: "استكشف الآن",
    heroLearn: "اعرف المزيد",
    sectionTitle: "أحدث العروض",
    sectionSub: "اكتشف أفضل الصفقات والعروض المتاحة الآن",
    statsUsers: "مستخدم نشط",
    statsProducts: "منتج متاح",
    statsYears: "سنوات خبرة",
    statsSatisfied: "عميل راضٍ",
    card1Title: "عروض حصرية",
    card1Text: "تمتع بأفضل الأسعار وأحدث العروض الحصرية المقدمة خصيصاً لك.",
    card1Badge: "جديد",
    card2Title: "خدمات متميزة",
    card2Text: "نوفر لك باقة شاملة من الخدمات عالية الجودة لتلبية احتياجاتك.",
    card2Badge: "مميز",
    card3Title: "تواصل سريع",
    card3Text: "فريق الدعم متاح على مدار الساعة للإجابة على جميع استفساراتك.",
    card3Badge: "24/7",
    footerTagline: "منصتك الموثوقة للتسوق والخدمات الإلكترونية",
    footerLinksTitle: "روابط سريعة",
    footerSupportTitle: "الدعم",
    link1: "الرئيسية",
    link2: "من نحن",
    link3: "الخدمات",
    link4: "المنتجات",
    sup1: "مركز المساعدة",
    sup2: "سياسة الخصوصية",
    sup3: "الشروط والأحكام",
    copyright: "© 2025 ياسر كوم. جميع الحقوق محفوظة.",
    footerBrand: "ياسر <span>كوم</span>",
  },
  fr: {
    dir: "ltr",
    navHome: "Accueil",
    navAbout: "À propos",
    navServices: "Services",
    navContact: "Contact",
    heroTitle: "Bienvenue sur <span>Yasser Com</span>",
    heroSubtitle: "Votre plateforme numérique complète pour les meilleures offres et services",
    heroCTA: "Explorer maintenant",
    heroLearn: "En savoir plus",
    sectionTitle: "Dernières offres",
    sectionSub: "Découvrez les meilleures offres et promotions disponibles dès maintenant",
    statsUsers: "Utilisateurs actifs",
    statsProducts: "Produits disponibles",
    statsYears: "Ans d'expérience",
    statsSatisfied: "Clients satisfaits",
    card1Title: "Offres exclusives",
    card1Text: "Profitez des meilleurs prix et des dernières offres exclusives proposées spécialement pour vous.",
    card1Badge: "Nouveau",
    card2Title: "Services premium",
    card2Text: "Nous vous proposons une gamme complète de services de haute qualité pour répondre à vos besoins.",
    card2Badge: "Premium",
    card3Title: "Support rapide",
    card3Text: "Notre équipe de support est disponible 24h/24 pour répondre à toutes vos questions.",
    card3Badge: "24/7",
    footerTagline: "Votre plateforme de confiance pour le shopping et les services en ligne",
    footerLinksTitle: "Liens rapides",
    footerSupportTitle: "Support",
    link1: "Accueil",
    link2: "À propos",
    link3: "Services",
    link4: "Produits",
    sup1: "Centre d'aide",
    sup2: "Politique de confidentialité",
    sup3: "Termes et conditions",
    copyright: "© 2025 Yasser Com. Tous droits réservés.",
    footerBrand: "Yasser <span>Com</span>",
  }
};

let currentLang = 'ar';

function applyLanguage(lang) {
  const t = translations[lang];
  const body = document.body;

  // Direction
  body.dir = t.dir;
  body.classList.toggle('lang-fr', lang === 'fr');

  // Nav
  setText('nav-home', t.navHome);
  setText('nav-about', t.navAbout);
  setText('nav-services', t.navServices);
  setText('nav-contact', t.navContact);

  // Hero
  setHTML('hero-title', t.heroTitle);
  setText('hero-subtitle', t.heroSubtitle);
  setText('hero-cta', t.heroCTA);
  setText('hero-learn', t.heroLearn);

  // Section
  setText('section-title', t.sectionTitle);
  setText('section-sub', t.sectionSub);

  // Stats
  setText('stat-users', t.statsUsers);
  setText('stat-products', t.statsProducts);
  setText('stat-years', t.statsYears);
  setText('stat-satisfied', t.statsSatisfied);

  // Cards
  setText('card1-title', t.card1Title);
  setText('card1-text', t.card1Text);
  setText('card1-badge', t.card1Badge);
  setText('card2-title', t.card2Title);
  setText('card2-text', t.card2Text);
  setText('card2-badge', t.card2Badge);
  setText('card3-title', t.card3Title);
  setText('card3-text', t.card3Text);
  setText('card3-badge', t.card3Badge);

  // Footer
  setText('footer-tagline', t.footerTagline);
  setText('footer-links-title', t.footerLinksTitle);
  setText('footer-support-title', t.footerSupportTitle);
  setText('flink1', t.link1);
  setText('flink2', t.link2);
  setText('flink3', t.link3);
  setText('flink4', t.link4);
  setText('fsup1', t.sup1);
  setText('fsup2', t.sup2);
  setText('fsup3', t.sup3);
  setText('footer-copy', t.copyright);
  setHTML('footer-brand', t.footerBrand);

  // Language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  currentLang = lang;

  // Save preference
  try { localStorage.setItem('yc_lang', lang); } catch(e) {}
}

function setText(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}

function setHTML(id, val) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = val;
}

// Init on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  // Language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
  });

  // Load saved or default language
  let saved = 'ar';
  try { saved = localStorage.getItem('yc_lang') || 'ar'; } catch(e) {}
  applyLanguage(saved);

  // Smooth active nav highlight on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav ul li a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 100) {
        current = sec.getAttribute('id');
      }
    });
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  });
});

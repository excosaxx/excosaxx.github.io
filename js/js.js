const translations = {
  ru: {
    pageTitle: 'Информация обо мне',
    profileLabel: 'Профиль',
    introText: 'Этот сайт создан, чтобы было проще найти меня в других соцсетях. Нажмите на любую кнопку ниже, чтобы перейти.',
    navLabel: 'Социальные сети',
    profileAria: 'Профиль'
  },
  en: {
    pageTitle: 'About me',
    profileLabel: 'Profile',
    introText: 'This site was created to make it easier to find me on other social networks. Click any button below to go.',
    navLabel: 'Social networks',
    profileAria: 'Profile'
  },
  it: {
    pageTitle: 'Informazioni su di me',
    profileLabel: 'Profilo',
    introText: 'Questo sito è stato creato per trovare più facilmente i miei profili nelle altre reti sociali. Premi un qualsiasi pulsante qui sotto per andare avanti.',
    navLabel: 'Social network',
    profileAria: 'Profilo'
  }
};

const langButtons = document.querySelectorAll('.lang-btn');
const i18nNodes = document.querySelectorAll('[data-i18n]');
const socialNav = document.querySelector('.social-nav');
const profileCard = document.querySelector('.profile-card');
const deviceToggle = document.getElementById('deviceToggle');

function applyLanguage(lang) {
  const locale = translations[lang] || translations.ru;

  document.documentElement.lang = lang;
  document.title = locale.pageTitle;

  i18nNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (locale[key]) {
      node.textContent = locale[key];
    }
  });

  if (socialNav) {
    socialNav.setAttribute('aria-label', locale.navLabel);
  }

  if (profileCard) {
    profileCard.setAttribute('aria-label', locale.profileAria);
  }

  langButtons.forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
}

langButtons.forEach((button) => {
  button.addEventListener('click', () => {
    applyLanguage(button.dataset.lang);
  });
});

if (deviceToggle) {
  deviceToggle.addEventListener('click', () => {
    const isMobile = document.body.classList.toggle('device-preview-mobile');
    const nextLabel = isMobile ? 'PHONE' : 'PC';
    deviceToggle.textContent = nextLabel;
    deviceToggle.setAttribute('aria-pressed', String(isMobile));
  });
}

applyLanguage('ru');
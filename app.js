/* Youtify — сайт только для скачивания приложения. */

const root = document.getElementById('app');
const DOWNLOADS = window.YOUTIFY_DOWNLOADS || {
  installer: 'downloads/Youtify%20Setup%200.1.0.exe',
  portable: 'downloads/Youtify.exe'
};

const LANGS = ['en', 'uk', 'ru'];
let lang = localStorage.getItem('youtify_site_lang') || 'en';
if (!LANGS.includes(lang)) lang = 'en';

const STRINGS = {
  en: {
    download: 'Download', install: 'Download installer (.exe)', portable: 'Portable version',
    eyebrow: 'SPOTIFY + YOUTUBE MUSIC + DEEZER',
    title1: 'All your music.', title2: 'One app.',
    desc: 'Youtify is a desktop player for Windows: three platforms in one search, full-length tracks, manual source choice, playlists, listening history and Discord status.',
    hint: 'Windows 10/11 · ~103 MB · no registration',
    features: 'What it can do', featuresHint: 'features',
    f1: 'Search everywhere', f1d: 'Tracks from Spotify, YouTube Music and Deezer in one search, no duplicates.',
    f2: 'Local profiles', f2d: 'Playlists, liked tracks and history — no registration or password.',
    f3: 'Full tracks & player', f3d: 'Plays the full version, lets you pick the source when a track is on several platforms, plus play/pause, queue, seek and volume.',
    f4: 'Discord', f4d: 'Show what you are listening to with cover art and progress.',
    f5: 'Custom theme', f5d: 'Any colors: red, green or whatever you like.',
    f6: 'Always up to date', f6d: 'Get a notification when a new version is released and download it right from Settings.',
    platforms: 'Platforms', platformsHint: 'availability',
    win: 'Windows', winState: 'Available now', linux: 'Linux', linuxState: 'Coming soon',
    yourPlaylists: 'YOUR PLAYLISTS',
    heroMain: 'Home', heroSearch: 'Search', heroMix: 'Made for you', heroPlaylists: 'Playlists',
    heroTitle: 'All your music.\nOne app.', heroCta: 'Start searching',
    heroLiked: 'Liked songs', heroPlaylist: 'Night drive',
    pageTitle: 'Youtify — music without borders',
    pageDesc: 'Youtify is a desktop player for Windows: full tracks, manual source choice, three platforms in one search. Download the app.',
    noScript: 'Enable JavaScript to use this site.',
    languageButton: 'Change language'
  },
  uk: {
    download: 'Скачати', install: 'Скачати інсталятор (.exe)', portable: 'Портативна версія',
    eyebrow: 'SPOTIFY + YOUTUBE MUSIC + DEEZER',
    title1: 'Вся музика.', title2: 'Один застосунок.',
    desc: 'Youtify — десктопний плеєр для Windows: три платформи в одному пошуку, повні треки, вибір джерела вручну, плейлисти, історія та статус у Discord.',
    hint: 'Windows 10/11 · ~103 МБ · без реєстрації',
    features: 'Що вміє', featuresHint: 'можливості',
    f1: 'Пошук скрізь', f1d: 'Треки Spotify, YouTube Music і Deezer в одному пошуку, без дублів.',
    f2: 'Локальні профілі', f2d: 'Плейлисти, улюблені треки та історія — без реєстрації.',
    f3: 'Повні треки й плеєр', f3d: 'Грає повну версію, дозволяє обрати джерело, якщо трек є на кількох платформах, плюс play/pause, черга, перемотка й гучність.',
    f4: 'Discord', f4d: 'Показуй, що слухаєш, з обкладинкою та прогресом.',
    f5: 'Своя тема', f5d: 'Будь-які кольори: червоний, зелений або інший.',
    f6: 'Завжди актуальний', f6d: 'Отримуй сповіщення про нову версію та завантажуй її просто в Налаштуваннях.',
    platforms: 'Платформи', platformsHint: 'доступність',
    win: 'Windows', winState: 'Вже доступно', linux: 'Linux', linuxState: 'Незабаром',
    yourPlaylists: 'ТВОЇ ПЛЕЙЛИСТИ',
    heroMain: 'Головна', heroSearch: 'Пошук', heroMix: 'Підбірка', heroPlaylists: 'Плейлисти',
    heroTitle: 'Вся музика.\nОдин застосунок.', heroCta: 'Почати пошук',
    heroLiked: 'Улюблені треки', heroPlaylist: 'Нічна їзда',
    pageTitle: 'Youtify — музика без меж',
    pageDesc: 'Youtify — десктопний плеєр для Windows: повні треки, вибір джерела та три платформи в одному пошуку. Завантаж застосунок.',
    noScript: 'Для роботи сайту увімкни JavaScript.',
    languageButton: 'Змінити мову'
  },
  ru: {
    download: 'Скачать', install: 'Скачать установщик (.exe)', portable: 'Портативная версия',
    eyebrow: 'SPOTIFY + YOUTUBE MUSIC + DEEZER',
    title1: 'Вся музыка.', title2: 'Одно приложение.',
    desc: 'Youtify — десктопный плеер для Windows: три платформы в одном поиске, полные треки, ручной выбор источника, плейлисты, история прослушивания и статус в Discord.',
    hint: 'Windows 10/11 · ~103 МБ · без регистрации',
    features: 'Что умеет приложение', featuresHint: 'возможности',
    f1: 'Поиск везде', f1d: 'Треки Spotify, YouTube Music и Deezer в одном поиске, без дублей.',
    f2: 'Локальные профили', f2d: 'Плейлисты, любимые треки и история — без регистрации и пароля.',
    f3: 'Полные треки и плеер', f3d: 'Играет полную версию, позволяет выбрать источник, если трек есть на нескольких платформах, плюс play/pause, очередь, перемотка и громкость.',
    f4: 'Discord', f4d: 'Показывай, что слушаешь, с обложкой и прогрессом трека.',
    f5: 'Своя тема', f5d: 'Произвольные цвета интерфейса: красный, зелёный или что угодно.',
    f6: 'Всегда актуален', f6d: 'Уведомление о новой версии и скачивание прямо в Настройках.',
    platforms: 'Платформы', platformsHint: 'доступность',
    win: 'Windows', winState: 'Уже доступно', linux: 'Linux', linuxState: 'Скоро выйдет',
    yourPlaylists: 'ТВОИ ПЛЕЙЛИСТЫ',
    heroMain: 'Главная', heroSearch: 'Поиск', heroMix: 'Подборка', heroPlaylists: 'Плейлисты',
    heroTitle: 'Вся музыка.\nОдно приложение.', heroCta: 'Начать поиск',
    heroLiked: 'Любимые треки', heroPlaylist: 'Ночная езда',
    pageTitle: 'Youtify — музыка без границ',
    pageDesc: 'Youtify — десктопный плеер для Windows: полные треки, выбор источника и три платформы в одном поиске. Скачай приложение.',
    noScript: 'Для работы сайта включите JavaScript.',
    languageButton: 'Сменить язык'
  }
};

function t(key) {
  return (STRINGS[lang] || STRINGS.en)[key] || STRINGS.en[key] || key;
}

function applyLang() {
  document.documentElement.lang = lang;
  document.title = t('pageTitle');
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute('content', t('pageDesc'));
}

function setLang(next) {
  lang = next;
  localStorage.setItem('youtify_site_lang', lang);
  applyLang();
  render();
}

function render() {
  root.innerHTML = `
  <div class="landing">
    <header class="site-header">
      <a class="brand" href="#/">
        <img class="brand-icon" src="favicon.ico" alt="" />
        <span class="brand-name">youtify<span class="brand-dot">.</span></span>
      </a>
      <div class="header-actions">
        <button class="lang-button" id="langButton" title="${t('languageButton')}">${lang.toUpperCase()}</button>
        <a class="btn btn-primary" href="${DOWNLOADS.installer}" download>${t('download')}</a>
      </div>
    </header>

    <main>
      <section class="hero-landing">
        <div class="hero-landing-content">
          <div class="hero-eyebrow">${t('eyebrow')}</div>
          <h1>${t('title1')}<br />${t('title2')}</h1>
          <p>${t('desc')}</p>
          <div class="landing-actions">
            <a class="btn btn-primary" href="${DOWNLOADS.installer}" download>${t('install')}</a>
            <a class="btn btn-ghost" href="${DOWNLOADS.portable}" download>${t('portable')}</a>
          </div>
          <p class="hint">${t('hint')}</p>
        </div>
        <div class="landing-art" aria-hidden="true">
          <div class="art-vinyls">
            <div class="vinyl vinyl-one"></div>
            <div class="vinyl vinyl-two"></div>
          </div>
          <div class="app-window">
            <div class="mock-sidebar">
              <div class="mock-brand"><img class="brand-icon" src="favicon.ico" alt="" /> youtify<span class="brand-dot">.</span></div>
              <div class="mock-nav"><span class="active">⌂ ${t('heroMain')}</span><span>⌕ ${t('heroSearch')}</span><span>✦ ${t('heroMix')}</span><span>♫ ${t('heroPlaylists')}</span></div>
              <div class="mock-side-title">${t('yourPlaylists')}</div>
              <div class="mock-playlist"><i class="liked">♥</i><span>${t('heroLiked')}<small>12</small></span></div>
              <div class="mock-playlist"><i>▣</i><span>${t('heroPlaylist')}<small>8</small></span></div>
            </div>
            <div class="mock-main">
              <div class="mock-topbar"><span class="mock-back">‹ ›</span><span class="mock-search">⌕ ${t('heroSearch')}…</span><span class="mock-avatar">Y</span></div>
              <div class="mock-hero"><div class="mock-eyebrow">SPOTIFY + YOUTUBE MUSIC</div><h3>${t('heroTitle').replace('\n', '<br />')}</h3><span class="mock-cta">${t('heroCta')}</span></div>
              <div class="mock-section"><b>${t('f2')}</b><div class="mock-cards"><i></i><i></i><i></i><i></i></div></div>
            </div>
            <div class="mock-player"><span class="mock-cover"></span><span class="mock-track"><b>Thunderstruck</b><small>AC/DC</small></span><span class="mock-controls">‹ ▶ ›</span><span class="mock-volume">◖)))</span></div>
          </div>
        </div>
      </section>

      <section class="landing-section">
        <div class="section-title"><h2>${t('features')}</h2><span>${t('featuresHint')}</span></div>
        <div class="feature-grid">
          ${[['f1','f1d'],['f2','f2d'],['f3','f3d'],['f4','f4d'],['f5','f5d'],['f6','f6d']].map(([title, text]) => `
            <div class="feature-card">
              <div class="feature-icon">◆</div>
              <h3>${t(title)}</h3>
              <p>${t(text)}</p>
            </div>`).join('')}
        </div>
      </section>

      <section class="landing-section">
        <div class="section-title"><h2>${t('platforms')}</h2><span>${t('platformsHint')}</span></div>
        <div class="platform-grid">
          <div class="platform-card available"><b>${t('win')}</b><span>${t('winState')}</span></div>
          <div class="platform-card soon"><b>${t('linux')}</b><span>${t('linuxState')}</span></div>
        </div>
      </section>
    </main>

    <footer class="landing-footer">Youtify · <span>youtify.</span></footer>
  </div>`;

  const button = document.getElementById('langButton');
  if (button) {
    button.addEventListener('click', () => {
      const index = LANGS.indexOf(lang);
      setLang(LANGS[(index + 1) % LANGS.length]);
    });
  }
}

applyLang();
render();

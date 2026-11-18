# Деплой сайта Youtify

Вариант: **Cloudflare Pages** (сайт) + **GitHub Releases** (EXE). Бесплатно навсегда, работает в Украине и России.

## 1. GitHub Releases

1. Установи GitHub CLI: `winget install --id GitHub.cli`
2. `gh auth login`
3. Создай репозиторий и запушь сайт:
   ```
   cd F:\saytyoutify
   git init
   git add .
   git commit -m "Youtify download site"
   gh repo create <твой-логин>/youtify-site --public --source=. --remote=origin --push
   ```
4. Запусти `.\release.ps1 -Repo "<твой-логин>/youtify-site"`
5. В `downloads-config.js` замени локальные пути на URL из релиза:
   ```
   installer: 'https://github.com/<логин>/youtify-site/releases/download/v0.1.0/Youtify%20Setup%200.1.0.exe',
   portable: 'https://github.com/<логин>/youtify-site/releases/download/v0.1.0/Youtify.exe'
   ```
6. Закоммить изменения: `git add downloads-config.js && git commit -m "Use release links" && git push`

## 2. Cloudflare Pages

1. Зайди на https://dash.cloudflare.com → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Выбери репозиторий `youtify-site`.
3. Build settings: **Framework preset — None**, Build command пустой, Output directory — `.` (корень).
4. Deploy. Сайт получит адрес `https://youtify-site.pages.dev`.
5. При обновлении `downloads-config.js` сайт пересоберётся автоматически.

## Важно

- EXE не коммитятся в git — они лежат в `downloads/` (в `.gitignore`) и загружаются только в GitHub Releases.
- Проверь ссылки скачивания из Украины и России после деплоя.
- Если хочешь свой домен — добавь его в Cloudflare Pages бесплатно.

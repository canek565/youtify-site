# Деплой сайта Youtify на Vercel

Сайт — обычная статика (`index.html`, `app.js`, `*.css`). На Vercel лежит **только сайт**.
EXE-файлы (~103 МБ каждый) остаются на **GitHub Releases** — посетители скачивают приложение оттуда.
Ссылки уже прописаны в `downloads-config.js` и проверены:

- `https://github.com/canek565/youtify-site/releases/download/v0.1.0/Youtify.Setup.0.1.0.exe`
- `https://github.com/canek565/youtify-site/releases/download/v0.1.0/Youtify.exe`

> EXE в релизе `v0.1.0` перезалиты 18.11.2026: это сборка с исправленными переводами
> (EN/UK/RU). Ссылки не менялись — обновились только файлы в релизе.

## 1. Закоммитить и запушить сайт

```powershell
cd F:\saytyoutify
git add .
git commit -m "Fix languages, prepare Vercel deploy"
git push
```

Папка `downloads/` в `.gitignore` — EXE не попадут в репозиторий и не будут загружаться на Vercel
(дополнительно их исключает `.vercelignore`).

## 2. Импорт проекта в Vercel

1. Зайди на https://vercel.com и авторизуйся через GitHub.
2. **Add New… → Project** → выбери репозиторий `canek565/youtify-site` → **Import**.
3. Настройки сборки (Vercel обычно определяет всё сам):
   - **Framework Preset:** Other (или None);
   - **Root Directory:** `./` (корень репозитория);
   - **Build Command:** оставить пустым;
   - **Output Directory:** `.` (корень, там лежит `index.html`);
   - **Install Command:** оставить пустым.
4. **Deploy**. Через минуту сайт будет доступен на `https://<имя-проекта>.vercel.app`.

Файл `vercel.json` уже лежит в корне: он включает `cleanUrls` и отключает кеширование
`downloads-config.js` / `youtify-config.js`, чтобы обновлённые ссылки на скачивание подхватывались сразу.

## 3. Обновление ссылок на новые версии

1. Собери новую версию в `F:\prilojenie` через `npm run dist`, залей EXE в новый GitHub Release
   (скрипт `.\release.ps1 -Repo "canek565/youtify-site" -Tag "v0.2.0"`).
2. Поправь URL в `downloads-config.js`.
3. `git add downloads-config.js && git commit -m "Update download links" && git push` —
   Vercel автоматически пересоберёт сайт.

## Вариант с Vercel CLI (без GitHub-интеграции)

```powershell
npm i -g vercel
cd F:\saytyoutify
vercel          # первый раз — логин и вопросы по проекту
vercel --prod   # продакшен-деплой
```

## Свой домен

В проекте Vercel: **Settings → Domains → Add** — добавь свой домен, Vercel бесплатно выпустит SSL.

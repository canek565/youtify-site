# 1) Установи GitHub CLI: winget install --id GitHub.cli
# 2) gh auth login
# 3) gh repo create <твой-логин>/youtify-site --public --source=. --remote=origin --push
# 4) Запусти этот скрипт: .\release.ps1 -Repo "<твой-логин>/youtify-site"

param(
  [Parameter(Mandatory = $true)][string]$Repo,
  [string]$Tag = 'v0.1.0',
  [string]$ExeDir = 'F:\prilojenie\dist'
)

$ErrorActionPreference = 'Stop'

$installer = Join-Path $ExeDir 'Youtify Setup 0.1.0.exe'
$portable = Join-Path $ExeDir 'Youtify.exe'

if (-not (Test-Path $installer) -or -not (Test-Path $portable)) {
  throw "EXE-файлы не найдены в $ExeDir"
}

gh release create $Tag `
  --repo $Repo `
  --title "Youtify $Tag" `
  --notes "Youtify for Windows — installer and portable build." `
  $installer $portable

"Release created: https://github.com/$Repo/releases/tag/$Tag"
"Update downloads-config.js with these URLs and commit it."

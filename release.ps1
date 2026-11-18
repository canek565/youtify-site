param(
  [Parameter(Mandatory = $true)][string]$Repo,
  [string]$Tag = 'v0.1.1',
  [string]$ExeDir = 'F:\prilojenie\dist'
)

$ErrorActionPreference = 'Stop'

$version = $Tag.TrimStart('v')
$installer = Join-Path $ExeDir "Youtify Setup $version.exe"
$portable = Join-Path $ExeDir 'Youtify.exe'

if (-not (Test-Path $installer) -or -not (Test-Path $portable)) {
  throw "EXE files not found in $ExeDir"
}

# GitHub-ассеты называем точками, чтобы ссылки не содержали %20.
$staging = Join-Path $env:TEMP "youtify-release-$version"
New-Item -ItemType Directory -Force -Path $staging | Out-Null
$installerAsset = Join-Path $staging "Youtify.Setup.$version.exe"
$portableAsset = Join-Path $staging 'Youtify.exe'
Copy-Item -Path $installer -Destination $installerAsset -Force
Copy-Item -Path $portable -Destination $portableAsset -Force

gh release create $Tag `
  --repo $Repo `
  --title "Youtify $Tag" `
  --notes "Youtify for Windows - installer and portable build." `
  $installerAsset $portableAsset

"Release created: https://github.com/$Repo/releases/tag/$Tag"
"Update downloads-config.js and update.json with the new version, then commit and push."

param(
  [Parameter(Mandatory = $true)][string]$Repo,
  [string]$Tag = 'v0.1.0',
  [string]$ExeDir = 'F:\prilojenie\dist'
)

$ErrorActionPreference = 'Stop'

$installer = Join-Path $ExeDir 'Youtify Setup 0.1.0.exe'
$portable = Join-Path $ExeDir 'Youtify.exe'

if (-not (Test-Path $installer) -or -not (Test-Path $portable)) {
  throw "EXE files not found in $ExeDir"
}

gh release create $Tag `
  --repo $Repo `
  --title "Youtify $Tag" `
  --notes "Youtify for Windows - installer and portable build." `
  $installer $portable

"Release created: https://github.com/$Repo/releases/tag/$Tag"
"Update downloads-config.js with the asset URLs and commit it."

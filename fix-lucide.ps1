$files = @(
  'src\app\components\contact\contact.component.ts',
  'src\app\components\experience\experience.component.ts',
  'src\app\components\footer\footer.component.ts',
  'src\app\components\hero\hero.component.ts',
  'src\app\components\lightbox\lightbox.component.ts',
  'src\app\components\navbar\navbar.component.ts',
  'src\app\components\projects\projects.component.ts',
  'src\app\components\skills-console\skills-console.component.ts'
)
foreach ($f in $files) {
  $content = Get-Content $f -Raw
  $content = $content -replace "import \{ LucideAngularComponent \} from 'lucide-angular';", "import { LucideAngularModule } from 'lucide-angular';"
  $content = $content -replace 'LucideAngularComponent,', 'LucideAngularModule,'
  $content = $content -replace ', LucideAngularComponent', ', LucideAngularModule'
  Set-Content $f $content -Encoding UTF8
  Write-Host "Fixed: $f"
}
Write-Host "Done."

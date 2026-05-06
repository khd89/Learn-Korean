Add-Type -AssemblyName System.Drawing

$appPath  = Split-Path -Parent $MyInvocation.MyCommand.Path
$batFile  = Join-Path $appPath "launch.bat"
$iconFile = Join-Path $appPath "launch.ico"
$flagPng  = Join-Path $appPath "flag.png"

# ── If flag.png exists, use it directly ──────────────────────────────────────
if (Test-Path $flagPng) {
    Write-Host "Using flag.png for icon..." -ForegroundColor Cyan
    $img = [System.Drawing.Image]::FromFile($flagPng)
    $bmp = New-Object System.Drawing.Bitmap($img, 256, 256)
    $img.Dispose()

    $pngMs = New-Object System.IO.MemoryStream
    $bmp.Save($pngMs, [System.Drawing.Imaging.ImageFormat]::Png)
    $pngData = $pngMs.ToArray()
    $bmp.Dispose()

    $icoMs = New-Object System.IO.MemoryStream
    $w = New-Object System.IO.BinaryWriter($icoMs)
    $w.Write([uint16]0); $w.Write([uint16]1); $w.Write([uint16]1)
    $w.Write([byte]0); $w.Write([byte]0)
    $w.Write([byte]0); $w.Write([byte]0)
    $w.Write([uint16]0); $w.Write([uint16]32)
    $w.Write([uint32]$pngData.Length); $w.Write([uint32]22)
    $w.Write($pngData, 0, $pngData.Length)
    $w.Flush()
    [IO.File]::WriteAllBytes($iconFile, $icoMs.ToArray())
    Write-Host "Icon created from flag.png: $iconFile" -ForegroundColor Green
}
else {
# ── Fallback: draw Korean flag at 256x256 ────────────────────────────────────
Write-Host "flag.png not found — drawing flag..." -ForegroundColor Yellow
$sz = 256
$bmp = New-Object System.Drawing.Bitmap($sz, $sz)
$g   = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode       = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.InterpolationMode   = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.TextRenderingHint   = [System.Drawing.Text.TextRenderingHint]::AntiAlias

$g.Clear([System.Drawing.Color]::White)

$cx = 128; $cy = 128; $r = 72

$red  = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(205, 46, 58))
$blue = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(0, 71, 160))
$blk  = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::Black)
$pen  = New-Object System.Drawing.Pen([System.Drawing.Color]::Black, 7)

# ── Taeguk (yin-yang style) ──────────────────────────────────────────────────
# Full red circle
$g.FillEllipse($red, $cx - $r, $cy - $r, $r * 2, $r * 2)

# Blue lower half
$path2 = New-Object System.Drawing.Drawing2D.GraphicsPath
$path2.AddPie($cx - $r, $cy - $r, $r * 2, $r * 2, 0, 180)
$g.FillPath($blue, $path2)

# Half-radius inner circles
$hr = $r / 2
# Blue small circle in upper half
$g.FillEllipse($blue, $cx - $hr, $cy - $r, $hr * 2, $hr * 2)
# Red small circle in lower half
$g.FillEllipse($red, $cx - $hr, $cy, $hr * 2, $hr * 2)

# ── Trigrams ─────────────────────────────────────────────────────────────────
# Each trigram = 3 horizontal bars, 36px wide, 7px thick, 5px gap
# Placed in each corner at 45° angle — drawn straight then rotated

function Draw-Trigram($g, $x, $y, $pattern, $pen) {
    # pattern = array of 3: $true = solid bar, $false = broken bar (two halves)
    for ($i = 0; $i -lt 3; $i++) {
        $barY = $y + $i * 14
        if ($pattern[$i]) {
            $g.DrawLine($pen, $x, $barY, $x + 36, $barY)
        } else {
            $g.DrawLine($pen, $x,      $barY, $x + 14, $barY)
            $g.DrawLine($pen, $x + 22, $barY, $x + 36, $barY)
        }
    }
}

# Rotate the graphics context for each corner
$corners = @(
    @{ angle = -45; tx = 50;  ty = 50  ; pattern = @($true, $true, $true)   },  # ☰ top-left
    @{ angle =  45; tx = 206; ty = 50  ; pattern = @($true, $false, $false)  },  # ☵ top-right
    @{ angle =  45; tx = 50;  ty = 206 ; pattern = @($false, $false, $true)  },  # ☶ bottom-left
    @{ angle = -45; tx = 206; ty = 206 ; pattern = @($false, $true, $false)  }   # ☷ bottom-right
)

foreach ($c in $corners) {
    $state = $g.Save()
    $g.TranslateTransform($c.tx, $c.ty)
    $g.RotateTransform($c.angle)
    Draw-Trigram $g -18 -21 $c.pattern $pen
    $g.Restore($state)
}

$g.Dispose()

# ── Save as ICO (PNG-in-ICO, works on Windows Vista+) ────────────────────────
$pngMs = New-Object System.IO.MemoryStream
$bmp.Save($pngMs, [System.Drawing.Imaging.ImageFormat]::Png)
$pngData = $pngMs.ToArray()
$bmp.Dispose()

$icoMs = New-Object System.IO.MemoryStream
$w = New-Object System.IO.BinaryWriter($icoMs)
$w.Write([uint16]0)                    # ICONDIR: reserved
$w.Write([uint16]1)                    # type = icon
$w.Write([uint16]1)                    # image count = 1
$w.Write([byte]0)                      # width  (0 = 256)
$w.Write([byte]0)                      # height (0 = 256)
$w.Write([byte]0)                      # color count
$w.Write([byte]0)                      # reserved
$w.Write([uint16]0)                    # planes
$w.Write([uint16]32)                   # bit depth
$w.Write([uint32]$pngData.Length)      # image data size
$w.Write([uint32]22)                   # image data offset (6 + 16)
$w.Write($pngData, 0, $pngData.Length)
$w.Flush()
[IO.File]::WriteAllBytes($iconFile, $icoMs.ToArray())

    Write-Host "Icon created: $iconFile" -ForegroundColor Green
} # end else (drawn fallback)

# ── Create desktop shortcut ───────────────────────────────────────────────────
$desktop  = [Environment]::GetFolderPath("Desktop")
$lnkPath  = Join-Path $desktop "Learn Korean 한국어.lnk"

$shell    = New-Object -ComObject WScript.Shell
$shortcut = $shell.CreateShortcut($lnkPath)
$shortcut.TargetPath       = $batFile
$shortcut.WorkingDirectory = $appPath
$shortcut.IconLocation     = "$iconFile,0"
$shortcut.Description      = "Launch Learn Korean App"
$shortcut.Save()

Write-Host "Shortcut created on Desktop: 'Learn Korean 한국어'" -ForegroundColor Cyan
Write-Host "Double-click it any time to launch the app!" -ForegroundColor Yellow

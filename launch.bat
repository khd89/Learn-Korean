@echo off
title Learn Korean
echo Starting Learn Korean app...

:: Start local server in background
start /b powershell -WindowStyle Hidden -Command ^
  "$l=[System.Net.HttpListener]::new();$l.Prefixes.Add('http://localhost:8080/');$l.Start();while($l.IsListening){$c=$l.GetContext();$p=$c.Request.Url.LocalPath.TrimStart('/');if($p -eq ''){$p='index.html'};$f=Join-Path '%~dp0' $p;if(Test-Path $f){$b=[System.IO.File]::ReadAllBytes($f);$m=if($f-match'\.js$'){'application/javascript'}elseif($f-match'\.css$'){'text/css'}else{'text/html'};$c.Response.ContentType=$m;$c.Response.ContentLength64=$b.Length;$c.Response.OutputStream.Write($b,0,$b.Length)}else{$c.Response.StatusCode=404};$c.Response.Close()}"

:: Wait a moment then open Chrome
timeout /t 1 /nobreak >nul
start chrome http://localhost:8080

echo App is running at http://localhost:8080
echo Close this window to stop the server.
pause

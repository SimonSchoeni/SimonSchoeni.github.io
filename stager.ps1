Invoke-WebRequest "https://simonschoeni.github.io/putty.zip" -OutFile "download.zip"; 
Expand-Archive "download.zip"
Set-Location "download"
Invoke-Item "Example.pdf"
.\putty.exe

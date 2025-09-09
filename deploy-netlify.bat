@echo off
echo.
echo ========================================
echo    Deploying to Netlify
echo ========================================
echo.

echo 📦 Building project for production...
call npm run build:static

if %ERRORLEVEL% NEQ 0 (
    echo ❌ Build failed! Please check the errors above.
    pause
    exit /b 1
)

echo.
echo ✅ Build successful! Static files created in 'out' directory.
echo.

echo 🌐 Deploying to Netlify...
echo.
echo Choose deployment method:
echo 1. Netlify CLI (if installed)
echo 2. Manual upload to Netlify dashboard
echo 3. Exit
echo.
set /p choice="Enter your choice (1-3): "

if "%choice%"=="1" (
    echo.
    echo 🚀 Deploying with Netlify CLI...
    netlify deploy --prod --dir=out
) else if "%choice%"=="2" (
    echo.
    echo 📁 Manual deployment instructions:
    echo 1. Go to https://netlify.com
    echo 2. Click "New site from Git" or "Deploy manually"
    echo 3. Upload the contents of the 'out' directory
    echo 4. Set your site name and deploy
    echo.
    echo 📂 Your static files are ready in the 'out' directory
) else (
    echo.
    echo 👋 Deployment cancelled.
)

echo.
echo Press any key to exit...
pause >nul


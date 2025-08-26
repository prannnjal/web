@echo off
echo.
echo ========================================
echo    Starting Development Environment
echo    with Jarvis AI Integration
echo ========================================
echo.
echo This will start both:
echo 1. Jarvis AI Server (Python)
echo 2. React Development Server (Next.js)
echo.
echo Press any key to continue...
pause >nul

echo.
echo 🚀 Starting Jarvis AI Server...
echo.

REM Start Jarvis server in background
cd Jarvis
start /B python start_server.py
cd ..

echo.
echo ⏳ Waiting for Jarvis server to start...
timeout /t 3 /nobreak >nul

echo.
echo 🌐 Starting React Development Server...
echo.

REM Start React dev server
npm run dev

echo.
echo Press any key to exit...
pause >nul

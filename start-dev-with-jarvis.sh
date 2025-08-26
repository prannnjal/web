#!/bin/bash

echo ""
echo "========================================"
echo "    Starting Development Environment"
echo "    with Jarvis AI Integration"
echo "========================================"
echo ""
echo "This will start both:"
echo "1. Jarvis AI Server (Python)"
echo "2. React Development Server (Next.js)"
echo ""

# Check if Python is available
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 not found. Please install Python 3.8 or higher."
    exit 1
fi

# Check Python version
python_version=$(python3 -c 'import sys; print(".".join(map(str, sys.version_info[:2])))')
required_version="3.8"

if [ "$(printf '%s\n' "$required_version" "$python_version" | sort -V | head -n1)" != "$required_version" ]; then
    echo "❌ Python $python_version found. Python 3.8 or higher is required."
    exit 1
fi

echo "✅ Python $python_version detected"
echo ""

echo "🚀 Starting Jarvis AI Server..."
echo ""

# Start Jarvis server in background
cd Jarvis
python3 start_server.py &
JARVIS_PID=$!
cd ..

echo "⏳ Waiting for Jarvis server to start..."
sleep 3

echo ""
echo "🌐 Starting React Development Server..."
echo ""

# Start React dev server
npm run dev

# Cleanup: kill Jarvis server when React server stops
echo ""
echo "🧹 Cleaning up Jarvis server..."
kill $JARVIS_PID 2>/dev/null
echo "✅ Development environment stopped"

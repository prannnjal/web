#!/bin/bash

echo
echo "========================================"
echo "    Deploying to Netlify"
echo "========================================"
echo

echo "📦 Building project for production..."
npm run build:static

if [ $? -ne 0 ]; then
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi

echo
echo "✅ Build successful! Static files created in 'out' directory."
echo

echo "🌐 Deploying to Netlify..."
echo
echo "Choose deployment method:"
echo "1. Netlify CLI (if installed)"
echo "2. Manual upload to Netlify dashboard"
echo "3. Exit"
echo
read -p "Enter your choice (1-3): " choice

case $choice in
    1)
        echo
        echo "🚀 Deploying with Netlify CLI..."
        netlify deploy --prod --dir=out
        ;;
    2)
        echo
        echo "📁 Manual deployment instructions:"
        echo "1. Go to https://netlify.com"
        echo "2. Click 'New site from Git' or 'Deploy manually'"
        echo "3. Upload the contents of the 'out' directory"
        echo "4. Set your site name and deploy"
        echo
        echo "📂 Your static files are ready in the 'out' directory"
        ;;
    3)
        echo
        echo "👋 Deployment cancelled."
        ;;
    *)
        echo "❌ Invalid choice. Exiting."
        exit 1
        ;;
esac

echo
echo "Press Enter to exit..."
read

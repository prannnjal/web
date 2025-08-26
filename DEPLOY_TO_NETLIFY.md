# 🚀 Deploy to Netlify - Quick Guide

## ⚠️ Important: Two-Part Deployment

Since Netlify only hosts static files, you need to deploy:
1. **Frontend** → Netlify (React app)
2. **Backend** → Separate hosting (Jarvis API)

## 📋 Step 1: Prepare Your Project

### Build for Static Export
```bash
npm run build:static
```

This creates an `out/` directory with static files.

## 🌐 Step 2: Deploy to Netlify

### Option A: Netlify CLI
```bash
# Install CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod --dir=out
```

### Option B: Netlify Dashboard
1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Connect your repository
4. Set build settings:
   - **Build command**: `npm run build:static`
   - **Publish directory**: `out`

## 🔧 Step 3: Host Jarvis API

### Option A: Vercel (Recommended)
```bash
cd Jarvis
vercel --prod
```

### Option B: Railway
1. Go to [railway.app](https://railway.app)
2. Deploy from GitHub
3. Select `Jarvis/` directory

## 🔗 Step 4: Connect Frontend to Backend

### Set Environment Variables in Netlify
Go to Site settings → Environment variables:
```env
JARVIS_ENDPOINT=https://your-jarvis-api-url.com
JARVIS_AUTO_START=false
NODE_ENV=production
```

## 🚨 Common Issues

### CORS Errors
Update your Jarvis API to allow Netlify domain:
```python
CORS(app, origins=["https://your-site.netlify.app"])
```

### Environment Variables Not Working
1. Check variable names match exactly
2. Rebuild and redeploy after changes
3. Verify in Netlify dashboard

## ✅ Deployment Checklist

- [ ] Build succeeds with `npm run build:static`
- [ ] Frontend deployed to Netlify
- [ ] Backend deployed and running
- [ ] Environment variables set
- [ ] CORS configured
- [ ] Integration tested

## 🎯 Quick Commands

```bash
# Complete deployment
npm run build:static
netlify deploy --prod --dir=out

# Deploy Jarvis API
cd Jarvis
vercel --prod
```

## 🔗 Your URLs

- **Frontend**: `https://your-site.netlify.app`
- **Backend**: `https://your-api-url.com`

**Happy deploying! 🚀**

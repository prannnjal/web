# 🚀 **Netlify Deployment Guide - Jarvis Chatbot**

This guide will help you deploy your Jarvis-integrated chatbot to Netlify. Since Netlify is a static hosting platform, we'll need to handle the Jarvis API server separately.

## ⚠️ **Important: Architecture Overview**

### **Two-Part Deployment**
1. **Frontend (React/Next.js)** → **Netlify** (Static hosting)
2. **Backend (Jarvis API)** → **Separate hosting** (Vercel, Railway, Render, etc.)

### **Why This Architecture?**
- **Netlify**: Only hosts static files (HTML, CSS, JS)
- **Jarvis API**: Requires Python runtime and server capabilities
- **Connection**: Frontend connects to backend via HTTP API calls

## 📋 **Step 1: Prepare Your Project**

### **1.1 Build for Static Export**
```bash
npm run build:static
```

This creates a `out/` directory with static files.

### **1.2 Verify Static Export**
Check that these files exist:
- `out/index.html`
- `out/_next/` directory
- `out/static/` directory

## 🌐 **Step 2: Deploy Frontend to Netlify**

### **Option A: Netlify CLI (Recommended)**

#### **Install Netlify CLI**
```bash
npm install -g netlify-cli
```

#### **Login to Netlify**
```bash
netlify login
```

#### **Initialize and Deploy**
```bash
# Navigate to your project
cd your-project-directory

# Initialize Netlify
netlify init

# Deploy
netlify deploy --prod --dir=out
```

### **Option B: Netlify Dashboard (Web Interface)**

#### **1. Go to [netlify.com](https://netlify.com)**
- Sign up/Login
- Click "New site from Git"

#### **2. Connect Your Repository**
- Choose your Git provider (GitHub, GitLab, Bitbucket)
- Select your repository
- Set build settings:
  - **Build command**: `npm run build:static`
  - **Publish directory**: `out`
  - **Node version**: `18`

#### **3. Configure Environment Variables**
Add these in Netlify dashboard → Site settings → Environment variables:
```env
JARVIS_ENDPOINT=https://your-jarvis-api-url.com
JARVIS_AUTO_START=false
NODE_ENV=production
```

## 🔧 **Step 3: Host Jarvis API Server**

### **Option A: Vercel (Recommended for Python)**

#### **1. Install Vercel CLI**
```bash
npm install -g vercel
```

#### **2. Deploy Jarvis API**
```bash
cd Jarvis
vercel --prod
```

#### **3. Update Frontend Environment**
Set `JARVIS_ENDPOINT` in Netlify to your Vercel URL.

### **Option B: Railway**

#### **1. Go to [railway.app](https://railway.app)**
- Sign up/Login
- Create new project

#### **2. Deploy from GitHub**
- Connect your repository
- Select the `Jarvis/` directory
- Set Python version: `3.11`

#### **3. Configure Environment Variables**
Add in Railway dashboard:
```env
OPENAI_API_KEY=your_openai_api_key
FLASK_ENV=production
```

### **Option C: Render**

#### **1. Go to [render.com](https://render.com)**
- Sign up/Login
- Create new Web Service

#### **2. Deploy from GitHub**
- Connect your repository
- Set build command: `pip install -r requirements.txt`
- Set start command: `python api_server.py`

## 🔗 **Step 4: Connect Frontend to Backend**

### **Update Environment Variables**

In Netlify dashboard, set:
```env
JARVIS_ENDPOINT=https://your-jarvis-api-url.com
JARVIS_AUTO_START=false
NODE_ENV=production
```

### **Test Connection**

1. **Deploy frontend** to Netlify
2. **Deploy backend** to your chosen platform
3. **Test the connection** by opening your Netlify URL
4. **Check browser console** for any CORS or connection errors

## 🚨 **Common Issues & Solutions**

### **Issue 1: CORS Errors**
**Solution**: Ensure your backend allows requests from your Netlify domain.

**For Flask (Jarvis API)**:
```python
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins=["https://your-netlify-site.netlify.app"])
```

### **Issue 2: Environment Variables Not Working**
**Solution**: 
1. Check Netlify environment variables are set correctly
2. Rebuild and redeploy after changing environment variables
3. Verify variable names match exactly

### **Issue 3: API Calls Failing**
**Solution**:
1. Verify backend URL is correct
2. Check backend is running and accessible
3. Test API endpoints directly (e.g., `curl https://your-api.com/health`)

### **Issue 4: Build Failures**
**Solution**:
1. Check Node.js version compatibility
2. Verify all dependencies are in `package.json`
3. Check for any server-side code that won't work in static export

## 📱 **Step 5: Custom Domain (Optional)**

### **Add Custom Domain in Netlify**
1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow DNS configuration instructions
4. Update your Jarvis API CORS settings if needed

## 🔒 **Security Considerations**

### **Environment Variables**
- **Never commit** API keys to Git
- Use Netlify's environment variable system
- Keep sensitive data in backend environment variables

### **CORS Configuration**
- Only allow your Netlify domain
- Consider using environment-specific CORS settings

### **API Security**
- Implement rate limiting on your Jarvis API
- Use HTTPS for all API calls
- Consider adding authentication if needed

## 📊 **Monitoring & Maintenance**

### **Netlify Analytics**
- Monitor site performance
- Check build success rates
- Track user engagement

### **Backend Monitoring**
- Monitor API response times
- Check error rates
- Set up alerts for downtime

### **Regular Updates**
- Keep dependencies updated
- Monitor for security vulnerabilities
- Test functionality regularly

## 🎯 **Deployment Checklist**

### **Frontend (Netlify)**
- [ ] Build succeeds with `npm run build:static`
- [ ] `out/` directory contains all files
- [ ] Environment variables set in Netlify
- [ ] Site deploys successfully
- [ ] Custom domain configured (if desired)

### **Backend (Jarvis API)**
- [ ] API server deployed and running
- [ ] Environment variables configured
- [ ] CORS settings allow Netlify domain
- [ ] Health endpoint accessible
- [ ] API responds to requests

### **Integration Testing**
- [ ] Frontend loads without errors
- [ ] Chatbot opens and functions
- [ ] Voice features work (if supported)
- [ ] Jarvis mode connects to API
- [ ] All features work as expected

## 🚀 **Quick Deploy Commands**

### **Complete Deployment Workflow**
```bash
# 1. Build for production
npm run build:static

# 2. Deploy to Netlify
netlify deploy --prod --dir=out

# 3. Deploy Jarvis API (if using Vercel)
cd Jarvis
vercel --prod
```

### **Update Environment Variables**
```bash
# Set Netlify environment variables
netlify env:set JARVIS_ENDPOINT "https://your-api-url.com"
netlify env:set NODE_ENV "production"
```

## 📚 **Additional Resources**

### **Netlify Documentation**
- [Netlify Build Settings](https://docs.netlify.com/configure-builds/overview/)
- [Environment Variables](https://docs.netlify.com/environment-variables/get-started/)
- [Custom Domains](https://docs.netlify.com/domains-https/custom-domains/)

### **Backend Hosting Options**
- [Vercel Python Support](https://vercel.com/docs/functions/serverless-functions/runtimes/python)
- [Railway Documentation](https://docs.railway.app/)
- [Render Documentation](https://render.com/docs)

### **Troubleshooting**
- [Netlify Support](https://docs.netlify.com/support/)
- [Common Build Issues](https://docs.netlify.com/configure-builds/troubleshooting/)

---

## 🎉 **Deployment Complete!**

Once deployed, your Jarvis chatbot will be available at:
- **Frontend**: `https://your-site.netlify.app`
- **Backend**: `https://your-api-url.com`

### **Next Steps**
1. **Test all functionality** on the live site
2. **Monitor performance** and error rates
3. **Set up monitoring** and alerts
4. **Plan for updates** and maintenance

**Happy deploying! 🚀 Your Jarvis chatbot will soon be live on the web!**

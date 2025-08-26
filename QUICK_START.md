# 🚀 Quick Start Guide - Jarvis Integration

Get Jarvis running in your chatbot in 5 minutes!

## ⚡ Quick Setup

### 1. Install Python Dependencies
```bash
cd Jarvis
pip install -r requirements.txt
```

### 2. Create Environment File
Create `Jarvis/.env`:
```env
OPENAI_API_KEY=your_openai_api_key_here
```

### 3. Start Jarvis Server
**Windows:**
```bash
cd Jarvis
start_jarvis.bat
```

**Linux/macOS:**
```bash
cd Jarvis
./start_jarvis.sh
```

**Manual:**
```bash
cd Jarvis
python start_server.py
```

### 4. Start Your React App
```bash
npm run dev
# or
pnpm dev
```

### 5. Test Integration
1. Open chatbot in browser
2. Click the **purple Zap button** to enable Jarvis mode
3. Start chatting with Jarvis!

## 🔧 Troubleshooting

### Server Won't Start?
- Check Python version: `python --version` (need 3.8+)
- Install Flask: `pip install flask flask-cors`
- Check port 5000 is free

### Connection Issues?
- Ensure Jarvis server is running
- Check browser console for errors
- Verify `http://localhost:5000` is accessible

### Slow Responses?
- First request loads AI models (may be slow)
- Check OpenAI API key is valid
- Monitor system resources

## 📱 What Can Jarvis Do?

- **🤖 Smart Conversations**: Advanced AI responses
- **🔍 Web Search**: Google and YouTube integration  
- **💻 System Info**: CPU, memory, battery status
- **📁 File Operations**: Create/delete files and folders
- **🎵 Media Control**: YouTube video management
- **💻 Programming**: Code generation and help

## 🎯 Example Commands

- "How are you?"
- "Search for machine learning tutorials"
- "Play music on YouTube"
- "What's my system info?"
- "Create a folder called projects"

## 📚 Full Documentation

See `JARVIS_INTEGRATION_README.md` for complete setup and usage instructions.

---

**Need help?** Check the troubleshooting section or run `python test_integration.py` to test your setup!

# 🚀 Auto-Start Jarvis with Development Server

This guide shows you how to automatically start Jarvis whenever you run `npm run dev` or start your development server.

## ✨ Quick Start Options

### Option 1: Use npm scripts (Recommended)

**Install concurrently package:**
```bash
npm install --save-dev concurrently
```

**Start both servers:**
```bash
npm run dev:jarvis
```

**Start with background Jarvis:**
```bash
npm run dev:jarvis:bg
```

### Option 2: Use startup scripts

**Windows:**
```bash
start-dev-with-jarvis.bat
```

**Linux/macOS:**
```bash
chmod +x start-dev-with-jarvis.sh
./start-dev-with-jarvis.sh
```

### Option 3: Manual but automatic

**Install dependencies once:**
```bash
npm run jarvis:install
```

**Start both manually in separate terminals:**
```bash
# Terminal 1: Start Jarvis
npm run jarvis:start

# Terminal 2: Start React dev server
npm run dev
```

## 🔧 Available npm Scripts

After installation, you'll have these new commands:

| Command | Description |
|---------|-------------|
| `npm run dev:jarvis` | Start both Jarvis and React dev server |
| `npm run dev:jarvis:bg` | Start Jarvis in background + React dev server |
| `npm run jarvis:start` | Start only Jarvis server |
| `npm run jarvis:start:win` | Start Jarvis using Windows batch file |
| `npm run jarvis:start:unix` | Start Jarvis using Unix shell script |
| `npm run jarvis:install` | Install Jarvis Python dependencies |
| `npm run jarvis:test` | Test Jarvis API integration |

## 🎯 How It Works

### Option 1: Concurrently (Recommended)
- Uses `concurrently` package to run multiple commands
- Starts Jarvis server and React dev server simultaneously
- Both servers run in the same terminal
- Easy to stop both with `Ctrl+C`

### Option 2: Background Processes
- Starts Jarvis server in background
- Waits for Jarvis to initialize
- Starts React dev server
- Automatically cleans up when stopped

### Option 3: Manual Control
- Start Jarvis in one terminal
- Start React dev server in another
- Full control over each process
- Can restart one without affecting the other

## 🚨 Troubleshooting

### "concurrently not found" error
```bash
npm install --save-dev concurrently
```

### Jarvis server won't start
```bash
# Check Python installation
python --version

# Install dependencies
npm run jarvis:install

# Test Jarvis
npm run jarvis:test
```

### Port conflicts
```bash
# Check if port 5000 is in use
netstat -an | findstr :5000  # Windows
lsof -i :5000                 # Linux/macOS

# Kill process using port 5000
# Windows: Find PID and use "taskkill /PID <PID>"
# Linux/macOS: Find PID and use "kill <PID>"
```

### Permission errors (Linux/macOS)
```bash
chmod +x start-dev-with-jarvis.sh
chmod +x Jarvis/start_jarvis.sh
```

## 🔄 Environment Variables

Create a `.env.local` file in your project root:

```env
# Jarvis Configuration
JARVIS_ENDPOINT=http://localhost:5000
JARVIS_AUTO_START=true

# OpenAI API Key (for Jarvis)
OPENAI_API_KEY=your_api_key_here
```

## 📱 Usage Examples

### Development Workflow

1. **Start development environment:**
   ```bash
   npm run dev:jarvis
   ```

2. **Open browser and test:**
   - React app: `http://localhost:3000`
   - Jarvis API: `http://localhost:5000/health`

3. **Use chatbot with Jarvis:**
   - Click the purple Zap button
   - Start chatting with advanced AI

4. **Stop everything:**
   - Press `Ctrl+C` in terminal

### Production-like Testing

```bash
# Build and start production server with Jarvis
npm run build
npm run start:jarvis
```

## 🎨 Customization

### Modify startup behavior

Edit `package.json` scripts:

```json
{
  "scripts": {
    "dev:jarvis:custom": "concurrently \"npm run jarvis:start\" \"wait-on http://localhost:5000 && npm run dev\"",
    "dev:jarvis:delay": "concurrently \"npm run jarvis:start\" \"sleep 5 && npm run dev\""
  }
}
```

### Add health checks

```json
{
  "scripts": {
    "dev:jarvis:health": "concurrently \"npm run jarvis:start\" \"wait-on http://localhost:5000/health && npm run dev\""
  }
}
```

### Install wait-on for better control

```bash
npm install --save-dev wait-on
```

## 🔒 Security Notes

- **Local development only**: These scripts are for development use
- **Port 5000**: Ensure this port is not exposed externally
- **Python dependencies**: Keep your Python environment secure
- **API keys**: Never commit `.env` files to version control

## 📊 Monitoring

### Check server status

```bash
# Jarvis health
curl http://localhost:5000/health

# React dev server
curl http://localhost:3000
```

### View logs

- **Jarvis logs**: Check the terminal running Jarvis
- **React logs**: Check the terminal running React dev server
- **Browser console**: Check for frontend errors

## 🚀 Advanced Features

### Auto-restart on file changes

```json
{
  "scripts": {
    "dev:jarvis:watch": "concurrently \"npm run jarvis:start\" \"nodemon --exec 'npm run dev'\""
  }
}
```

### Multiple Jarvis instances

```json
{
  "scripts": {
    "dev:jarvis:multi": "concurrently \"npm run jarvis:start\" \"npm run jarvis:start -- --port 5001\" \"npm run dev\""
  }
}
```

### Custom Jarvis configuration

```json
{
  "scripts": {
    "dev:jarvis:config": "concurrently \"JARVIS_CONFIG=custom.json npm run jarvis:start\" \"npm run dev\""
  }
}
```

---

## 🎉 Quick Commands Summary

**Start everything with one command:**
```bash
npm run dev:jarvis
```

**Install dependencies:**
```bash
npm run jarvis:install
```

**Test integration:**
```bash
npm run jarvis:test
```

**Start manually:**
```bash
# Terminal 1
npm run jarvis:start

# Terminal 2  
npm run dev
```

Now you can start your entire development environment with Jarvis integration using just one command! 🚀

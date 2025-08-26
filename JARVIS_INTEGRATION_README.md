# 🤖 Jarvis Integration with Chatbot

This project now includes integration with **Jarvis**, an advanced AI assistant that provides enhanced conversational capabilities, system control, and web automation features.

## ✨ Features

### 🔄 Dual Mode Operation
- **Built-in Mode**: Basic AI responses for general questions
- **Jarvis Mode**: Advanced AI with system control, web automation, and enhanced conversation

### 🚀 Jarvis Capabilities
- **Advanced AI Conversations**: Powered by OpenAI GPT models
- **Voice Commands**: Natural speech input and text-to-speech output
- **System Information**: CPU, memory, battery, disk usage
- **Web Automation**: Google search, YouTube control, web browsing
- **File Operations**: Create/delete files and folders
- **System Control**: Volume, brightness, screenshots, applications
- **Programming Help**: Code generation and file creation
- **Multi-language Support**: English and Hindi commands
- **Learning System**: Self-improving responses based on user feedback

## 🛠️ Setup Instructions

### Prerequisites
- Python 3.8 or higher
- Node.js 16+ and npm/pnpm
- Windows/Linux/macOS

### Step 1: Install Python Dependencies

```bash
cd Jarvis
pip install -r requirements.txt
```

**Note**: Some packages like `torch` and `transformers` are large and may take time to download.

### Step 2: Configure Environment Variables

Create a `.env` file in the `Jarvis` directory:

```env
OPENAI_API_KEY=your_openai_api_key_here
NEWS_API_KEY=your_news_api_key_here
```

### Step 3: Start the Jarvis Server

```bash
cd Jarvis
python start_server.py
```

The server will start at `http://localhost:5000`

### Step 4: Start the React Development Server

In a new terminal:

```bash
npm run dev
# or
pnpm dev
```

## 🎯 Usage

### Toggle Between Modes

1. **Open the chatbot** by clicking the chat icon
2. **Click the purple Zap button** to switch to Jarvis mode
3. **Click the blue button** to return to built-in mode

### Jarvis Mode Indicators

- **💜 Purple Zap**: Jarvis mode is active
- **🟢 Green dot**: Connected to Jarvis server
- **🟡 Yellow dot**: Limited functionality
- **🔴 Red dot**: Disconnected from server

### Example Commands

#### 🤖 Conversational
- "How are you?"
- "Tell me a joke"
- "What can you do?"

#### 🔍 Web Search
- "Search for artificial intelligence"
- "Find information about machine learning"
- "Search YouTube for coding tutorials"

#### 💻 System Information
- "What's my system info?"
- "Check CPU usage"
- "Show battery status"

#### 📁 File Operations
- "Create a folder called projects"
- "List files in current directory"
- "Delete the temp file"

#### 🎵 Media Control
- "Play music on YouTube"
- "Search for coding videos"
- "Open YouTube"

#### 🎤 Voice Commands
- "Hello Jarvis, how are you?"
- "Tell me a joke"
- "Search for machine learning tutorials"
- "What's the weather like?"

## 🔧 Configuration

### Change Server Endpoint

1. Click the **Settings gear icon** in the chatbot
2. Enter the new Jarvis server URL
3. The chatbot will automatically test the connection

### Default Endpoints
- **Local**: `http://localhost:5000`
- **Custom**: `http://your-server:5000`

## 🚨 Troubleshooting

### Jarvis Server Won't Start

```bash
# Check Python version
python --version

# Install dependencies manually
pip install flask flask-cors python-dotenv openai

# Check for missing modules
python -c "import flask; print('Flask OK')"
```

### Connection Issues

1. **Check if server is running**:
   ```bash
   curl http://localhost:5000/health
   ```

2. **Verify firewall settings**:
   - Windows: Allow Python through Windows Defender
   - Linux: Check if port 5000 is open
   - macOS: Check Security & Privacy settings

3. **Check CORS settings**:
   - Ensure the Flask server is running
   - Check browser console for CORS errors

### Performance Issues

- **Large models**: Some Jarvis features use large AI models
- **Memory usage**: Monitor system resources
- **Network**: Ensure stable internet for OpenAI API calls

## 🔒 Security Notes

- **Local server only**: Jarvis runs on your local machine
- **No external access**: Server is bound to localhost by default
- **API keys**: Keep your OpenAI API key secure
- **System access**: Jarvis can control your computer when running locally

## 📱 Browser Compatibility

- **Chrome**: Full support
- **Firefox**: Full support
- **Safari**: Full support
- **Edge**: Full support

## 🎨 Customization

### Modify Jarvis Responses

Edit `Jarvis/api_server.py` to customize:
- Response formatting
- Command processing
- Error handling

### Add New Commands

1. Add function to `Jarvis/main.py`
2. Import in `Jarvis/api_server.py`
3. Add route in Flask app
4. Update chatbot to handle new commands

## 📊 Monitoring

### Server Status
- Health check: `GET /health`
- Chat endpoint: `POST /chat`
- Help: `GET /web/help`

### Logs
- Check terminal running Jarvis server
- Browser console for frontend errors
- Network tab for API calls

## 🆘 Support

### Common Issues

1. **"Jarvis server not available"**
   - Ensure Python server is running
   - Check port 5000 is not blocked

2. **"Failed to get response from Jarvis"**
   - Check OpenAI API key
   - Verify internet connection
   - Check server logs

3. **Slow responses**
   - First request may be slow (model loading)
   - Check system resources
   - Verify API response times

### Getting Help

1. Check server logs in terminal
2. Verify environment variables
3. Test individual endpoints
4. Check browser console for errors

## 🚀 Advanced Features

### Custom Jarvis Extensions

```python
# Add to api_server.py
@app.route('/custom/command', methods=['POST'])
def custom_command():
    # Your custom logic here
    return jsonify({"response": "Custom response"})
```

### Integration with Other Services

- **Discord Bot**: Use Jarvis API for Discord integration
- **Slack Bot**: Connect Jarvis to Slack
- **Telegram Bot**: Create Telegram bot with Jarvis backend

## 📈 Performance Tips

1. **Keep server running**: Avoid restarting for each session
2. **Monitor memory**: Large AI models use significant RAM
3. **Cache responses**: Implement response caching for common queries
4. **Optimize imports**: Only import necessary modules

## 🔮 Future Enhancements

- **Voice commands**: Speech-to-text integration
- **Mobile app**: React Native companion app
- **Cloud deployment**: Deploy Jarvis to cloud services
- **Plugin system**: Modular command extensions
- **Multi-user support**: Multiple users with separate contexts

---

**Happy chatting with Jarvis! 🎉**

For more information, check the `Jarvis/` directory for additional documentation and examples.

function sendMessage() {
  const input = document.getElementById('userInput');
  const message = input.value.trim();
  if (!message) return;

  const chatbox = document.getElementById('chatbox');

  // User Message
  const userMsg = document.createElement('div');
  userMsg.className = 'message user';
  userMsg.textContent = message;
  chatbox.appendChild(userMsg);

  // AI Fake Reply
  const botMsg = document.createElement('div');
  botMsg.className = 'message bot';
  botMsg.textContent = 'Thinking...';
  chatbox.appendChild(botMsg);

  input.value = '';
  setTimeout(() => {
    botMsg.textContent = 'This is a static Gorg AI reply. AI integration coming soon!';
    chatbox.scrollTop = chatbox.scrollHeight;
  }, 1000);
}

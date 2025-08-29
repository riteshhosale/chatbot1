async function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (message === "") return;

  const chatBox = document.getElementById("chat-box");

  // Show user message
  const userMsg = document.createElement("div");
  userMsg.className = "user-msg";
  userMsg.innerText = message;
  chatBox.appendChild(userMsg);

  // Show loading text while waiting for API
  const botMsg = document.createElement("div");
  botMsg.className = "bot-msg";
  botMsg.innerText = "Thinking...";
  chatBox.appendChild(botMsg);

  // Get bot response (API call)
  const botResponse = await getBotReply(message);
  botMsg.innerText = botResponse;

  // Scroll to bottom
  chatBox.scrollTop = chatBox.scrollHeight;

  // Clear input
  input.value = "";
}

async function getBotReply(message) {
  message = message.toLowerCase();

  if (message.includes("attendance")) {
    try {
      let res = await fetch("http://localhost:5000/api/attendance"); // Example API
      let data = await res.json();
      return `Your attendance is ${data.percentage}% (${data.present} days present).`;
    } catch (error) {
      return "Error fetching attendance data. Please try again later.";
    }
  } else if (message.includes("hello") || message.includes("hi")) {
    return "Hello! How can I help you today?";
  } else if (message.includes("download")) {
    return "You can download your attendance report from the portal.";
  } else {
    return "Sorry, I didn’t understand that.";
  }
}

// ✅ Event listener
document.getElementById("user-input").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    sendMessage(); 
  }
});

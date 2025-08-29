function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (message === "") return;

  const chatBox = document.getElementById("chat-box");

  // Show user message
  const userMsg = document.createElement("div");
  userMsg.className = "user-msg";
  userMsg.innerText = message;
  chatBox.appendChild(userMsg);

  // Get bot response
  const botResponse = getBotReply(message);
  const botMsg = document.createElement("div");
  botMsg.className = "bot-msg";
  botMsg.innerText = botResponse;
  chatBox.appendChild(botMsg);

  // Scroll to bottom
  chatBox.scrollTop = chatBox.scrollHeight;

  // Clear input
  input.value = "";
}

function getBotReply(message) {
  message = message.toLowerCase();

  if (message.includes("hello") || message.includes("hi")) {
    return "Hello! How can I help you today?";
  } else if (message.includes("attendance")) {
    return "You can view your attendance by clicking 'View Attendance' tab.";
  } else if (message.includes("mark")) {
    return "To mark attendance, go to the 'Mark Attendance' section.";
  } else if (message.includes("download") || message.includes("report")) {
    return "You can download the attendance report from the 'Download' page.";
  } else {
    return "Sorry, I didn’t understand that. Please ask something else.";
  }
}


document.getElementById("user-input").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    sendMessage(); 
  }
});

function sendMessage() {
    const inputElement = document.getElementById('user-input');
    const message = inputElement.value.trim();
    if (message !== '') {
      const messagesContainer = document.getElementById('messages');
      const messageElement = document.createElement('div');
      messageElement.classList.add('message');
      messageElement.textContent = message;
      messagesContainer.appendChild(messageElement);
      inputElement.value = '';
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  }

  function deleteMessages() {
    const messagesContainer = document.getElementById('messages');
    messagesContainer.innerHTML = '';
  }
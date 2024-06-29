
import React, { useState } from 'react';
import styles from '../styles/ChatInterface.module.css';
import MessageList from './MessageList';
import InputArea from './InputArea';

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = async (message) => {
    // Add user message to the list
    setMessages(prev => [...prev, { text: message, isUser: true }]);

    // Here, you would typically make an API call to your AI backend
    // For now, we'll just simulate a response
    setTimeout(() => {
      setMessages(prev => [...prev, { text: "This is a simulated AI response.", isUser: false }]);
    }, 1000);
  };

  return (
    <div className={styles.chatInterface}>
      <div className={styles.chatHeader}>
        <h2>AI Educational Coach</h2>
      </div>
      <MessageList messages={messages} />
      <InputArea onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatInterface;
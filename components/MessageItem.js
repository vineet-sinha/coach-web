// components/MessageItem.js

import React from 'react';
import styles from '../styles/ChatInterface.module.css';

const MessageItem = ({ message }) => {
  return (
    <div className={`${styles.messageItem} ${message.isUser ? styles.userMessage : styles.aiMessage}`}>
      <div className={styles.messageContent}>
        {message.text}
      </div>
    </div>
  );
};

export default MessageItem;
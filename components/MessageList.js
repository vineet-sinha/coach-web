
import React from 'react';
import MessageItem from './MessageItem';
import styles from '../styles/ChatInterface.module.css';

const MessageList = ({ messages }) => {
  return (
    <div className={styles.messageList}>
      {messages.map((message, index) => (
        <MessageItem key={index} message={message} />
      ))}
    </div>
  );
};

export default MessageList;

import React, { useState } from 'react';
import styles from '../styles/ChatInterface.module.css';

const InputArea = ({ onSendMessage }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSendMessage(input);
      setInput('');
    }
  };

  return (
    <form className={styles.inputArea} onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message here..."
        className={styles.inputField}
      />
      <button type="submit" className={styles.sendButton}>
        Send
      </button>
    </form>
  );
};

export default InputArea;
import React from 'react';
import Typed from '@prisma/client'

// interface MessageProps {
//   text: string;
//   sender?: 'user' | 'bot';  // Define message sender type
//   timestamp?: string;       // Assuming timestamp is a string for simplicity
// }

const Message: React.FC<Typed.Message> = ({ content, role, createdAt }) => {
  const isUser = role === 'user';

  return (
    <div className={`message ${isUser ? 'user-message' : 'bot-message'}`}>
      <div className="message-content">
        <p>{content}</p>
      </div>
      <div className="message-timestamp">
        <p>{createdAt.toJSON()}</p>
      </div>
    </div>
  );
};

export default Message;

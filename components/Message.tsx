import React from 'react';
import Typed from '@prisma/client'
import { intlFormatDistance } from 'date-fns';

const Message: React.FC<Typed.Message> = ({ content, role, createdAt }) => {
  const isUser = role === 'user';

  return (
    <div className={`message ${isUser ? 'user-message' : 'bot-message'}`}>
      <div className="message-content">
        <p>{content}</p>
      </div>
      <div className="message-timestamp">
        <p>{intlFormatDistance(createdAt, new Date())}</p>
      </div>
    </div>
  );
};

export default Message;

import React from 'react';
import Typed from '@prisma/client'
import { RiRobot3Fill } from "react-icons/ri";
import { intlFormatDistance } from 'date-fns';

const Message: React.FC<Typed.Message> = ({ content, role, createdAt }) => {
  const isUser = role === 'user';

  return (
    <div className="message-wrapper flex w-full">
    {!isUser && <RiRobot3Fill className="mt-6 mr-4"/>}
    <div className={`message ${isUser ? 'user-message bg-gray-200 ml-auto' : 'bot-message bg-acquaspring-500'} w-[50rem] p-4 rounded-2xl mt-2`}>
      <div className="message-content">
        <p>{content}</p>
      </div>
      <div className="message-timestamp">
        <p className='italic text-sm'>- {intlFormatDistance(createdAt, new Date())}</p>
      </div>
    </div>
    </div>
  );
};

export default Message;

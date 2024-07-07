import React from 'react';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';

const MessageComponent = () => {
  return (
    <div className="flex flex-col space-y-2 items-start ml-[22px] mt-[17px]">
    {/* icon */}
  
    <div className="flex flex-col space-y-2 text-base max-w-md mx-2">
      <div className="px-4 py-2 rounded-lg inline-block rounded-2xl bg-acquaspring-500 text-gray-900">
        <div className="flex flex-wrap items-center space-x-2">
        <ReactMarkdown className="prose">
          Here are some options for next steps:
        </ReactMarkdown>
          <div className="flex flex-wrap mt-2 space-y-4">
            <button className="px-4 py-2 bg-[#a8e6cf] text-white rounded-md">Purpose of an index in a database</button>
            <button className="px-4 py-2 bg-[#a8e6cf] text-white rounded-md">Process vs. thread in OS</button>
            <button className="px-4 py-2 bg-[#a8e6cf] text-white rounded-md">Role of a kernel in a computer system</button>
          </div>
        </div>
        <div className="text-xs select-none mt-2 w-full text-right text-zinc-500">
          {/* {format(new Date(message.createdAt), 'HH:mm')} */}
          06: 44
        </div>
      </div>
    </div>
  </div>
  

  );
};

export default MessageComponent;

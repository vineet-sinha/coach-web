import React, { useState, useEffect, useRef, useCallback } from 'react';
import Typed from '@prisma/client'
import { Button, TextInput } from 'flowbite-react'
import Message from './Message';
import { useAuth } from '@/services/auth';

interface ChatWindowProps {}

const welcomeMessage:Typed.Message = {
  role: 'assistant',
  content: 'Welcome to Cone.ai! What can I help you learn today?',
  createdAt: new Date()
}

const ChatWindow: React.FC<ChatWindowProps> = (props) => {
  const [chatSessionId, setChatSessionId] = useState('');
  const [messages, setMessages] = useState<Array<Typed.Message>>([welcomeMessage]);
  const [inputText, setInputText] = useState<string>('');
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const { isAuthenticated, user } = useAuth();

  const fetchRecentSessionChatHistory = useCallback(async () => {
    try {
      if (!isAuthenticated) {
        setChatSessionId('');
        setMessages([welcomeMessage]);
        return;
      }
      const response = await fetch(`/api/chatSessions/mostRecent?userId=${user?.id}`)
      if (!response.ok) {
        console.error('Unexpected Error: Failed to fetch session details', await response.json());
        setChatSessionId('');
        setMessages([welcomeMessage]);
        return;
      }
      const history = (await response.json()) as Typed.ChatSession

      setChatSessionId(history.id);
      setMessages(history.messages);
    } catch (error) {
      console.error('Error fetching chat history:', error);
    }
  }, [isAuthenticated, user]);

  useEffect(() => {
    if (isAuthenticated) {
      fetchRecentSessionChatHistory()
    }
  }, [isAuthenticated, fetchRecentSessionChatHistory])

  const handleSendMessage = async () => {
    try {
      if (!user || !user.id) return;

      const messageToSend = inputText.trim();
      setInputText('');
      const response = await fetch(`/api/chatSessions/getResponse`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: user.id,
          chatSessionId: chatSessionId,
          message: messageToSend
        }),
      })
      if (!response.ok) {
        console.error('Unexpected Error: Failed to send message', await response.json());
        setMessages([welcomeMessage]);
        return;
      }
      const data = await response.json()
      console.log('Received from server on /api/chatSessions/getResponse: ', data)
      // setMessages(data);
      if (data.success) {
        const chatResponse: Typed.Message = {
          role: 'assistant',
          content: data.message,
          createdAt: new Date()
        }
        setMessages(prevMessages => [...prevMessages, chatResponse])
      } else {
        console.error('Unexpected Error: Failed to get response', data.message);
        setMessages([welcomeMessage]);
      }

      // Scroll to bottom of chat window
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
      }
    } catch (error) {
      console.error('Error saving message:', error);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  const newSession = async () => {
    setChatSessionId('')
    setMessages([welcomeMessage])
  }

  return (
    <div className="flex flex-col h-full">
      <div className="px-4 py-2">
        <Button onClick={newSession}>New Session</Button>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-2" ref={chatContainerRef}>
        {messages.map((message, index) => (
          <Message key={index} content={message.content} role={message.role} createdAt={message.createdAt} />
        ))}
      </div>
      <div className="flex items-center justify-center p-4">
        <TextInput
          type="text"
          className="flex-1 border border-gray-300 rounded-md px-3 py-2 mr-2 outline-none"
          placeholder="Type your message..."
          value={inputText}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;

// ChatBox.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import MessageInput from './MessageInput';
import Message from './Message';
import { submitChat } from '../../api/customerService';
import { Slide } from '@mui/material';

const ChatBox = () => {
  const { userId } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [chat, setChat] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      // Add user message
      setMessages(messages => [...messages, { content: chat, isUserMessage: true }]);
      
      const response = await submitChat(name, email, chat, userId);
      // Add server response
      setMessages(messages => [...messages, { content: response, isUserMessage: false }]);
      
      setChat('');
      setIsLoading(false);
    } catch (error) {
      console.error('Error submitting chat:', error);
      setIsLoading(false);
    }
};

  return (
    <div>
      <MessageInput 
        name={name} setName={setName} 
        email={email} setEmail={setEmail} 
        chat={chat} setChat={setChat} 
        isLoading={isLoading} 
        handleSubmit={handleSubmit} 
      />
       {messages.map((message, index) => (
    <Message content={message.content} isUserMessage={message.isUserMessage} />
))}
    </div>
  );
};

export default ChatBox;
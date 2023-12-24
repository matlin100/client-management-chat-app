import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import MessageInput from './MessageInput';
import Message from './Message';
import { submitChat } from '../../api/customerService';

const ChatBox = () => {
    const { userId } = useParams();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [chat, setChat] = useState('');
    const [messages, setMessages] = useState([]); // Array to store messages from the server
    const [isLoading, setIsLoading] = useState(false);
    

    const handleSubmit = async () => {
        try {
          setIsLoading(true);
          const response = await submitChat(name, email, chat, userId);
          setMessages([...messages, response]);
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
        <Message key={index} content={message} />
      ))}
    </div>
  );
};

export default ChatBox;

'use client';
import React, { useState, useEffect } from 'react';
import ChatMessage from '@/components/assistant/ChatMessage';
import ChatInput from '@/components/assistant/ChatInput';
import {sendMessages} from '@/services/iaFetching';
const ChatBot = () => {
	const [messages, setMessages] = useState([{ text: '¡Hola! ¿Cómo puedo ayudarte hoy?', isUser: false }]);

	const handleSendMessage = (message) => {
        setMessages(prevMessages => [...prevMessages, { text: message, isUser: true }]);
        async function getResponse() {
            const response = await sendMessages(message);
            setMessages(prevMessages => [...prevMessages, { text: response, isUser: false }]);
        }
        getResponse();
    };

	useEffect(() => {
		const chatContainer = document.querySelector('#chat-container');
		chatContainer.scrollTop = chatContainer.scrollHeight;
	}, [messages]);

	return (
		<div className="flex flex-col h-full p-4 bg-white">
			<div id="chat-container" className="flex-grow overflow-y-auto p-2 border border-gray-300 rounded-md shadow-inner">
				{messages.map((msg, index) => (
					<ChatMessage key={index} message={msg.text} isUser={msg.isUser} />
				))}
			</div>
			<ChatInput onSendMessage={handleSendMessage} />
		</div>
	);
};

export default ChatBot;

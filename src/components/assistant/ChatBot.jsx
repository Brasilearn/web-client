'use client';
import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup } from '@nextui-org/react';
import ChatMessage from '@/components/assistant/ChatMessage';
import ChatInput from '@/components/assistant/ChatInput';
import Title from '@/components/common/Title';
import Personality from './Personality';

const ChatBot = () => {
	const [messages, setMessages] = useState([{ text: '¡Hola! ¿Cómo puedo ayudarte hoy?', isUser: false }]);

	const handleSendMessage = (message) => {
		setMessages([...messages, { text: message, isUser: true }]);
		// Simulate bot response
		setTimeout(() => {
			setMessages((prevMessages) => [
				...prevMessages,
				{ text: 'Estoy aquí para ayudarte con tu aprendizaje de español-portugués.', isUser: false },
			]);
		}, 1000);
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
			<div className="flex flex-col gap-4">
				
                <Personality className="flex flex-col md:flex-row gap-4 items-center py-2"/>
			</div>
			<ChatInput onSendMessage={handleSendMessage} />
		</div>
	);
};

export default ChatBot;

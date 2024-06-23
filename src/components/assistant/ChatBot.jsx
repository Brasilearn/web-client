'use client';
import React, { useEffect } from 'react';
import ChatMessage from '@/components/assistant/ChatMessage';

const ChatBot = ({ data }) => {
	useEffect(() => {
		const chatContainer = document.querySelector('#chat-container');
		chatContainer.scrollTop = chatContainer.scrollHeight;
	}, [data]);

	return (
		<div
			id="chat-container"
			className="flex flex-col gap-4 overflow-y-scroll overflow-clip h-[50vh] p-4 rounded-md border border-gray-100 bg-gray-50">
			{data.map((msg, index) => (
				<ChatMessage key={index} message={msg.text} isUser={msg.isUser} />
			))}
		</div>
	);
};

export default ChatBot;

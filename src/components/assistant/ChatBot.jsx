'use client';
import React, { useEffect, useRef } from 'react';
import ChatMessage from '@/components/assistant/ChatMessage';

const ChatBot = ({ data }) => {
	const chatContainerRef = useRef(null);

	useEffect(() => {
		const chatContainer = chatContainerRef.current;
		chatContainer.scrollTop = chatContainer.scrollHeight;
	}, [data]);

	return (
		<div
			ref={chatContainerRef}
			id="chat-container"
			className="flex flex-col gap-4 overflow-y-auto overflow-clip h-[50vh] p-4 rounded-md border border-gray-100 bg-gray-50">
			{data.map((msg, index) => (
				<ChatMessage
					key={index}
					message={msg.text}
					isUser={msg.isUser}
					isAnimate={index === data.length - 1}
					chatContainerRef={chatContainerRef}
				/>
			))}
		</div>
	);
};

export default ChatBot;

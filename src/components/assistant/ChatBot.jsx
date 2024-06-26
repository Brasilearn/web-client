'use client';
import React, { useEffect, useRef } from 'react';
import ChatMessage from '@/components/assistant/ChatMessage';

const ChatBot = ({ data }) => {

	return (
		<div
			id="chat-container"
			className="flex flex-col gap-4 overflow-y-auto overflow-clip h-[50vh] p-4 rounded-md border border-gray-100 bg-gray-50">
			{data && data.map((msg, index) => (
					<div key={index}>
                    {
                        msg.role !== 'system' &&
                        <ChatMessage
						message={msg.content}
						isUser={msg.role === 'user'}
						isAnimate={msg?.animate??false}
					/>
                    }
                    </div>
				)
			)}
		</div>
	);
};

export default ChatBot;

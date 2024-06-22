"use client"
import React, { useState } from 'react';
import ChatBot from '@/components/assistant/ChatBot';
import ChatList from '@/components/assistant/ChatList';
import FAQSection from '@/components/assistant/FAQSection';
import { FaChevronDown } from 'react-icons/fa';

const AssistantPage = () => {
	const mockUser = {
        id: 1,
		name: 'Admin',
		imageUrl: 'https://via.placeholder.com/150',
	};

	const [isChatListOpen, setIsChatListOpen] = useState(true);

	const toggleChatList = () => {
		setIsChatListOpen(!isChatListOpen);
	};

	return (
		<div className="flex flex-col min-h-screen bg-gray-100">
			<div className="flex flex-1">
				{isChatListOpen && <ChatList />}
				<main className="flex-grow flex flex-col">
					<ChatBot user={mockUser}/>
					<FAQSection />
				</main>
			</div>
			<button
				className="fixed bottom-4 left-4 bg-success/75 text-white p-2 rounded-full shadow-lg z-50"
				onClick={toggleChatList}>
				<div className={`transition-all duration-400 ${isChatListOpen ? 'rotate-90' : '-rotate-90'}`}>
					<FaChevronDown size={14} />
				</div>
			</button>
		</div>
	);
};

export default AssistantPage;

'use client';
import React, { useEffect, useState } from 'react';

import Title from '@/components/common/Title';
import ChatBot from '@/components/assistant/ChatBot';
import ChatList from '@/components/assistant/ChatList';
import ChatInput from '@/components/assistant/ChatInput';
import FAQSection from '@/components/assistant/FAQSection';
import Filters from '@/components/common/Filters';
import { getChats, sendMessages } from '@/services/iaFetching';

const generateUniqueId = () => '_' + Math.random().toString(36).substr(2, 9);

const mockUser = {
	id: 2,
	name: 'Admin',
	imageUrl: 'https://via.placeholder.com/150',
};

const mockChat = {
	chat_id: generateUniqueId(),
	data: [{ content: 'Hola, soy tu asistente virtual, ¿en qué puedo ayudarte?', isUser: 'assistant' }],
	personalidad: 'Default',
	titulo: 'Chat 1',
};

const personalities = [{ name: 'Profesional' }, { name: 'Joven' }, { name: 'Sarcastico' }];
const providers = [{ name: 'groq' }, { name: 'openai' }];
const models = {
	openai: [{ name: 'gpt-3.5-turbo' }, { name: 'gpt-4' }, { name: 'gpt-4o' }],
	groq: [{ name: 'llama3-70b-8192' }, { name: 'gemma-7b-it' }, { name: 'llama3-8b-8192' }],
};

const AssistantPage = () => {
	const [chats, setChats] = useState(null);
	const [chatSelected, setChatSelect] = useState(null);
	const [messages, setMessages] = useState([]);
	const [personality, setPersonality] = useState(personalities[0].name);
	const [provider, setProvider] = useState(providers[0].name);
	const [model, setModel] = useState(models[provider][0].name);

	useEffect(() => {
		setModel(models[provider][0].name);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [provider]);

	useEffect(() => {
		const chatsFetching = async () => {
			const chats = await getChats(mockUser.id);
            if (chats.length === 0) {
                return;
            }
			setChats(chats);
			setChatSelect(chats[0]);
		};
		chatsFetching();
	}, []);

	useEffect(() => {
		if (chatSelected) {
			setMessages(chatSelected.data);
		}
	}, [chatSelected]);

	const handleSendMessage = async (message) => {
		setMessages((prevMessages) => [...prevMessages, { content: message, role: 'user' }]);
		const response = await sendMessages(mockUser.id, chatSelected.chat_id, message, provider, model, personality);
		setMessages((prevMessages) => [...prevMessages, { content: response.message, role: 'assistant' }]);
        if (response.title && response.title !== chatSelected.titulo) {
            setChats((prevChats) =>
                prevChats.map((chat) =>
                    chat.chat_id === chatSelected.chat_id ? { ...chat, titulo: response.title } : chat
                )
            );
        }
	};

	const handleNewChat = () => {
		const newChatId = generateUniqueId();
		const newChat = {
			chat_id: newChatId,
			data: mockChat.data,
			personalidad: personality,
			titulo: 'Chat Nuevo',
		};
        setChats((prevChats) => {
            const updatedChats = prevChats !== null ? [...prevChats, newChat] : [newChat];
            setChatSelect(updatedChats[updatedChats.length - 1]); 
            return updatedChats;
        });
	};

	return (
		<div className="container flex flex-col md:flex-row gap-4 py-6">
			<aside className="w-full max-w-sm flex flex-col gap-4">
				<Title size="medium" color="primary">
					Chat Bot
				</Title>
				<ChatList data={chats} onSelect={setChatSelect} onCreate={handleNewChat} />
				<Title size="small" color="primary">
					Personalidad: {personality}
				</Title>
				<Filters
					className="flex flex-row gap-2 items-center flex-wrap"
					data={personalities}
					select={personality}
					onSelect={setPersonality}
				/>
				<Title size="small" color="primary">
					Provedor: {provider}
				</Title>
				<Filters
					className="flex flex-row gap-2 items-center flex-wrap"
					data={providers}
					select={provider}
					onSelect={setProvider}
				/>
				<Title size="small" color="primary">
					Modelo: {model}
				</Title>
				<Filters
					className="flex flex-row gap-2 items-center flex-wrap"
					data={models[provider]}
					select={model}
					onSelect={setModel}
				/>
			</aside>
			<main className="w-full flex flex-col gap-4">
				<ChatBot user={mockUser} data={messages} />
				<ChatInput onSendMessage={handleSendMessage} />
				<FAQSection />
			</main>
		</div>
	);
};

export default AssistantPage;

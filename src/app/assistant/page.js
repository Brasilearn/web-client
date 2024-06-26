'use client';
import React, { useEffect, useState } from 'react';

import Title from '@/components/common/Title';
import ChatBot from '@/components/assistant/ChatBot';
import ChatList from '@/components/assistant/ChatList';
import ChatInput from '@/components/assistant/ChatInput';
import FAQSection from '@/components/assistant/FAQSection';
import Filters from '@/components/common/Filters';
import { getChats, sendMessages } from '@/services/iaFetching';

const mockUser = {
	id: 1,
	name: 'Admin',
	imageUrl: 'https://via.placeholder.com/150',
};

const personalities = [{ name: 'Profesional' }, { name: 'Joven' }, { name: 'Sarcastico' }];
const providers = [{ name: 'groq' }, { name: 'openai' }];
const models = {
	openai: [{ name: 'gpt-3.5-turbo' }, { name: 'gpt-4' }, { name: 'gpt-4o' }],
	groq: [{ name: 'gemma-7b-it' }, { name: 'llama3-70b-8192' }, { name: 'llama3-8b-8192' }],
};

const AssistantPage = () => {
	const [chats, setChats] = useState([]);
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
			const chats = await getChats(2);
			setChats(chats);
            setMessages( chats.length > 0 ? chats[0].data : [{ content: 'Hola, soy tu asistente virtual, ¿en qué puedo ayudarte?', isUser: false }]);
		};
		chatsFetching();
	}, []);

	const handleSendMessage = (message) => {
		setMessages((prevMessages) => [...prevMessages, { content: message, role: 'user' }]);
		async function getResponse() {
			const response = await sendMessages('2', '3', message, provider, model, personality);
			setMessages((prevMessages) => [...prevMessages, { content: response.message, role: 'assistant' }]);
		}
		getResponse();
	};
	return (
		<div className="container flex flex-col md:flex-row gap-4 py-6">
			<aside className="w-full max-w-sm flex flex-col gap-4">
				<Title size="medium" color="primary">
					Chat Bot
				</Title>
				<ChatList data={chats}/>
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

'use client';
import React, { useEffect, useState } from 'react';
import Title from '@/components/common/Title';

import ChatBot from '@/components/assistant/ChatBot';
import ChatList from '@/components/assistant/ChatList';
import ChatInput from '@/components/assistant/ChatInput';
import FAQSection from '@/components/assistant/FAQSection';
import Filters from '@/components/common/Filters';
import { sendMessages } from '@/services/iaFetching';

const AssistantPage = () => {
	const mockUser = {
		id: 1,
		name: 'Admin',
		imageUrl: 'https://via.placeholder.com/150',
	};

	const personalities = [{ name: 'Profesional' }, { name: 'Joven' }, { name: 'Sarcastico' }];
	const [personality, setPersonality] = useState(personalities[0].name);

	const providers = [{ name: 'groq' }, { name: 'openai' }];
	const [provider, setProvider] = useState(providers[0].name);

	const models = {
		openai: [{ name: 'gpt-3.5-turbo' },{ name: 'gpt-4' },  { name: 'gpt-4o' }],
		groq: [{ name: 'gemma-7b-it' }, { name: 'llama3-70b-8192' }, { name: 'llama3-8b-8192' }],
	};
	const [model, setModel] = useState(models[provider][0].name);

	const [messages, setMessages] = useState([{ text: '¡Hola! ¿Cómo puedo ayudarte hoy?', isUser: false }]);

	const handleSendMessage = (message) => {
		setMessages((prevMessages) => [...prevMessages, { text: message, isUser: true }]);
		async function getResponse() {
			const response = await sendMessages('1', '1', message, provider, model, personality);
			console.log(response);
			setMessages((prevMessages) => [...prevMessages, { text: response.message, isUser: false }]);
		}
		getResponse();
	};

    useEffect(() => {
        setModel(models[provider][0].name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [provider]);

	return (
		<div className="container flex flex-col md:flex-row gap-4 py-6">
			<aside className="w-full max-w-sm flex flex-col gap-4">
				<Title size="medium" color="primary">
					Chat Bot
				</Title>
				<ChatList />
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

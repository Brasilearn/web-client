'use client';
import React, { useState } from 'react';
import Title from '@/components/common/Title';
import Personality from '@/components/assistant/Personality';
import ChatBot from '@/components/assistant/ChatBot';
import ChatList from '@/components/assistant/ChatList';
import ChatInput from '@/components/assistant/ChatInput';
import FAQSection from '@/components/assistant/FAQSection';
import Models from '@/components/assistant/Models';
import { sendMessages } from '@/services/iaFetching';

const AssistantPage = () => {
	const mockUser = {
		id: 1,
		name: 'Admin',
		imageUrl: 'https://via.placeholder.com/150',
	};

	const personalities = [{ name: 'Profesional' }, { name: 'Joven' }, { name: 'Sarcastico' }];
	const [personality, setPersonality] = useState(personalities[0].name);

	const models = [
		{ name: 'GPT-3.5' },
		{ name: 'GPT-3.5-turbo' },
		{ name: 'GPT-4o' },
		{ name: 'Groq' },
		{ name: 'Gemini' },
		{ name: 'Gemma 7b' },
		{ name: 'LLaMA3 70b' },
		{ name: 'LLaMA3 8b' },
	];
	const [model, setModel] = useState(models[0].name);

    const [messages, setMessages] = useState([{ text: '¡Hola! ¿Cómo puedo ayudarte hoy?', isUser: false }]);


	const handleSendMessage = (message) => {
        setMessages(prevMessages => [...prevMessages, { text: message, isUser: true }]);
        async function getResponse() {
            const response = await sendMessages(message, model, personality);
            setMessages(prevMessages => [...prevMessages, { text: response, isUser: false }]);
        }
        getResponse();
    };

	return (
		<div className="container flex flex-row gap-4 py-6">
			<aside className="w-full max-w-sm flex flex-col gap-4">
				<Title size="medium" color="primary">
					Chat Bot
				</Title>
				<ChatList />
				<Title size="small" color="primary">
					Personalidad: {personality}
				</Title>
				<Personality
					className="flex flex-col md:flex-row gap-2 items-center flex-wrap"
					data={personalities}
					personality={personality}
					onPersonality={setPersonality}
				/>
				<Title size="small" color="primary">
					Modelo: {model}
				</Title>
				<Models
					className="flex flex-col md:flex-row gap-2 items-center flex-wrap"
					data={models}
					model={model}
					onModel={setModel}
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

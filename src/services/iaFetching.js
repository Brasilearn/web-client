import { user } from '@nextui-org/react';
import axios from 'axios';

export async function getContext(user_id, chat_id) {
	const body = {
		user: user_id,
		chat_id: chat_id,
	};
	try {
		const response = await axios.post('https://brasilearn-api-gateway.fly.dev/userContext/', body);
		return response.data;
	} catch (error) {
		console.error(error);
		return null;
	}
}

export async function sendMessages(user_id, chat_id, message, provider, model, personality) {
	/*
    {
    "user_id": "5",
    "prompt": "Enseñame un vocabulario de portugues basico",
    "personalidad": "Sarcastico",
    "provider":"groq",
    "model":"llama3-8b-8192",
    "chat_id":"1"
    }
    */
	const body = {
		user_id: user_id,
        chat_id: chat_id,
		prompt: message,
		provider: provider.toLowerCase(),
        model: model.toLowerCase(),
		personalidad: personality,
	};
	try {
		const response = await axios.post('https://brasilearn-api-gateway.fly.dev/pathLLM-chatbot/', body);
		return response.data;
	} catch (error) {
		console.error(error);
		return 'Lo siento, no pude entender tu mensaje.';
	}
}

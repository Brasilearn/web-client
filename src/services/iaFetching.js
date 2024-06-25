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

export async function getChats(user_id) {
    try {
        const response = await axios.get(`https://brasilearn-api-gateway.fly.dev/all_chats_user/${user_id}`);
        return response.data.context;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function sendMessages(user_id, chat_id, message, provider, model, personality) {

	const body = {
		user_id: user_id,
        chat_id: chat_id,
		prompt: message,
		provider: provider,
        model: model,
		personalidad: personality,
	};
	try {
		const response = await axios.post('https://brasilearn-api-gateway.fly.dev/pathLLM-chatbot/', body);
		return response.data;
	} catch (error) {
		console.error(error);
		return { message: 'Lo siento, no pude entender tu mensaje.', title: 'Error'};
	}
}

import axios from 'axios';

export async function getContext(user_id, chat_id) {
    const body = {
        user: user_id,
        chat_id: chat_id
    };
    try {
        const response = await axios.post('https://brasilearn-api-gateway.fly.dev/userContext/', body);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function sendMessages(message, model, personality) {
	const body = {
		user_id: '2',
		prompt: message,
        provider: model.toLowerCase(),
		personalidad: personality,
	};
	try {
		const response = await axios.post('https://brasilearn-api-gateway.fly.dev/pathLLM-chatbot/', body);
		return response.data.response;
	} catch (error) {
		console.error(error);
		return 'Lo siento, no pude entender tu mensaje.';
	}
}
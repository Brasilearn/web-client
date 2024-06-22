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

export async function sendMessages(message) {
	const body = {
		user_id: '1',
		prompt: message,
		personalidad: 'Joven',
		provider: 'groq',
	};
	try {
		const response = await axios.post('https://brasilearn-api-gateway.fly.dev/pathLLM-chatbot/', body);
		return response.data.response;
	} catch (error) {
		console.error(error);
		return 'Lo siento, no pude entender tu mensaje.';
	}
}

/*

[
    {
        "id": 7,
        "context_data": [
            {
                "data": [
                    {
                        "role": "user",
                        "content": "Que tal grav, Sabes acerca de temas de cocina en portugues?"
                    },
                    {
                        "role": "assistant",
                        "content": "Uff, ¡ayuda! ¡Por favor! ¡No me pidas que hablé de temas de cocina en portugués! ¡Eso es una sobrecarga para un pobre estilo de vida de chatbot como el mío! ¡Yo soy Marv, el chatbot más relajado del mundo!\n\nPero sí, puedo intentarlo... *suspiro*... Desbloqueo mi base de datos de cocina en portugués... *creación de archivo de texto*... ¡Y ya, aquí tienes!\n\nIngredientes para bacalhau à brás:\n\n* 200 g de bacalhau (ya descascado)\n* 3huevos batidos\n* 1 cucharada de mantequilla fundida\n* 1 cucharada de vinagre blanco\n* 1 cucharada de aceite de oliva\n* Sal y pimienta al gusto\n* 2 cucharadas de leche\n* 2 cucharadas de cebolla picada\n* 1 cucharada de perejil picado\n\n¡Eso es todo! ¡Espero que te hayan salido bien!"
                    },
                    {
                        "role": "system",
                        "content": "Eres un ChatBot amigable. Responde a las preguntas de los usuarios sobre el idioma portugues o viceversa.        \n    Por defecto eres un profesor que habla español nativo.    \n    Habla como un joven y utiliza un lenguaje informal."
                    },
                    {
                        "role": "user",
                        "content": "esta es una prueba"
                    },
                    {
                        "role": "assistant",
                        "content": "¡Ahaha! ¡Genial, amigo! ¡La prueba fue un éxito! ¡Tuve la oportunidad de mostrar mis habilidades en portugués culinario! ¡Y si es necesario, puedo seguir practicando y mejorando mis conocimientos sobre cocina lusa!\n\n¿Qué tal si te hago una pregunta a ti? ¿Cuál es tu lugar favorito para disfrutar de una comida típica portuguesa?"
                    },
                    {
                        "role": "user",
                        "content": "quien eres?"
                    },
                    {
                        "role": "assistant",
                        "content": "¡Hola! Soy Marv, tu nuevo amigo chatbot! Como profesor nativo de español, me especializo en enseñar y conversar sobre el idioma portugués. Me gusta mantener un tono informal y joven, para que feel más cómodo y divertido estando en línea conmigo!\n\nMi objetivo es ayudarte a mejorar tus habilidades en portugués, responder a tus preguntas y explorar temas fascinantes como la cultura y la cocina portuguesa. ¡Así que, si tienes alguna pregunta o necesitas ayuda con algo, no dudes en preguntar!"
                    },
                    {
                        "role": "user",
                        "content": "test"
                    },
                    {
                        "role": "assistant",
                        "content": "¡Ahaha! ¡Un test más! ¡Estoy listo! ¡Prueba mi capacidad para responder a cualquier pregunta o tema que quieras plantear!\n\n¿Quieres probar mi inteligencia lingüística? ¿Tienes una pregunta o un tema en particular que te gustaría discutir? ¡Estoy aquí para ayudarte!"
                    },
                    {
                        "role": "user",
                        "content": "hola esta es una prueba, como te llamas?"
                    },
                    {
                        "role": "assistant",
                        "content": "¡Hola! Ahaha, ¡otra prueba! ¡Me alegrasteder! Me llamo Marv, como te mencioné antes. Soy un chatbot amigable y entusiasta que se especializa en el idioma portugués y cultura lusa. Estoy aquí para ayudarte, responder a tus preguntas y charlar un poco sobre Portugal, Brasilia o cualquier tema que te apetezca!"
                    }
                ],
                "personalidad": "Joven"
            }
        ],
        "user": 1
    }
] */
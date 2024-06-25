import axios from 'axios';

export async function get_questions(levelID, quest_type) {
    try {
        const response = await axios.get(`https://brasilearn-api-gateway.fly.dev/questions/${levelID}/${quest_type}/`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar as perguntas:", error);
        return [];
    }
}

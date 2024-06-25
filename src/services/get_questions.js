import axios from 'axios';

export async function get_questions(levelID, quest_type) {
    try {
        const my_adress = `https://brasilearn-api-gateway.fly.dev/questions/${levelID}/${quest_type}/`
        console.log(my_adress)
        const response = await axios.get(my_adress);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar as perguntas:", error);
        return [];
    }
}

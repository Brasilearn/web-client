import axios from 'axios';
import { get_questions } from './get_questions';

export async function getTopics() {
    const res = await axios.get('https://brasilearn-api-gateway.fly.dev/topics/')
        .then((response) => {
            return response;
        }).catch((error) => {
            return error;
        });
    return res.data;
}

export async function getTopic(topic_slug) {
    const res = await axios.get(`https://brasilearn-api-gateway.fly.dev/return_topic/${topic_slug}/`)
        .then((response) => {
            return response;
        }).catch((error) => {
            return error;
        });
    return res.data;
}

export async function getLevels(topic_id) {
    const res = await axios.get(`https://brasilearn-api-gateway.fly.dev/level/${topic_id}/`)
    .then((response) => {
        return response;
    }).catch((error) => {
        return error;
    });
    return res.data;
}


export async function filter_levels(levels, level_dif) {
    const level = levels?.find(l => l.nivel === level_dif);
    return level ? level.id : null;
}


export async function return_questions(topic_slug, level_dif, quest_type) {
    const pregs = [];
    let topicTitle = '';
    let id = '';
    try {
        const topicData = await getTopic(topic_slug);
        topicTitle = topicData.title;
        const levels = await getLevels(topicData.id);
        id = await filter_levels(levels, level_dif);
        const questions = await get_questions(id, quest_type);

        if (Array.isArray(questions)) {
            // Verifica se a quantidade de perguntas é maior que 3
            if (questions.length > 3) {
                pregs.push(...questions.slice(0, 3)); // Adiciona apenas as 3 primeiras perguntas
            } else {
                pregs.push(...questions); // Adiciona todas as perguntas se houver 3 ou menos
            }
        }

    } catch (error) {
        console.error('Failed to fetch data:', error);
    }
    return {
        pregs,
        topicTitle,
        id,
    };
}


/*
export async function getTopics() {
    const response = topics;
    const data = response.data;
    return data;
}

export async function getTopic(topic) {
    const response = topics;
    const data = response.data;
    
    for(let i = 0; i < data.length; i++) {
        if(data[i].slug === topic) {
            return data[i];
        }
    }
    return null;
}


export async function getLevel(topic, level) {
    const response = topics;
    const data = response.data;
    
    for(let i = 0; i < data.length; i++) {
        if(data[i].slug === topic) {
            for(let j = 0; j < data[i].levels.length; j++) {
                if(data[i].levels[j].id === parseInt(level)) {
                    return data[i].levels[j];
                }
            }
        }
    }
    return null;
}

export async function getVocabulary(topic, level) {
    const response = topics;
    const data = response.data;
    
    for(let i = 0; i < data.length; i++) {
        if(data[i].slug === topic) {
            for(let j = 0; j < data[i].levels.length; j++) {
                if(data[i].levels[j].id === parseInt(level)) {
                    return data[i].levels[j].vocabulary;
                }
            }
        }
    }
    return null;
}*/
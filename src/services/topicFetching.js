import axios from 'axios';
import topics from '@/data/topics.json';

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
    const res = await axios.get(`https://brasilearn-api-gateway.fly.dev/return_topic/${topic_slug}`)
        .then((response) => {
            return response;
        }).catch((error) => {
            return error;
        });
    return res.data;
}

export async function getLevels(topic_id) {
    const res = await axios.get(`https://brasilearn-api-gateway.fly.dev/level/${topic_id}`)
    .then((response) => {
        return response;
    }).catch((error) => {
        return error;
    });
    return res.data;
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
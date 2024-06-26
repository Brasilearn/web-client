import axios from 'axios';

export async function login (username, password) {
    try {
        const response = await axios.post('https://brasilearn-api-gateway.fly.dev/login/', {
            username,
            password
        });
        return response.data;
    } catch (error) {
        console.error('Error al hacer login:', error);
        throw error;
    }
}

export async function register (username, fullname, email, password) {
    try {
        const response = await axios.post('https://brasilearn-api-gateway.fly.dev/register/', {
            username,
            fullname,
            email,
            password
        });
        return response.data;
    } catch (error) {
        console.error('Error al hacer login:', error);
        throw error;
    }
}
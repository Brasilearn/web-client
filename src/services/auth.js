import axios from 'axios';

export async function login (email, password) {
    try {
        const response = await axios.post('https://brasilearn-api-gateway.fly.dev/login/', {
            email,
            password
        });
        return response.data;
    } catch (error) {
        console.error('Error al hacer login:', error);
        throw error;
    }
}
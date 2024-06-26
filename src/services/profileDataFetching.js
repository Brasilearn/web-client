import axios from 'axios';

export async function get_user_info(id_user) {
    //peticion
    const res = await axios.get(`https://brasilearn-api-gateway.fly.dev/user-info/${id_user}/`)
        .then((response) => {
            return response;
        }).catch((error) => {
            return error;
        });
    return res.data;
}

export async function getProfileData(id_user) {
    //peticion
    const res = await axios.get(`https://brasilearn-api-gateway.fly.dev/GetUserProfile/`)
        .then((response) => {
            return response;
        }).catch((error) => {
            return error;
        });
    return res.data;
}

export async function createProfileData() {
    const data = {
        name: 'Juan',
        last_name: 'Perez',
        age: 18
    }

    const res = await axios.post('https://brasilearn-api-gateway.fly.dev/profile/', data)
        .then((response) => {
            return response;
        }).catch((error) => {
            return error;
        });
    return res.data;
}

export async function updateProfileData(id_user) {
    const data = {
        name: 'Juan',
        last_name: 'Perez',
        age: 18
    }

    const res = await axios.put(`https://brasilearn-api-gateway.fly.dev/profile/${id_user}`, data)
        .then((response) => {
            return response;
        }).catch((error) => {
            return error;
        });
    return res.data;
}
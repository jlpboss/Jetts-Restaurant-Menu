import axios from 'axios';

export default async function makeApiCall() {
    try {
        const response = await axios.get('http://localhost:8000/menu-items/all');
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
    }
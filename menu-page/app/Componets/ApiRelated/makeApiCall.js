import axios from 'axios';

export default async function makeApiCall() {
    try {
        const response = await axios.get('https://www.jsonkeeper.com/b/MDXW');
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
    }
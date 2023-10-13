import axios from 'axios';

export default async function makeApiCall(){
    axios.get('https://www.jsonkeeper.com/b/MDXW')
        .then(function (response) {
            // handle success
            console.log(response);
            return response
        })
        .catch(function (error) {
            console.log(error);
        });
}
import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 772e5b92e77c3aeaa59fcf3bafc1ba2d5c2e464c7bb7674ac085badafd2ce2ef'
    }
});
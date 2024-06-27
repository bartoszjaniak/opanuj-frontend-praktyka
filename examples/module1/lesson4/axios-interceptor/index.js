import axios from 'axios';

// Add a request interceptor
axios.interceptors.request.use(function(config) {
    console.time(config.url);
    return config;
});

// Add a response interceptor
axios.interceptors.response.use(function(response) {
    console.timeLog(response.config.url);
    return response;
});

const {
    data: { articles },
} = await axios.get('/api/data/articles?timeout=3000');

document.querySelector('#data').innerHTML = articles[0].content;

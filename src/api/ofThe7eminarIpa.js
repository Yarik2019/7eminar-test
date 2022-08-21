import axios from "axios";

export default axios.create({
    baseURL: 'https://storage.7eminar.ua/',
    timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
});

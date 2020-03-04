import axios from 'axios';

export default ({ app }, inject) => {
    const instance = axios.create({
        baseURL:
            process.env.NODE_ENV === 'development'
                ? process.env.DEV_API_PATH
                : process.env.PROD_API_PATH, // TODO
        timeout: 12000,
        headers: {
            common: {
                Accept: 'application/json, text/plain, */*'
            }
        }
    });

    instance.interceptors.request.use(
        config => {
            return config;
        },
        error => {
            return Promise.reject(error);
        }
    );

    instance.interceptors.response.use(
        response => {
            return response;
        },
        error => {
            return Promise.reject(error);
        }
    );

    inject('getFirstTodo', async params => {
        const result = await instance.get('/todos/1', { params });
        return result;
    });
};

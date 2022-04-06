// request.js
import axios from 'axios'
import { Message } from 'element-ui';
import config from '@/config'
import store from "@/store/store"
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : process.env.VUE_APP_URLENV === 'test' ? config.baseUrl.test : config.baseUrl.pro

// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; //设置post请求时的header信息\\

let getToken = () => {
    if (store.state.qftoken.token == '') {
        return store.state.qftoken.token;
    }
    return store.state.qftoken.token
}

const service = axios.create({
    headers: {
        'Content-Type': 'application/json',
    },
    baseURL: baseUrl,
    timeout: 10000,
    withCredentials: true
});
service.interceptors.request.use(
    config => {
        config.headers["token"] = getToken()
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

service.interceptors.response.use(
    response => {
        if (response.data && response.data.code == 200) {
            return response.data;
        } else {
            Message.error({
                center: true,
                message: response.data.msg
            });
            return response.data;
        }
    },
    error => {
        Message.error({
            center: true,
            message: '网络错误！'
        });
        return Promise.reject(error);
    }
);
export {
    service as axios
}
import {axios} from '@/utils/request'

//登录
export function passlogin(data) {
    return axios({
        url: '/api/login/passlogin',
        method: 'post',
        data
    })
}
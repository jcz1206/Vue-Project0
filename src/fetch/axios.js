import Vue from 'vue'
import axios from 'axios'

import VueAxios from 'vue-axios'
import qs from 'qs'
import Promise from 'es6-promise'

//axios配置
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

Vue.use(VueAxios, axios)


//post传参序列化
axios.interceptors.request.use((config) => {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    // config.headers['Accept'] = 'application/json';
    // if (config.method == 'post') {
    //     config.data = qs.stringify(config.data)
    // }
    // alert(config);
    return config;
}, (error) => {
    alert("request错误参数");
    // _.toast("错误参数", 'fail');
    return Promise.reject(error);
});


//返回状态判断
axios.interceptors.response.use((res) => {
    // if (!res.data.success) {
    //     alert("200：response错了");
    //     // _.toast(res.data.msg);
    //     return Promise.reject(res);
    // }
    return res;
}, (error) => {
    alert("response错误参数");
    // _.toast("网络异常", 'fail');
    return Promise.reject(error);
});

Vue.prototype.axi = {
    post: function(url, params) {
        let paramss = qs.stringify(params);
        return new Promise((resolve, reject) => {
            axios.post(url, paramss)
                .then(response => {
                    resolve(response.data);
                }, err => {
                    reject(err);
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    get: function(url) {
        return new Promise((resolve, reject) => {
            axios.get(url)
                .then(response => {
                    resolve(response.data);
                }, err => {
                    reject(err);
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }
}







// //work with jQuery 2.x  
// jQuery.prototype.serializeObject = function() {
//     var hasOwnProperty = Object.prototype.hasOwnProperty;
//     return this.serializeArray().reduce(function(data, pair) {
//         if (!hasOwnProperty.call(data, pair.name)) {
//             data[pair.name] = pair.value;
//         }
//         return data;
//     }, {});
// };

//扩展jquery方法
jQuery.prototype.serializeObject = function() {
    var a, o, h, i, e;
    a = this.serializeArray();
    o = {};
    h = o.hasOwnProperty;
    for (i = 0; i < a.length; i++) {
        e = a[i];
        if (!h.call(o, e.name)) {
            o[e.name] = e.value;
        }
    }
    return o;
};




/**
 * 并不知道有何用
 * @param {*} url 
 * @param {*} params 
 */
export function fetch(url, params) {
    let paramss = {
        method: 'GET',
        mode: 'cors',
        cache: 'default',
        body: null
    }
    paramss.body = qs.stringify(params);
    return new Promise((resolve, reject) => {
        axios.post(url, paramss)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
            .catch((error) => {
                reject(error)
            })
    })
}


// export default {
//     gett(params) {
//         return fetch('/SFJ_M/product/getChildrenTypes', params)
//     },
//     /**
//      * 用户登录
//      */
//     Login(params) {
//         return fetch('/users/api/userLogin', params)
//     }
// }
import axios from 'axios'
axios.defaults.baseURL="http://123.206.85.192:3000";
// 添加图书
export let addBook = (params) => {
    return axios.post("/add", {...params});
}
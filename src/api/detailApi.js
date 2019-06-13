import axios from 'axios'
axios.defaults.baseURL="http://123.206.85.192:3000";
// 更新图书详情
export let updateBook = (params) => {
    return axios.post("/update", params);
};
// 获取图书详情
export let getBookDetail = (params) => {
    return axios.get("/getOne?id=" + params);
};
import axios from 'axios';
axios.defaults.baseURL="http://123.206.85.192:3000";
//收藏列表页
export let getCollectionBooks = () => {
    return axios.get("/books?page=collect");
};
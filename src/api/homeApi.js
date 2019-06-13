
import axios from 'axios'
axios.defaults.baseURL ='http://123.206.85.192:3000';
//获取轮播图数据
export let getSlides = ()=>{
    return axios.get("/sliders");
};
//获取热门图书信息
export let getHotBooks = () => {
    return axios.get("/hot");
};
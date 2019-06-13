import axios from 'axios'
axios.defaults.baseURL ='http://123.206.85.192:3000';
//获取列表图书数据接口
export let getBooks = ()=>{
    return axios.get("/books");
};

//收藏图书
export let collectBook = (params)=>{
    return axios.post("/collect",params);
};
//删除图书
export let deleteBook = (id)=>{
    return axios.delete("/delete?id=" + id);
};

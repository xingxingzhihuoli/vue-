import {getBooks} from '../api/listApi'

export default {
    state: {
        book: []
    },
    mutations: {
        getbook(state,data){
            state.book = data;
        },
        deletebook(state,id){
            state.book = state.book.filter(item=>{
                return id!==item.bookId
            })
        }
    },
    actions: {
       async getBook({commit}){
           const {data} = await getBooks();
           commit('getbook',data)
       }
    }
}
import {getCollectionBooks} from '../api/collectionApi'

export default {
    state:{
        book:[],
    },
    mutations:{
        getCollection(state,data){
            state.book = data;
        }
    },
    actions:{
        async getCollections({commit}){
            const {data} = await getCollectionBooks();
            commit('getCollection',data)
        }
    }
}
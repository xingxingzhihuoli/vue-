import {getSlides, getHotBooks} from "../api/homeApi";

export default {
    state: {
        slides: [],
        books: []
    },
    mutations: {
        getSlides(state, data) {
            state.slides = data;
        },
        getBooks(state, data) {
            state.books = data
        }
    },
    actions: {
        async getSlide({commit}) {
            const {data} = await getSlides();
            commit('getSlides', data)
        },
        async getBook({commit}) {
            const {data} = await getHotBooks();
            commit('getBooks', data)
        }
    }
}
import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import list from './list'
import collection from './collection'
Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        home,
        list,
        collection
    }
})

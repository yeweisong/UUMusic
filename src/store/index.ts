import { createStore } from 'vuex'

const defaultState = {
    banners: []
}

// Create a new store instance.
export default createStore({
    state() {
        return defaultState
    },
    mutations: {
        setBanners(state: typeof defaultState,payload) {
            state.banners=payload
        }
    },
    actions: {

    },
    getters: {

    }
})

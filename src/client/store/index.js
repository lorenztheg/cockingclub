import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            user: {
                id: null,
                email: '',
            },
        };
    },
    mutations: {
        setUser(state, user) {
            state.user.id = user.id;
            state.user.email = user.email;
        },
    },
    actions: {
        login({ commit }, user) {
            commit('setUser', user);
        },
    },
});

export default store;
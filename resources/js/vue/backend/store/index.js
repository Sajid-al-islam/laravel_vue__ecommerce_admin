import Vue from 'vue';
import Vuex from 'vuex';
// import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

import auth_modules from './modules/auth_modules';
import product_modules from './modules/product_modules';
import category_modules from './modules/category_modules';
import user_modules from './modules/user_modules';
import user_role_modules from './modules/user_role_modules';
import user_contact_message_modules from './modules/user_contact_message_modules';

const store = new Vuex.Store({
    modules: {
        auth_modules,
        user_modules,
        user_role_modules,
        user_contact_message_modules,
        product_modules,
        category_modules,
    },
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    // plugins: [createPersistedState()],
});

export default store;

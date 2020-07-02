import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';


Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        products: [],
        cart: []
    },
    mutations: {
        SET_PRODUCTS_STATE: (state, products)=>{
            state.products = products;
        }
    },
    actions: {
        GET_PRODUCTS_API({commit})
        {
            return axios("http://localhost:3000/products",{
                method: "GET"
            })
                .then((response)=>{
                    commit("SET_PRODUCTS_STATE", response.data);
                    return response.data;
                })
                .catch((error)=>{
                    console.log(error);
                    return error;
                })
        }
    },
    getters: {
        GET_PRODUCTS_STATE(state)
        {
            return state.products;
        },
        GET_CART_STATE(state)
        {
            return state.cart;
        }
    },

});

export default store;
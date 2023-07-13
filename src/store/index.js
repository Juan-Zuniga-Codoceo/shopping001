import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories:[],
    cart:[]
  },
  getters: {
  },
  mutations: {
    SET_CATEGORIES(state,categories){
      state.categories=categories
    },
    ADD_PRODUCT_TO_CART(state,product){
      //validar si el producto ya existe
        let exist = state.cart.some(p=>p.id==product.id)
        if(exist==false){
          state.cart.push(product)
        }
        else{
          state.cart.forEach(p=>{
            if(p.id==product.id){
              p.count+=1;
            }
          })
        }
      //si no existe lo agrego
      
      //si no tengo que buscarlo y sumarle uno a la cantidad
    }
  },
  actions: {
    async fetchCategories({commit}){
      try{
        let response = await fetch('https://fakestoreapi.com/products/categories')
        let categories = await response.json()
        commit('SET_CATEGORIES',categories)
      }
      catch(error){
        console.log(error)
      }
    },
    addProductCart({commit},product){
      commit('ADD_PRODUCT_TO_CART',product)
    }
  },
  modules: {
  }
})

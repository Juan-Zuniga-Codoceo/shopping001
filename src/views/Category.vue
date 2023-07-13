<template>
    <v-container>
        <h1> Categoria {{id}} </h1>
        <v-row v-if="loading">
            <load-comp></load-comp>
        </v-row>
        <v-row v-else>
        
           <v-col class="pa-5" md="3" v-for="product in products" :key="product.id">
            <card-category :product="product"></card-category>
           </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Loading from '@/components/Loading.vue'
import CardCategory from '@/components/CardProduct.vue'
export default {
    name: 'Category-view',
    props: {
        id:{
            type:String,
            required:true,
        }
    },
    data: function(){
        return {
            products:[],
            loading:false
        }
    },
    // computed: {},
    methods: {
        async fetchProducts(){
            try{
                this.loading=true
                let response = await fetch(`https://fakestoreapi.com/products/category/${this.id}`)
                let json = await response.json()
                //console.log(json)
                this.products = json
                this.loading=false
            }
            catch(error){
                console.log(error)
            }
        }
    },
    //watch: {},
    components: {
        'load-comp':Loading,
        'card-category': CardCategory
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods 
    created(){
        this.fetchProducts();
    }
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>
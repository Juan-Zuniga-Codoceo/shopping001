<template>
    <v-container>
        <h1 class="text-center mb-2 green--text ">Categorias</h1>
        <v-divider></v-divider>
        <v-row class="mt-5">
            <v-col cols="12" sm="6" md="3" v-for="category in categories" :key="category">
                <v-card class="pa-2">
                    <h2 class="text-center">{{category}}</h2>
                    <a @click.prevent="redirectTo(category)">
                        <div class="d-flex justify-center pa-5">
                            <v-icon size="150" color="light-green">{{categoryIcon(category)}}</v-icon>
                        </div>
                    </a>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import {mapState} from 'vuex'

export default {
    name: 'categories-view',
    // props: {},
    data: function(){
        return {}
    },
    computed: {
        ...mapState(['categories'])
    },
    methods: {
        categoryIcon(category){
            const categoryIcons={
                "electronics": 'mdi-laptop',
                "jewelery": 'mdi-diamond-stone',
                "men's clothing": 'mdi-face-man',
                "women's clothing": 'mdi-face-woman'
            }

      return categoryIcons[category] || '';
        },
        redirectTo(category){
            this.$router.push(`/category/${category}`)
        }
    }
    //watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>
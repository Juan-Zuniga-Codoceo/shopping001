<template>
  <div>
    <v-app-bar
      color="green"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title class="font-weight-bold">Shopping</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item v-for="route in routes" :key="route.name" @click="redirectTo(route.name)" :disabled="currentRoute==route.name">
            <v-list-item-icon>
              <v-icon>{{route.icon}} </v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{route.title}} </v-list-item-title>
          </v-list-item>

         <!-- <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>-->
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
</div>
</template>

<script>
export default {
    name: 'nav-bar',
    // props: {}, 
    data: function(){
        return {
            drawer: false,
            group: null,
            routes: [
                {
                    icon:'mdi-home',
                    title:"Inicio",
                    name:'Home'
                },
                {
                    icon:'mdi-format-list-bulleted',
                    title:"Categorias",
                    name:'Categories'
                },
                 {
                    icon:'mdi-account',
                    title:"Acerca",
                    name:'About'
                },
            ]
        }
    },
    computed: {
        currentRoute(){
            return this.$route.name
        }
    },
    methods: {
        redirectTo(nameRoute){
            this.$router.push({name:nameRoute})
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
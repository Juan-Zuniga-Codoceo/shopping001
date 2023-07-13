<template>
  <v-app>
    <nav-bar></nav-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import {mapActions} from 'vuex'
export default {
  name: 'App',

  data: () => ({
    //
  }),
  components:{
    'nav-bar': NavBar,
  },
  methods:{
    ...mapActions(['fetchCategories'])
  },
  created(){
    this.fetchCategories()
  }
};
</script>

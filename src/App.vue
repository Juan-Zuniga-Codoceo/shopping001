<template>
  <v-app>
    <nav-bar></nav-bar>
    <v-main>
      <router-view/>
    </v-main>
    <my-footer></my-footer>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import {mapActions} from 'vuex'
export default {
  name: 'App',

  data: () => ({
    //
  }),
  components:{
    'nav-bar': NavBar,
    'my-footer': Footer
  },
  methods:{
    ...mapActions(['fetchCategories'])
  },
  created(){
    this.fetchCategories()
  }
};
</script>

<template>
  <v-container>
    <v-row justify="center" align="center" class="progress">
      <v-progress-circular
        :size="70"
        :width="7"
        color="success"
        indeterminate
      ></v-progress-circular>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "loading-component",
  // props: {},
  data: function () {
    return {};
  },
  // computed: {},
  //methods: {}
  //watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>

<style scoped>
.progress {
    height: 60vh;
}
</style>

<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>CAMPAIGN URL </span> 
        <span class="font-weight-light">BUILDER</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!--v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn-->
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      //
    }
  }
}
</script>

<style lang='scss'>
  .form-inline-button {
    width: 101%;
    height: 55px;
    margin: 0;
    margin-left: -3px;
    padding: 0;
    min-width: auto!important;
  }
</style>
<template>
  <v-app>

    <v-navigation-drawer 
    app 
    clipped
    >
    </v-navigation-drawer>

    <v-toolbar
    app
    fixed
    clipped-left
    height=94
    >
      <v-toolbar-title class="subheading text-uppercase">
        <span class="font-weight-bold">CAMPAIGN URL </span>
        <span class="font-weight-light">BUILDER</span>
      </v-toolbar-title>

    </v-toolbar>

    <v-content id="main-content">
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

  #main-content {
    background-color: #f5f5f9;
  }
  .back-white {
    background-color: white;
  }
  .form-box {
    //outline: 1px solid blue;
    max-width: 940px;
    margin-left: auto;
    margin-right: auto;
    padding: 22px;
  }
</style>
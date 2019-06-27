<template>
  
  <v-layout row wrap
  :class="{ 'qr-code': true, 'img-ldd': imageLoaded}">
    <v-flex xs12>
      <h2 class="headline font-weight-bold">
        QR Code Image
      </h2>
    </v-flex>
    <v-flex xs12 > 
      <v-layout row wrap>
        
        <v-flex shrink >
          <img 
            @load="imageLoaded=true"
            :src="imageURL">
          <span class="pch"></span>
        </v-flex>
        
        <v-flex grow>
          <v-text-field
          v-model="imageURL"
          single-line
          outline
          readonly
          ref="imageURLField" 
          :success-messages="successMsg"        
          ></v-text-field>
          
          <v-btn          
            class="form-inline-button"
            large
            color="info"
            v-on:click='copyURL'>
            COPY
          </v-btn>
          
        </v-flex>
      </v-layout>
    </v-flex>
    
  </v-layout>
  
  
</template>

<style lang='scss'>
.qr-code {
  overflow: hidden;
  max-height: 0;
  transition: max-height 1s;
  $w: 140px;
  $h: 140px;
  img {
    display: none;
    width: $w;
    height: $h;
  }
  .pch {
    display: inline-block;
    width: $w;
    height: $h;
  }
}
.qr-code.img-ldd {
  max-height: 500px;
  img {
    display: inline-block;
  }
  .pch {
    display: none;
  }
}
</style>

<script>
export default {
  props: [
    'URLShortener'
  ],
  computed: {
    shortenedURL: function(){
      return (!!this.URLShortener) ? this.URLShortener.shortenedURL : "";
    },
    imageURL: function(){
      this.imageLoaded = false;
      return (!!this.shortenedURL) ? this.shortenedURL + "/qr-code" : "//:0";
    }
  },
  data: () => ({
    imageLoaded: false,
    successMsg: "",
  }),
  methods: {
    copyURL: function() {
      this.$refs.imageURLField.$el.getElementsByTagName('input')[0].select();
      window.document.execCommand("copy");
      // if (this.shortenedURL && this.shortenedURL.length > 0) {
        this.successMsg = "Copied"
        this.messagTimeoutedOff('successMsg');
      // }
    },
    messagTimeoutedOff(field){
      let _this = this
      setTimeout(()=>{
        _this[field] = ""
      },2000)
    }
  }
}
</script>
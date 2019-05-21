<template><div>

  {{/* Shorten URL */}}
  <v-layout row wrap>
    <v-flex xs12>
      <h2 class="headline font-weight-bold">
        Shorten URL
      </h2>
    </v-flex>
    <v-flex xs12>
      <v-layout row wrap>
        {{/* Result */}}
        <v-flex xs10>
          <v-text-field
          v-model="shortenedURL"
          placeholder="You will see the shortened URL for camain..."
          single-line
          outline
          readonly
          :success-messages="shortenedURLSucessMesage"
          :error-messages="shortenedURLErrorMesage"
          ref="shortenedURL"
          ></v-text-field>
        </v-flex>
        {{/* Generate Button */}}
        <v-flex xs2>
          <v-btn
          v-if="shortenedURL"
          class="form-inline-button"
          large
          color="info"
          v-on:click='copyShortenedURL'>
            Copy
          </v-btn>
          <v-btn
          v-else
          class="form-inline-button"
          large
          color="info"
          v-on:click='generateShortenedURL'>
            Generate
          </v-btn>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>

</div></template>

<script>



export default {
  props: [
    'form',
    'url'
  ],
  data: () => ({
    shortenedURLSucessMesage: "",
    shortenedURLErrorMesage: "",
    shortenedURL: "",
  }),
  methods: {
    generateShortenedURL(){
      let _this = this;
      if( !_this.form.validate() ) {
        _this.shortenedURLErrorMesage = "Please fill form properly"
        _this.messagTimeoutedOff('shortenedURLErrorMesage');
        return;
      }
      _this.endpoints_postShorten(_this.url)
        .then((response)=> {
          _this.shortenedURL = response.data.shortUrl
        })
        .catch(function (error) {
          _this.shortenedURLErrorMesage = `Shortener server error`
          _this.messagTimeoutedOff('shortenedURLErrorMesage');
        })
    },
    copyShortenedURL(){
      this.$refs.shortenedURL.$el.getElementsByTagName('input')[0].select();
      window.document.execCommand("copy");
      if (this.shortenedURL && this.shortenedURL.length > 0) {
        this.shortenedURLSucessMesage = "Copied"
        this.messagTimeoutedOff('shortenedURLSucessMesage');
      }
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
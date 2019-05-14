<template>
  
  <div>
    
    <v-container>   
      
      <v-layout row wrap>
        
        <v-flex xs12>
          <h1 class="">
            Campaign URL Builder
          </h1>
        </v-flex>
        
        <v-flex xs12>
          <h2 class="">
            Destination URL
          </h2>
        </v-flex>
        
        <v-flex xs3>
          <v-select
          v-model="protocol"
          :items="protocols"          
          solo
          ></v-select>
        </v-flex>
        
        <v-flex xs9>
          <v-text-field
          v-model="url"
          label="Type URL here"
          solo
          ></v-text-field>
        </v-flex>
        
        <v-flex xs12>
          <h2 class="">
            Traffic source
          </h2>
        </v-flex>        
        
        <v-radio-group v-model="traficSource" row>
          <v-radio
          v-for="source in traficSources"
          :key="source.label"
          :label="source.label"
          :value="source.component"
          ></v-radio>
        </v-radio-group>
        
      </v-layout>
      
    </v-container>
    
    <component v-bind:is='traficSource' ref="traficSrcRef"> </component>
    
    <v-container>
      
      <v-layout row wrap>
        
        <v-flex xs12>
          <h2 class="">
            Result
          </h2>
          <v-layout row wrap>            
            
            <v-flex xs10>
              <v-text-field
              v-model="urlResult"
              label="You will see the generate URL with UTM here..."
              solo
              readonly
              :success-messages="urlResultSucessMesage"
              ref="generatedURL"
              ></v-text-field>
            </v-flex>
            
            <v-flex xs2>
              <v-btn 
              class="form-inline-button" 
              large
              v-on:click='copyURL'>
              Copy
            </v-btn>
          </v-flex>           
          
        </v-layout>
      </v-flex>
      
    </v-layout>
    
  </v-container>
  
</div>

</template>

<script>

import Custom from './UrlBuilder/SrcCustom';
import Google from './UrlBuilder/SrcGoogle';
import Facebook from './UrlBuilder/SrcFacebook';
import Instagram from './UrlBuilder/SrcInstagram';

export default {
  
  components: {
    Custom,
    Google,
    Facebook,
    Instagram
  },
  
  data: () => ({
    protocols: [
      'http://', 
      'https://'
    ],
    protocol: "https://",
    url: "",
    traficSources: [
      {label:'Your values', component:'Custom'},
      {label:'Google Adwords', component:'Google'},
      {label:'Facebook', component:'Facebook'},
      {label:'Instagram', component:'Instagram'},       
    ],
    traficSource: "Custom",
    randomTriggerUrlResult: 0,
    urlResultSucessMesage: ""
  }),
  computed: {
    urlResult: function(){
      let x = this.randomTriggerUrlResult; // just for triggering watch
      let queryArr = [];
      let refObj = this.$refs.traficSrcRef || {};
      let queryObj = refObj.$data || {};
      Object.keys(queryObj).forEach((key)=>{
        if (queryObj[key] && queryObj[key] != "") {
          queryArr.push(`${key}=${queryObj[key]}`)
        }
      })
      let query = (queryArr.length > 0) ? '?'+queryArr.join('&') : "";
      let site = (this.url != "") ? `${this.protocol}${this.url}` : "";  
      return `${site}${query}`;
    }
  },
  methods: {
    copyURL(){
      //console.log(this.$refs.generatedURL.$el.getElementsByTagName('input')[0]);
      this.$refs.generatedURL.$el.getElementsByTagName('input')[0].select();
      window.document.execCommand("copy");
      if (this.urlResult && this.urlResult.length > 0) {
        this.urlResultSucessMesage = "Copied"
        setTimeout(()=>{
          this.urlResultSucessMesage = ""
        },2000)
      }
    }
  }
}
</script>


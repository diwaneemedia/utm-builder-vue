<template>
  
  <v-form ref='form'>
  
    <v-container grid-list-md>          
      
      <!-- URL -->
      <v-layout row wrap >        
        <v-flex xs12>
          <h2 class="">
            Destination URL
          </h2>
        </v-flex>        
        <v-flex xs3>
          <v-select
          v-model="protocol"
          label="protocol"
          :items="protocols"
          single-line
          outline
          ></v-select>
        </v-flex>        
        <v-flex xs9>
          <v-text-field
          v-model="url"
          label="URL"
          placeholder="Ender your domain here"
          :rules="validations.domain"
          single-line
          outline
          ></v-text-field>
        </v-flex>       
      </v-layout>      
      
    </v-container>
    
    <v-container>
      
      <!-- Required parameters -->      
      <v-layout row wrap>          
        <v-flex xs12>
          <h2 class="">
            Required parameters
          </h2>
        </v-flex>
        <!-- utm_source -->         
        <v-flex xs12>          
          <v-combobox
          v-model="utm.utm_source"
          label="Campaign source (utm_source)"
          placeholder="google, facebook, instagram"
          :rules="validations.smallMinusRequired"
          :items="traficSourcesKeys" 
          outline >            
            <template v-slot:append>
              <HelpDialog title='Required parameters'>
                <HelpTextUtmSource />
              </HelpDialog>
            </template>           
          </v-combobox>                        
        </v-flex>        
        <!-- utm_medium -->
        <v-flex xs12>
          <v-combobox
          v-model="utm.utm_medium"
          label="Campaign medium (utm_medium)"
          placeholder="cpc, email, banner, article"
          :rules="validations.smallMinusRequired"
          :items="traficSourceValues"
          outline>
            <template  v-slot:append>
              <HelpDialog title='Required parameters'>
                <HelpTextUtmMedium/>
              </HelpDialog>
            </template>  
          </v-combobox>
        </v-flex>
        <!-- utm_campaign -->
        <v-flex xs12>
          <v-text-field
          v-model="utm.utm_campaign"
          label="Campaign name (utm_campaign)"
          placeholder="promo, discount, sale"
          :rules="validations.letterNumberMinusUnderscoreRequired"
          outline>
            <template  v-slot:append>
              <HelpDialog title='Required parameters'>
                <HelpTextUtmCampaign/>
              </HelpDialog>
            </template>  
          </v-text-field>            
        </v-flex>  
      </v-layout>

      <!-- Optional parameters -->        
      <v-layout row wrap>        
        <v-flex xs12>
          <h2 class="">
            Optional parameters
          </h2>
        </v-flex>
        <!-- utm_term -->
        <v-flex xs12>
          <v-text-field
          v-model="utm.utm_term"
          label="Campaign term (utm_term)"
          placeholder="link, landing page"
          :rules="validations.optional"
          outline>
            <template  v-slot:append>
              <HelpDialog title='Required parameters'>
                <HelpTextUtmTerm/>
              </HelpDialog>
            </template>  
          </v-text-field>
        </v-flex>
        <!-- utm_content -->
        <v-flex xs12>
          <v-text-field
          v-model="utm.utm_content"
          label="Campaign content (utm_content)"
          placeholder="free, -30%, registration"
          :rules="validations.optional"
          outline>
            <template  v-slot:append>
              <HelpDialog title='Required parameters'>
                <HelpTextUtmContent/>
              </HelpDialog>
            </template>  
          </v-text-field>      
        </v-flex>
      </v-layout>

      <!-- Result & Copy -->   
      <v-layout row wrap>  
        <v-flex xs12>
          <h2 class="">
            Result
          </h2>
          <v-layout row wrap>            
            <!-- Result -->   
            <v-flex xs10>
              <v-text-field
              v-model="urlResult"
              placeholder="You will see the generate URL with UTM here..."
              single-line
              outline
              readonly
              :success-messages="urlResultSucessMesage"
              ref="generatedURL"
              ></v-text-field>
            </v-flex>
            <!-- Copy Button -->   
            <v-flex xs2>
              <v-btn 
              class="form-inline-button" 
              large
              color="info"
              v-on:click='copyURL'>
                Copy
              </v-btn>
            </v-flex>    
          </v-layout>
        </v-flex>
      </v-layout>

      <!-- Shorten URL -->   
      <v-layout row wrap>  
        <v-flex xs12>
          <h2 class="">
            Shorten URL
          </h2>
          <v-layout row wrap>            
            <!-- Result -->   
            <v-flex xs10>
              <v-text-field
              v-model="shortenedURL"
              placeholder="You will see the shortened URL for camain..."
              single-line
              outline
              readonly
              :success-messages="shortenedURLSucessMesage"
              ref="shortenedURL"
              ></v-text-field>
            </v-flex>
            <!-- Generate Button -->   
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

    </v-container>
    
  </v-form>

</template>

<script>

import HelpDialog from './UrlBuilder/HelpDialog'
import HelpTextUtmSource from './UrlBuilder/HelpTextUtmSource'
import HelpTextUtmMedium from './UrlBuilder/HelpTextUtmMedium'
import HelpTextUtmCampaign from './UrlBuilder/HelpTextUtmCampaign'
import HelpTextUtmTerm from './UrlBuilder/HelpTextUtmTerm'
import HelpTextUtmContent from './UrlBuilder/HelpTextUtmContent'

export default {  
  components: {
    HelpDialog,
    HelpTextUtmSource,
    HelpTextUtmMedium,
    HelpTextUtmCampaign,
    HelpTextUtmTerm,
    HelpTextUtmContent
  },  
  data: () => ({
    protocols: [
      'http://', 
      'https://'
    ],
    protocol: "https://",
    url: "",
    utm: {
      utm_source: "",
      utm_medium: "",
      utm_campaign: "",
      utm_content: "",
      utm_term: "",
    },
    traficSources: {
      'google':['cpc','organic'],
      'facebook':['cpc','banner'],
      'instagram':[],       
    },
    traficSource: "",
    urlResultSucessMesage: "",
    shortenedURLSucessMesage: "",
    shortenedURL: "",
    validations: {
      domain: [
        v => !!v || "This field is required",
        //v => /^[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(v) || "Not a valid domain format "
      ],
      smallMinusRequired: [    
        v => !!v || "This field is required",    
        v => /^[a-z\-]+$/.test(v) || "You can use only small setters and `-` characters"
      ],
      letterNumberMinusUnderscoreRequired: [
        v => !!v || "This field is required",    
        v => /^[a-zA-Z0-9\-\_]+$/.test(v) || "You can use only letters, numbers and `-` characters"
      ],
      optional: [ 
        v => /^[a-zA-Z0-9\-\_\+\%]*$/.test(v) || "You can use only letters, numbers and `-` characters"
      ],   
    }
  }),
  computed: {
    traficSourcesKeys: function(){
      return Object.keys(this.traficSources);
    },
    traficSourceValues: function(){
      return this.traficSources[this.utm.utm_source] || [];
    },
    urlResult: function(){
      this.shortenedURL = "";
      let queryObj = this.utm || {};
      let queryArr = [];
      Object.keys(queryObj).forEach((key)=>{
        if (queryObj[key] && queryObj[key] != "" && (key.indexOf('utm_')===0)) {
          queryArr.push(`${key}=${queryObj[key]}`)
        }
      })
      let query = (queryArr.length > 0) ? '?'+queryArr.join('&') : "";
      let site = (this.url != "") ? `${this.protocol}${this.url}` : "";  
      return `${site}${query}`;
    }
  },
  watch: {
    url: function(url){
      if (url.indexOf('http://')===0) {
        this.protocol = 'http://';
        setTimeout(()=>{
          this.url = url.slice(7)
        },0)
      }
      else if (url.indexOf('https://')===0) {
        this.protocol = 'https://';
        setTimeout(()=>{
          this.url = url.slice(8)
        },0)
      }
    }
    
  },
  methods: {
    generateShortenedURL(){
      if( !this.$refs.form.validate() ) {
        return;
      }  
      this.endpoints_postShorten(this.urlResult)
        .then((response)=> {
          this.shortenedURL = response.data.shortUrl
        });
    },
    copyURL(){
      if( !this.$refs.form.validate() ) {
        return;
      }      
      this.$refs.generatedURL.$el.getElementsByTagName('input')[0].select();
      window.document.execCommand("copy");
      if (this.urlResult && this.urlResult.length > 0) {
        this.urlResultSucessMesage = "Copied"
        setTimeout(()=>{
          this.urlResultSucessMesage = ""
        },2000)
      }
    },
    copyShortenedURL(){
      this.$refs.shortenedURL.$el.getElementsByTagName('input')[0].select();
      window.document.execCommand("copy");
      if (this.shortenedURL && this.shortenedURL.length > 0) {
        this.shortenedURLSucessMesage = "Copied"
        setTimeout(()=>{
          this.shortenedURLSucessMesage = ""
        },2000)
      }
    }
  }
}
</script>

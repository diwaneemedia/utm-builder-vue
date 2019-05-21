<template>

  <v-form ref='form'>

    <div class="mw-900 form-box mt-5">
      <v-container class="back-white" grid-list-lg px-5 py-4>

        {{/* URL */}}
        <v-layout row wrap >
          <v-flex xs12>
            <h2 class="headline font-weight-bold">
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

        {{/* Required parameters */}}
        <v-layout row wrap>
          <v-flex xs12>
            <h2 class="headline font-weight-bold">
              Required parameters
            </h2>
          </v-flex>
          {{/* utm_source */}}
          <v-flex xs12 pb-0>
            <label>Campaign source (utm_source)</label>
            <v-combobox mb-0
            v-model="utm.utm_source"
            placeholder="google, facebook, instagram"
            :rules="validations.smallMinusRequired"
            :items="traficSourcesKeys"
            single-line
            outline >                
              <HelpTextUtmSource slot='append'/>
            </v-combobox>
          </v-flex>
          {{/* utm_medium */}}
          <v-flex xs12 pb-0 pt-0>
            <label>Campaign medium (utm_medium)</label>
            <v-combobox
            v-model="utm.utm_medium"
            placeholder="cpc, email, banner, article"
            :rules="validations.smallMinusRequired"
            :items="traficSourceValues"
            single-line
            outline>
              <HelpTextUtmMedium slot='append'/>
            </v-combobox>
          </v-flex>
          {{/* utm_campaign */}}
          <v-flex xs12  pb-0 pt-0>
            <label>Campaign name (utm_campaign)</label>
            <v-text-field
            v-model="utm.utm_campaign"
            placeholder="promo, discount, sale"
            :rules="validations.letterNumberMinusUnderscoreRequired"
            single-line
            outline>
              <HelpTextUtmCampaign slot='append'/>
            </v-text-field>
          </v-flex>
        </v-layout>

        {{/* Optional parameters */}}
        <v-layout row wrap>
          <v-flex xs12>
            <h2 class="headline font-weight-bold">
              Optional parameters
            </h2>
          </v-flex>
          {{/* utm_term */}}
          <v-flex xs12  pb-0>
            <label>Campaign term (utm_term)</label>
            <v-text-field
            v-model="utm.utm_term"
            placeholder="link, landing page"
            :rules="validations.optional"
            single-line
            outline>
              <HelpTextUtmTerm slot='append'/>
            </v-text-field>
          </v-flex>
          {{/* utm_content */}}
          <v-flex xs12  pb-0 pt-0>
            <label>Campaign content (utm_content)</label>
            <v-text-field
            v-model="utm.utm_content"
            placeholder="free, -30%, registration"
            :rules="validations.optional"
            single-line
            outline>
              <HelpTextUtmContent slot='append'/>
            </v-text-field>
          </v-flex>
        </v-layout>

      </v-container>
    </div>



    <div class="form-box mt-4 mb-5">
      <v-container class="back-white" grid-list-lg px-5 py-4>

        {{/* Result & Copy */}}
        <v-layout row wrap>
          <v-flex xs12>
            <h2 class="headline font-weight-bold">
              Result
            </h2>
          </v-flex>
          <v-flex xs12>
            <v-layout row wrap>
              {{/* Result */}}
              <v-flex xs10>
                <v-text-field
                v-model="urlResult"
                placeholder="You will see the generate URL with UTM here..."
                single-line
                outline
                readonly
                :success-messages="urlResultSucessMesage"
                :error-messages="urlResultErrorMesage"
                ref="generatedURL"
                ></v-text-field>
              </v-flex>
              {{/* Copy Button */}}
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

        <!--URLShortener 
        :form="$refs.form" 
        :url="urlResult" /-->

      </v-container>

    </div>



  </v-form>

</template>

<script>

import HelpDialog from './UrlBuilder/HelpDialog'
import HelpTextUtmSource from './UrlBuilder/HelpTextUtmSource'
import HelpTextUtmMedium from './UrlBuilder/HelpTextUtmMedium'
import HelpTextUtmCampaign from './UrlBuilder/HelpTextUtmCampaign'
import HelpTextUtmTerm from './UrlBuilder/HelpTextUtmTerm'
import HelpTextUtmContent from './UrlBuilder/HelpTextUtmContent'
//import URLShortener from './UrlBuilder/URLShortener'
import validations from './UrlBuilder/validations'

export default {
  components: {
    HelpDialog,
    HelpTextUtmSource,
    HelpTextUtmMedium,
    HelpTextUtmCampaign,
    HelpTextUtmTerm,
    HelpTextUtmContent,
    //URLShortener
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
    urlResultErrorMesage: "",
    validations: validations
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
      let connective = (this.url.indexOf('?')>-1) ? "&" : "?"
      let query = (queryArr.length > 0) ? connective+queryArr.join('&') : "";
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
    copyURL(){
      if( !this.$refs.form.validate() ) {
        this.urlResultErrorMesage = "Please fill form properly"
        this.messagTimeoutedOff('urlResultErrorMesage');
        return;
      }
      this.$refs.generatedURL.$el.getElementsByTagName('input')[0].select();
      window.document.execCommand("copy");
      if (this.urlResult && this.urlResult.length > 0) {
        this.urlResultSucessMesage = "Copied"
        this.messagTimeoutedOff('urlResultSucessMesage');
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

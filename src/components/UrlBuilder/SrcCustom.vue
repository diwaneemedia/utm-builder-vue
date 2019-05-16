<template>
  
  <v-container grid-list-md>
    
    <v-layout row wrap>
      
      <v-flex xs12 sm6>
        
        <v-layout row wrap>
          
          <v-flex xs12>
            <h2 class="">
              Required parameters
            </h2>
          </v-flex>
          
          <v-flex xs12>
            <div>Campaign source (utm_source)</div>
            <v-text-field
            v-model="utm_source"
            label="googel, facebook, instagram"
            solo
            >            
              <template  v-slot:append>
                <HelpDialog title='Required parameters'>
                  <HelpTextUtmSource/>
                </HelpDialog>
              </template>           
            </v-text-field>                        
          </v-flex>
          
          <v-flex xs12>
            <div>Campaign medium (utm_medium)</div>
            <v-text-field
            v-model="utm_medium"
            label="cpc, email, banner, article"
            solo
            >
              <template  v-slot:append>
                <HelpDialog title='Required parameters'>
                  <HelpTextUtmMedium/>
                </HelpDialog>
              </template>  
            </v-text-field>
          </v-flex>
          
          <v-flex xs12>
            <div>Campaign name (utm_campaign)</div>
            <v-text-field
            v-model="utm_campaign"
            label="promo, discount, sale"
            solo
            >
            <template  v-slot:append>
              <HelpDialog title='Required parameters'>
                <HelpTextUtmCampaign/>
              </HelpDialog>
            </template>  
            </v-text-field>            
          </v-flex>
          
        </v-layout>
        
      </v-flex> 
      
      <v-flex xs12 sm6>
        
        <v-layout row wrap>
          
          <v-flex xs12>
            <h2 class="">
              Optional parameters
            </h2>
          </v-flex>
          
          <v-flex xs12>
            <div>Campaign term (utm_term)</div>
            <v-text-field
            v-model="utm_term"
            label="link, landing page"
            solo
            >
              <template  v-slot:append>
                <HelpDialog title='Required parameters'>
                  <HelpTextUtmTerm/>
                </HelpDialog>
              </template>  
            </v-text-field>
          </v-flex>
          
          <v-flex xs12>
            <div>Campaign content (utm_content)</div>
            <v-text-field
            v-model="utm_content"
            label="free, -30%, registration"
            solo
            >
              <template  v-slot:append>
                <HelpDialog title='Required parameters'>
                  <HelpTextUtmContent/>
                </HelpDialog>
              </template>  
            </v-text-field>
            
          </v-flex>
          
        </v-layout>
        
      </v-flex>     
      
    </v-layout>
    
  </v-container>
  
</template>

<script>

import HelpDialog from './HelpDialog'
import HelpTextUtmSource from './HelpTextUtmSource'
import HelpTextUtmMedium from './HelpTextUtmMedium'
import HelpTextUtmCampaign from './HelpTextUtmCampaign'
import HelpTextUtmTerm from './HelpTextUtmTerm'
import HelpTextUtmContent from './HelpTextUtmContent'


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
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_content: "",
    utm_term: "",
  }),
  mounted: function(){
    this.$parent.randomTriggerUrlResult = Math.floor((Math.random() * 10000) + 1);;
  },  
}

</script>

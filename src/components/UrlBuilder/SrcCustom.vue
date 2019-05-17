<template>
  
  <v-container grid-list-md>
    
    <v-layout row wrap>
      
      <v-flex xs12>
        
        <v-layout row wrap>
          
          <v-flex xs12>
            <h2 class="">
              Required parameters
            </h2>
          </v-flex>
          
          <v-flex xs12>
            <v-text-field
            v-model="utm_source"
            label="Campaign source (utm_source)"
            placeholder="google, facebook, instagram"
            :rules="validations.smallMinusRequired"
            outline
            >            
              <template  v-slot:append>
                <HelpDialog title='Required parameters'>
                  <HelpTextUtmSource/>
                </HelpDialog>
              </template>           
            </v-text-field>                        
          </v-flex>
          
          <v-flex xs12>
            <v-combobox
            v-model="utm_medium"
            label="Campaign medium (utm_medium)"
            placeholder="cpc, email, banner, article"
            :rules="validations.smallMinusRequired"
            :items="utmMediumItems"
            outline
            >
              <template  v-slot:append>
                <HelpDialog title='Required parameters'>
                  <HelpTextUtmMedium/>
                </HelpDialog>
              </template>  
            </v-combobox>
          </v-flex>
          
          <v-flex xs12>
            <v-text-field
            v-model="utm_campaign"
            label="Campaign name (utm_campaign)"
            placeholder="promo, discount, sale"
            :rules="validations.letterNumberMinusUnderscoreRequired"
            outline
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
      
      <v-flex xs12>
        
        <v-layout row wrap>
          
          <v-flex xs12>
            <h2 class="">
              Optional parameters
            </h2>
          </v-flex>
          
          <v-flex xs12>
            <v-text-field
            v-model="utm_term"
            label="Campaign term (utm_term)"
            placeholder="link, landing page"
            :rules="validations.optional"
            outline
            >
              <template  v-slot:append>
                <HelpDialog title='Required parameters'>
                  <HelpTextUtmTerm/>
                </HelpDialog>
              </template>  
            </v-text-field>
          </v-flex>
          
          <v-flex xs12>
            <v-text-field
            v-model="utm_content"
            label="Campaign content (utm_content)"
            placeholder="free, -30%, registration"
            :rules="validations.optional"
            outline
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
    validations: {
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
    },
    utmMediumItems: [
      'cpc',
      'email',
      'banner',
      'article'
    ]
  }),
  mounted: function(){
    this.$parent.$parent.randomTriggerUrlResult = Math.floor((Math.random() * 10000) + 1);
  },  
}

</script>

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
            <div>Campaign source</div>
            <v-text-field
            v-model="utm_source"
            label="googel, facebook, instagram"
            solo
            ></v-text-field>
          </v-flex>
          
          <v-flex xs12>
            <div>Campaign medium</div>
            <v-text-field
            v-model="utm_medium"
            label="cpc, email, banner, article"
            solo
            ></v-text-field>
          </v-flex>
          
          <v-flex xs12>
            <div>Campaign name</div>
            <v-text-field
            v-model="utm_campaign"
            label="promo, discount, sale"
            solo
            ></v-text-field>
            
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
            <div>Campaign term</div>
            <v-text-field
            v-model="utm_content"
            label="link, landing page"
            solo
            ></v-text-field>
          </v-flex>
          
          <v-flex xs12>
            <div>Campaign content</div>
            <v-text-field
            v-model="utm_term"
            label="free, -30%, registration"
            solo
            ></v-text-field>
            
          </v-flex>
          
        </v-layout>
        
      </v-flex>     
      
    </v-layout>
    
  </v-container>
  
</template>

<script>

export default {
  data: () => ({
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_content: "",
    utm_term: "",
  }),
  mounted: function(){
    this.$parent.randomTriggerUrlResult = Math.floor((Math.random() * 10000) + 1);;
  }
  
}

</script>

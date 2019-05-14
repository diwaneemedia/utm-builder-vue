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
            v-model="source"
            label="googel, facebook, instagram"
            solo
            ></v-text-field>
          </v-flex>
          
          <v-flex xs12>
            <div>Campaign medium</div>
            <v-text-field
            v-model="medium"
            label="cpc, email, banner, article"
            solo
            ></v-text-field>
          </v-flex>
          
          <v-flex xs12>
            <div>Campaign name</div>
            <v-text-field
            v-model="name"
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
            v-model="term"
            label="link, landing page"
            solo
            ></v-text-field>
          </v-flex>
          
          <v-flex xs12>
            <div>Campaign content</div>
            <v-text-field
            v-model="content"
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
    source: "",
    medium: "",
    name: "",
    term: "",
    content: "",
  })
  
}

</script>

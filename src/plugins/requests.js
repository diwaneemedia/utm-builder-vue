import Vue from 'vue'
import axios from 'axios'

Vue.mixin({
  methods: {
      
      endpoints_postShorten: function(longUrl){
        let apiKey = '8da0dd42-59fe-4d9b-89bf-cf779f000044';
        return axios({
          method: 'post',
          url: 'http://shlink.d/rest/v1/short-urls',
          data: JSON.stringify({
            'longUrl': longUrl
          }),
          headers: {
            "X-Api-Key": apiKey,
            'Content-Type': 'application/json; charset=utf-8',
          }
        });        
      }
     
  }
});
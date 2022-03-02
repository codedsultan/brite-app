<template>
  <div>
   
   
              <ul role="list" class="p-12 -mb-8">

                <li  v-for="(event, key)  in events.data.events" :key='key'>
              <div class="card">
                <div class="container">
                  <h3>{{event.name.text}}</h3>
                    <!-- <p>{{event.url}}</p> -->
                     <a :href="event.url">View Event</a>
                     <!-- Noscript content for added SEO -->
<!-- <noscript><a href="https://www.eventbrite.co.uk/e/tedbree-ig-live-tickets-274103560127" rel="noopener noreferrer" target="_blank">Buy Tickets on Eventbrite</a></noscript> -->
<!-- You can customize this button any way you like -->
                          <button v-on:click="handleCheck(event.id)" :id="'eventbrite-widget-modal-trigger-'+event.id" type="button">Buy Tickets</button>
                   </div>
                  </div>
                </li>

            </ul>
     

  </div>
</template>


<script>
import {getEvents, getOrganizations} from './../services/BriteService'
import {o_O} from './../Helpers'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
    data(){
        return{
            events: [],
            error: null,
            response: null,
            pt:' 3R6GWLGHDXGP5GM3SN2UK5JQJFHOK4RKMOZXXTIG72NIAOZMTC',
            organizations:null,
        //     exampleCallback : function() {
        // console.log('Order complete!');
        //   }
        }
    },
  methods:{

    exampleCallback:function() {
        console.log('Order complete!');
    },
    handleCheck(x){
        window.EBWidgets.createWidget({
        widgetType: 'checkout',
        eventId: x,
        modal: true,
        modalTriggerElementId: 'eventbrite-widget-modal-trigger-' + x,
        onOrderComplete: this.exampleCallback
    });
    },

      async handleFetch(x){
        let [err, data] = await o_O(getEvents(x));
              if(err){
                  this.error = err.response.data;
                  this.response = null;
              }else{
                this.events = data
              }

              
        // return getEvents()
      },
      async handleFetchOrgs(x){
        let [err, data] = await o_O(getOrganizations(x));
              if(err){
                  this.error = err.response.data;
                  this.response = null;
              }

              this.organizations = data
        // return getEvents()
      },
       
  },
    mounted(){
        this.handleFetch('144370389754');
        this.handleFetchOrgs('FYE26YJH3ZU4ULOYNERD');
          const s = document.createElement('script');
          s.type = 'text/x-content';
          s.src = 'https://www.eventbrite.com/static/widgets/eb_widgets.js';
          document.body.appendChild(s);
          
          this.handleCheck()
    }


}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
.container {
  padding: 2px 16px;
}
</style>


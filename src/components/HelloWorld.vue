<template>
  <div class="flex-container grid-container">
   
<!--    
              <ul role="list" class="p-12 -mb-8">

                <li  v-for="(event, key)  in events.data.events" :key='key'>
              <div class="card">
                <div class="container">
                  <h3>{{event.name.text}}</h3> -->
                    <!-- <p>{{event.url}}</p> -->
                     <!-- <a :href="event.url">View Event</a> -->
                     <!-- Noscript content for added SEO -->
<!-- <noscript><a href="https://www.eventbrite.co.uk/e/tedbree-ig-live-tickets-274103560127" rel="noopener noreferrer" target="_blank">Buy Tickets on Eventbrite</a></noscript> -->
<!-- You can customize this button any way you like -->
                          <!-- <button v-on:click="handleCheck(event.id)" :id="'eventbrite-widget-modal-trigger-'+event.id" type="button">Buy Tickets</button>
                   </div>
                  </div>
                </li>

            </ul>
      -->
  <!-- <div>
       <div class="card">
      <div class="container">
        <h3>{{events.data.events[8].name.text}}</h3>
          <button v-on:click="handleCheck(events.data.events[eventlength-2].id)" :id="'eventbrite-widget-modal-trigger-'+events.data.events[eventlength-2].id" type="button">Buy Tickets</button>
      </div>
    </div>     
  </div>
  <div>    
    <div class="card">
      <div class="container">
        <h3>{{events.data.events[8].name.text}}</h3>
          <button v-on:click="handleCheck(events.data.events[eventlength-2].id)" :id="'eventbrite-widget-modal-trigger-'+events.data.events[eventlength-2].id" type="button">Buy Tickets</button>
      </div>
    </div>  </div>
  <div>    
    <div class="card">
      <div class="container">
        <h3>{{events.data.events[10].name.text}}</h3>
          <button v-on:click="handleCheck(events.data.events[eventlength-3].id)" :id="'eventbrite-widget-modal-trigger-'+events.data.events[eventlength-2].id" type="button">Buy Tickets</button>
      </div>
    </div>  </div>
  </div> -->
  <div class="row">
  <div class="column">    <div class="card">
      <div class="container">
        <h3>{{events.data.events[eventlength-1].name.text}}</h3>
          <button v-on:click="handleCheck(events.data.events[eventlength-1].id)" :id="'eventbrite-widget-modal-trigger-'+events.data.events[eventlength-1].id" type="button">Buy Tickets</button>
      </div>
    </div> </div>
  <div class="column">    
    <div class="card">
      <div class="container">
        <!-- <img src="../assets/logo.png" width="500" height="600"> -->
        <h3>{{events.data.events[eventlength-2].name.text}}</h3>
          <button v-on:click="handleCheck(events.data.events[eventlength-2].id)" :id="'eventbrite-widget-modal-trigger-'+events.data.events[eventlength-2].id" type="button">Buy Tickets</button>
      </div>
    </div> </div>
  <div class="column">    <div class="card">
      <div class="container">
        <h3>{{events.data.events[eventlength-3].name.text}}</h3>
          <button v-on:click="handleCheck(events.data.events[eventlength-3].id)" :id="'eventbrite-widget-modal-trigger-'+events.data.events[eventlength-3].id" type="button">Buy Tickets</button>
      </div>
    </div> </div>
</div>
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
            events: {},
            error: null,
            response: null,
            pt:' 3R6GWLGHDXGP5GM3SN2UK5JQJFHOK4RKMOZXXTIG72NIAOZMTC',
            organizations:null,
            eventlength:null
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
                this.eventlength = this.events.data.events.length
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
  computed: {
    // a computed getter
    // eventlength: function () {
    //   // `this` points to the vm instance
    //   if(this.events.data.events){
    //     return this.events.data.events.length()
    //   }
    //   return 0
    // }
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
  background-color: azure;
  margin: 40px 0 0;
  padding: 40px;
  height: 60px;
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
  background-image: url(../assets/logo.png);
  background-size: contain;
  /* background-size: auto; */
  background-repeat: no-repeat;
  height: 600px; 

  
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
.container {
  /* padding: 2px 16px; */
   padding-top: 300px;
  padding-top: auto;
  padding-bottom: auto;

}

.flex-container {
  /* display: flex; */
  /* width: 1200px; */
  /* margin:auto; */
  /* position:absolute */
}

.grid-container {
  display: grid;
  column-gap: 50px;
}


/* Container for flexboxes */
.row {
  display: -webkit-flex;
  display: flex;
}

/* Create three equal columns that sits next to each other */
.column {
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  padding: 10px;

  /* Should be removed. Only for demonstration */
}

/* Style the footer */
.footer {
  background-color: #f1f1f1;
  padding: 10px;
  text-align: center;
}

/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
@media  (max-width: 600px) {
  .row {
    -webkit-flex-direction: column;
    flex-direction: column;
  }
  .card {
    height: 300px; 
  }

  .container {
  /* padding: 2px 16px; */
   padding-top: 100px;
  }
}

img {
    max-width: 100%;
    max-height: 100%;
}

button{
  background-color: cadetblue;
  padding:20px 40px;
  font-size: large;
  color:white;
  border: none;
  
}
</style>


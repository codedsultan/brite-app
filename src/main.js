import Vue from 'vue'
import App from './components/EventbriteEvents.ce.vue'
import wrap from '@vue/web-component-wrapper'

const eventbriteEvents = wrap(Vue, App)

window.customElements.define('eventbrite-events', eventbriteEvents)

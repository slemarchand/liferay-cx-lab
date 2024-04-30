import App from './App.vue'
import { defineCustomElement } from 'vue'

const ELEMENT_NAME = 'cx-vue3-timer';

if (!customElements.get(ELEMENT_NAME)) {
    
    const AppElement = defineCustomElement(App)
    
    customElements.define(ELEMENT_NAME, AppElement)
}
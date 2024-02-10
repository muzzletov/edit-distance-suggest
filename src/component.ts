import { defineCustomElement } from 'vue'
import Customizer from '@/components/Customizer.vue'

customElements.define('autosuggest-example', defineCustomElement(Customizer))
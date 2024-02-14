import { createApp } from 'vue'
import App from './App.vue'


//Oh Vue Icons
import {OhVueIcon, addIcons} from "oh-vue-icons";
import {FaAlignJustify} from "oh-vue-icons/icons";
addIcons(FaAlignJustify);

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App)
  .use(vuetify)
  .component("v-icon", OhVueIcon)
  .mount('#app')

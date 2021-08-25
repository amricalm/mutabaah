import { createApp } from 'vue'
import App from './App.vue'

//import router
import router from './router'

//import Bootstrap, Popper, jQuery
import 'material-icons/iconfont/material-icons.css'
import 'material-icons/iconfont/filled.css'
import 'material-icons/iconfont/outlined.css'
import 'material-icons/iconfont/round.css'
import 'material-icons/iconfont/sharp.css'
import 'material-icons/iconfont/two-tone.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'finwallapp/vendor/swiper/css/swiper.min.css'
import 'finwallapp/css/style.css'
import 'finwallapp/js/jquery-3.3.1.min'
import 'finwallapp/js/popper.min'
import 'finwallapp/vendor/bootstrap/js/bootstrap.min'
import 'finwallapp/js/jquery.cookie'
import 'finwallapp/vendor/swiper/js/swiper.min'
// import 'finwallapp/js/main'
// import 'finwallapp/js/color-scheme-demo'
// import 'finwallapp/js/pwa-services'
// import 'finwallapp/js/app'


const app = createApp(App)

//use vue router
app.use(router)

app.mount('#app')
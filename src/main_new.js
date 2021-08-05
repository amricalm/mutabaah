import { createApp } from 'vue'
import App from './App.vue'

//import router
import router from './router'

//import Bootstrap, Popper, jQuery
// import 'bootstrap/dist/css/bootstrap.css'
// import 'jquery/dist/jquery.min'
//  import 'popper.js/dist/popper.min'
// import 'bootstrap/dist/js/bootstrap.min'

// <meta name="apple-mobile-web-app-capable" content="yes">

// Favicons
// </meta><link rel="apple-touch-icon" href="img/favicon180.png" sizes="180x180">
// </link>/<link rel="icon" href="img/favicon32.png" sizes="32x32" type="image/png">
// <link rel="icon" href="img/favicon16.png" sizes="16x16" type="image/png">

// Material icons
// import 'https://fonts.googleapis.com/icon?family=Material+Icons'

// Google fonts
// import 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap'

// swiper CSS
import 'finwallapp/vendor/swiper/css/swiper.min.css'

// Custom styles for this template
import 'finwallapp/css/style.css'

// Required jquery and libraries
import 'finwallapp/js/jquery-3.6.0.min'
import 'finwallapp/js/popper.min'
import 'finwallapp/vendor/bootstrap/js/bootstrap.min'

// cookie js
import 'finwallapp/js/jquery.cookie'

// Swiper slider  js
import 'finwallapp/vendor/swiper/js/swiper.min'

// Customized jquery file
import 'finwallapp/js/main'
import 'finwallapp/js/color-scheme-demo'


// page level custom script
import 'finwallapp/js/app'

const app = createApp(App)

//use vue router
app.use(router)

app.mount('#app')
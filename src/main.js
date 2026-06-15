import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './api'
import 'animate.css'
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min'
import { WOW } from 'wowjs'

Vue.prototype.http = axios;

import Header from './components/Header'
Vue.component(Header.name, Header)

import Footer from './components/Footer'
Vue.component(Footer.name, Footer)

import GoTop from './components/GoTop'
Vue.component(GoTop.name, GoTop)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    if(to.meta.title) {
        document.title = to.meta.title
    }
    next();
});

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data() {
    return {
      currentLang: localStorage.getItem('lang') || 'zh'
    }
  },
  mounted() {
    const wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true
    });
    wow.init();
  },
  methods: {
    setLanguage(lang) {
      this.currentLang = lang;
      localStorage.setItem('lang', lang);
      this.$emit('lang-changed', lang);
    }
  }
})

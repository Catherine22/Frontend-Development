import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en';
import '@/assets/css/reset.css';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/style.scss';
import pwa from './pwa';

Vue.config.productionTip = false;
Vue.use(ElementUI, { locale });

pwa();
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en';
import '@/assets/css/reset.css';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/style.scss';
import './sw';

Vue.config.productionTip = false;
Vue.use(ElementUI, { locale });

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

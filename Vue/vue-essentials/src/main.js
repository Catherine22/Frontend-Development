import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueResource from 'vue-resource';

Vue.config.productionTip = false;
export const eventBus = new Vue();

Vue.use(VueResource);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

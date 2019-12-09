import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueResource from 'vue-resource';

Vue.config.productionTip = false;
export const eventBus = new Vue();

// http client
Vue.use(VueResource);

// custom directives
Vue.directive('rainbow', {
    bind(el, binding, vnode) {
        // Generate random 6 digit numbers for colour hex
        el.style.background = `#${Math.random()
            .toString()
            .slice(2, 8)}`;
    }
});
Vue.directive('theme', {
    bind(el, binding, vnode) {
        if (binding.value === 'banner') {
            el.style.height = '200px';
        } else if (binding.value === 'adMob') {
            el.style.height = '80px';
        } else {
            el.style.height = '120px';
        }

        if (binding.arg === 'border') {
            el.style.borderStyle = 'solid';
            el.style.borderWidth = '1px';
        }
    }
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

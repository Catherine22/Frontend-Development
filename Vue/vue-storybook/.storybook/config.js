import Vue from 'vue';
import { configure, addParameters, addDecorator } from '@storybook/vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { withInfo } from 'storybook-addon-vue-info';

addDecorator(withInfo);
Vue.use(ElementUI);

addParameters({
    backgrounds: [{ name: 'main body', value: '#e0e0e0' }]
});
const req = require.context('../src/', true, /.stories.js$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

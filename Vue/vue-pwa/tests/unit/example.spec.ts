import { shallowMount } from '@vue/test-utils';
import Home from '@/pages/home/index.vue';

describe('Home.vue', () => {
    // Mount the component
    const wrapper = shallowMount(Home);

    it('renders the correct message', () => {
        expect(wrapper.find('h2').text()).toBe('My luminous PWA project');
    });
});

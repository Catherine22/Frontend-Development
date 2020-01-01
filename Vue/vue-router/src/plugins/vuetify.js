import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            dark: {
                primary: '#28ae7b',
                text: '#000000',
                secondary: '#65e1aa',
                accent: '#ae285b'
            },
            light: {
                primary: '#28ae7b',
                text: '#000000',
                secondary: '#65e1aa',
                accent: '#ae285b'
            }
        },
        light: true
        // dark: true
    }
});

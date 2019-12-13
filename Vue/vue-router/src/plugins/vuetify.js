import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            dark: {
                primary: '#2c4052',
                text: '#ffffff',
                primaryLight: '#576b7e',
                primaryDark: '#031a29'
            },
            light: {
                primary: '#28ae7b',
                text: '#2c4052',
                primaryLight: '#65e1aa',
                primaryDark: '#007e4f'
            }
        },
        light: true
        // dark: true
    }
});

<template>
    <div>
        <app-header :title="title"></app-header>
        <ninja :ninjas="ninjas" />
        <button @click="fire">Fire ninja</button>
        <app-footer></app-footer>
    </div>
</template>

<script>
import Header from '@/components/common/Header.vue';
import Footer from '@/components/common/Footer.vue';
import Ninja from '@/components/Ninja.vue';
export default {
    name: 'staff',
    components: {
        'app-header': Header,
        ninja: Ninja,
        'app-footer': Footer
    },
    data() {
        return {
            title: 'Staff',
            ninjas: [
                { name: 'Ryu', speciality: 'Vue Components', show: false },
                { name: 'Crystal', speciality: 'HTML Wizardry', show: false },
                { name: 'Hitoshi', speciality: 'Click Events', show: false },
                { name: 'Tango', speciality: 'Conditionals', show: false },
                { name: 'Kami', speciality: 'Webpack', show: false },
                { name: 'Yoshi', speciality: 'Data Diggin', show: false }
            ]
        };
    },
    methods: {
        fire() {
            this.ninjas.pop();
        }
    },

    // lifecycle hooks
    beforeCreate() {
        console.log('beforeCreate');
    },
    created() {
        console.log('created');
    },
    beforeMount() {
        console.log('beforeMount');
    },
    mounted() {
        console.log('mounted');
    },
    beforeUpdate() {
        console.log('beforeUpdate');
    },
    updated() {
        console.log('updated');
    },
    beforeDestroy() {
        console.log('beforeDestroy');
    },
    destroyed() {
        console.log('destroyed');
    }
};
</script>

<template>
    <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list nav dense>
            <v-list-item-group v-model="group" active-class="deep-green--text text--accent-4">
                <v-list-item v-for="item in items" :key="item.title" @click="routeTo(item.name)">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
</template>
<script>
import Vue from 'vue';
import { eventBus } from '@/main.js';
import { OPEN_DRAWER } from '@/constants';
export default Vue.extend({
    data: () => ({
        drawer: false,
        group: null,
        items: [
            {
                title: 'List',
                name: 'ninjas'
            },
            {
                title: 'Tab'
            },
            {
                title: 'Foo'
            },
            {
                title: 'Bar'
            }
        ]
    }),
    methods: {
        routeTo(page) {
            this.$router.replace({ name: page }).catch(err => {
                console.warn('navigation', err);
            });
        },
        goBack() {
            window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
        }
    },
    created() {
        eventBus.$on(OPEN_DRAWER, () => {
            this.drawer = !this.drawer;
        });
    },
    destroyed() {
        eventBus.$off(OPEN_DRAWER);
    }
});
</script>
<style scoped></style>

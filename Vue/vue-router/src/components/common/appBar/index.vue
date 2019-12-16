<template>
    <!--add shrink-on-scroll-->
    <v-app-bar app color="primary" light elevate-on-scroll>
        <div class="d-flex align-center">
            <v-btn icon @click.stop="onNavIconPressed">
                <v-icon>{{ getNavIcon().res }}</v-icon>
            </v-btn>
            <v-toolbar-title>Vue Router</v-toolbar-title>
        </div>

        <v-spacer></v-spacer>

        <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-menu>
            <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </template>

            <v-list>
                <v-list-item v-for="item in menu" :key="item.name" @click="$router.push(item.path)">
                    <v-list-item-title>{{ item.name }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-app-bar>
</template>
<script>
import Vue from 'vue';
import { eventBus } from '@/main.js';
import { getNested } from '@/utilities';
import { OPEN_DRAWER, APP_BAR_ICONS } from '@/constants';
export default Vue.extend({
    data: () => ({
        menu: [
            {
                name: 'history',
                path: '/history'
            },
            {
                name: 'menuItem1',
                path: '/menuItem1'
            },
            {
                name: 'menuItem2',
                path: '/menuItem2'
            },
            {
                name: 'menuItem3',
                path: '/menuItem3'
            },
            {
                name: 'menuItem4',
                path: '/menuItem4'
            }
        ]
    }),

    methods: {
        getNavIcon() {
            if (getNested(this.$route.meta.navIcon) !== undefined) {
                return this.$route.meta.navIcon;
            }

            return APP_BAR_ICONS.BACK;
        },

        onNavIconPressed() {
            if (this.getNavIcon().name === APP_BAR_ICONS.MENU.name) {
                // open drawer
                eventBus.$emit(OPEN_DRAWER);
            } else {
                // go back
                console.log('Go back', 'length =', window.history.length);
                window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
            }
        }
    },

    watch: {
        $route(to, from) {
            console.log('navigating to', to, 'from', from);
        }
    }
});
</script>
<style scoped></style>

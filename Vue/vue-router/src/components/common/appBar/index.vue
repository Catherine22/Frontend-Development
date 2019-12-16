<template>
    <!--add shrink-on-scroll-->
    <v-app-bar app color="primary" light elevate-on-scroll>
        <div class="d-flex align-center">
            <v-app-bar-nav-icon @click.stop="openDrawer"></v-app-bar-nav-icon>
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
import { OPEN_DRAWER } from '@/constants';
export default Vue.extend({
    data: () => ({
        menu: [
            {
                name: 'history',
                path: '/history'
            },
            {
                name: 'option1',
                path: '/option1'
            },
            {
                name: 'option2',
                path: '/option2'
            },
            {
                name: 'option3',
                path: '/option3'
            },
            {
                name: 'option4',
                path: '/option4'
            }
        ]
    }),
    methods: {
        openDrawer() {
            eventBus.$emit(OPEN_DRAWER);
        }
    }
});
</script>
<style scoped></style>

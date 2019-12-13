<template>
    <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list nav dense>
            <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
                <v-list-item>
                    <v-list-item-title>Foo</v-list-item-title>
                </v-list-item>

                <v-list-item>
                    <v-list-item-title>Bar</v-list-item-title>
                </v-list-item>

                <v-list-item>
                    <v-list-item-title>Fizz</v-list-item-title>
                </v-list-item>

                <v-list-item>
                    <v-list-item-title>Buzz</v-list-item-title>
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
        group: null
    }),
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

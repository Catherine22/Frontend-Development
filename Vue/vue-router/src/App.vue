<template>
    <v-app>
        <appBar></appBar>
        <nav-drawer></nav-drawer>

        <v-content>
            <home v-if="isRoot" />
            <router-view v-else></router-view>
        </v-content>
    </v-app>
</template>

<script>
import appBar from '@/components/common/appBar';
import navDrawer from '@/components/common/navDrawer';
import Home from '@/components/page/home';

export default {
    name: 'App',

    components: {
        home: Home,
        appBar,
        'nav-drawer': navDrawer
    },

    data: () => ({
        isRoot: true
    }),

    watch: {
        $route(to, from) {
            // react to route changes...
            console.log('route to', to, 'from', from);
        }
    }
};
</script>

<style scoped>
.container-visible {
    position: absolute;
    z-index: 10;
    visibility: visible;
}
.container-hidden {
    position: absolute;
    z-index: 10;
    visibility: hidden;
}
</style>

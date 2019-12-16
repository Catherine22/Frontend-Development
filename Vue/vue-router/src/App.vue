<template>
    <v-app>
        <appBar></appBar>
        <nav-drawer></nav-drawer>

        <v-content>
            <router-view></router-view>
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
        appBar,
        'nav-drawer': navDrawer
    },

    data: () => ({}),

    watch: {
        $route(to, from) {
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

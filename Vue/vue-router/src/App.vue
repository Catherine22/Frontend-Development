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

export default {
    name: 'App',

    components: {
        appBar,
        'nav-drawer': navDrawer
    },

    data: () => ({})
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

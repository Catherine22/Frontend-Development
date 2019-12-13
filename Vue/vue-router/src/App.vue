<template>
    <v-app>
        <appBar></appBar>
        <nav-drawer></nav-drawer>

        <v-content>
            <home />
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

    data: () => ({})
};
</script>

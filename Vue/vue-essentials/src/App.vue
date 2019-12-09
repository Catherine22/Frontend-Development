<template>
    <div id="app">
        <tab-nav></tab-nav>
        <router-view />
    </div>
</template>

<script>
import TabNavigation from '@/components/common/TabNavigation.vue';
export default {
    components: {
        'tab-nav': TabNavigation
    }
};
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>

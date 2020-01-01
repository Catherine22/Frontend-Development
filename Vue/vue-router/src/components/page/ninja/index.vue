<template>
    <v-container>
        <v-tabs v-model="selectedTab">
            <v-tab v-for="tab in tabs" :key="tab" @click="routeTo(tab.name, tab.params)">
                {{ tab.name }}
            </v-tab>
        </v-tabs>
        <router-view></router-view>
    </v-container>
</template>
<script>
import Vue from 'vue';
export default Vue.extend({
    name: 'ninja',
    data() {
        return {
            selectedTab: 0,
            tabs: [
                { name: 'post', params: { id: this.$route.params.id } },
                { name: 'profile', params: { id: this.$route.params.id } }
            ]
        };
    },
    methods: {
        routeTo(name, params) {
            this.$router.replace({ name, params });
        }
    },
    mounted() {
        let { name, params } = this.tabs[0];
        this.routeTo(name, params);
    }
});
</script>
<style scoped></style>

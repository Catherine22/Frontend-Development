<template>
    <v-container>
        <div>Menu item {{ $route.params.pathMatch }}</div>
    </v-container>
</template>
<script>
import Vue from 'vue';
export default Vue.extend({
    name: 'menuItem'
});
</script>

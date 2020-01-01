<template>
    <v-container>
        <div>Ninja's profile</div>
        <div>Id = {{ $route.params.id }}</div>
    </v-container>
</template>
<script>
import Vue from 'vue';
export default Vue.extend({
    name: 'profile'
});
</script>

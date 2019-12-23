<template>
    <v-container>
        <div>Ninja's id = {{ this.$route.params.id }}</div>
    </v-container>
</template>
<script>
import Vue from 'vue';
export default Vue.extend({
    name: 'ninja'
});
</script>

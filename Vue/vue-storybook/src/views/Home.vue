<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <hello-world msg="Welcome to Your Vue.js App" />
    </div>
</template>

<script>
// @ is an alias to /src
import helloWorld from '@/components/helloWorld/index.vue';

export default {
    name: 'Home',
    components: {
        helloWorld
    }
};
</script>

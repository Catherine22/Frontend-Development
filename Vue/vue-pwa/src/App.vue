<template>
    <div class="container">
        <navbar />
        <transition name="fade">
            <router-view />
        </transition>
    </div>
</template>

<script>
import Vue from 'vue';
import Navbar from '@/components/Navbar/index.vue';

export default Vue.extend({
    name: 'App',
    components: { Navbar }
});
</script>

<style lang="scss" scoped>
.button--green {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #3b8070;
    color: #3b8070;
    text-decoration: none;
    padding: 10px 30px;
}
.button--green:hover {
    color: #fff;
    background-color: #3b8070;
}
.button--grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #35495e;
    color: #35495e;
    text-decoration: none;
    padding: 10px 30px;
    margin-left: 15px;
}
.button--grey:hover {
    color: #fff;
    background-color: #35495e;
}
</style>

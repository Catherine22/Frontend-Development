<template>
    <el-container>
        <el-header>
            <navbar />
        </el-header>
        <el-main
            v-loading="$store.state.pageLoading"
            element-loading-text="Loading..."
            element-loading-spinner="el-icon-loading"
            class="main"
        >
            <transition name="fade">
                <router-view class="router-view" />
            </transition>
        </el-main>
    </el-container>
</template>

<script>
import Vue from 'vue';
import Navbar from '@/components/navbar/index.vue';

export default Vue.extend({
    name: 'App',
    components: { Navbar },
    mounted() {
        this.$store.commit('setPageLoading', false);
    }
});
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
.main {
    justify-content: center;
    align-items: center;
    text-align: center;
}
.router-view {
    position: absolute;
    top: 108px;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
}
</style>

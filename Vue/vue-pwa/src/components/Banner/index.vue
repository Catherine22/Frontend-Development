<template>
    <el-carousel trigger="click" height="150px">
        <el-carousel-item v-for="(item, index) in dataset" :key="index">
            <el-image :src="item.image" fit="scale-down" @click="item.link" />
        </el-carousel-item>
    </el-carousel>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'Banner',
    props: {
        dataset: {
            type: Array,
            required: true
        }
    },
    methods: {
        open(link: string) {
            self.open(link, '_blank');
        }
    }
});
</script>

<style lang="scss">
.el-carousel__item img {
    color: $primary;
    height: 250px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: $primary;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: $primary;
}
</style>

<template>
    <div class="home">
        <desktop v-if="$store.state.device" />
        <mobile v-else />
    </div>
</template>

<script>
import Vue from 'vue';
import desktop from '@/components/desktop/page/home/index.vue';
import mobile from '@/components/mobile/page/home/index.vue';
export default Vue.extend({
    name: 'home',
    components: {
        desktop,
        mobile
    }
});
</script>

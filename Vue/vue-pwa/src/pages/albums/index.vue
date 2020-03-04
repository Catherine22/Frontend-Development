<template>
    <div class="container">
        <banner class="banner" :dataset="albums" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Banner from '@/components/banner/index.vue';

export default Vue.extend({
    name: 'Albums',
    components: { Banner },
    data() {
        return {
            albums: [
                {
                    image: 'img/banners/1989.png',
                    link:
                        'https://www.amazon.com/1989-Taylor-Swift/dp/B00OBRI7FS/ref=sr_1_8?keywords=Taylor+Swift&qid=1582608360&sr=8-8'
                },
                {
                    image: 'img/banners/speak_now.png',
                    link:
                        'https://www.amazon.com/Speak-Now-Deluxe-Taylor-Swift/dp/B072MQRNB7/ref=sxbs_sxwds-stvp?cv_ct_cx=Taylor+Swift&keywords=Taylor+Swift&pd_rd_i=B072MQRNB7&pd_rd_r=43d91e30-d242-4c1b-acaa-c27433defaf5&pd_rd_w=r52jH&pd_rd_wg=EyjW2&pf_rd_p=a6d018ad-f20b-46c9-8920-433972c7d9b7&pf_rd_r=451QC757SMK0RQZN0XG8&psc=1&qid=1582627847'
                },
                {
                    image: 'img/banners/love.png',
                    link:
                        'https://www.amazon.com/Lover-Taylor-Swift/dp/B07SRF26YQ/ref=sr_1_1?keywords=Taylor+Swift&qid=1582608360&sr=8-1'
                }
            ]
        };
    }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.container {
    justify-content: center;
    align-items: center;
    text-align: center;
    .banner {
        width: 100%;
    }
}
</style>

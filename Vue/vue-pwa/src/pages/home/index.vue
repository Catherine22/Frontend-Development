<template>
    <div class="container">
        <img src="icon.png" />
        <h2 class="subtitle">
            My luminous PWA project
        </h2>
        <div class="links">
            <a
                href="https://developers.google.com/web/progressive-web-apps"
                target="_blank"
                class="button--green"
            >
                Documentation
            </a>
            <router-link to="/albums" class="button--grey">
                Taylor Swift
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'Home'
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.container {
    justify-content: center;
    align-items: center;
    text-align: center;
    .title {
        font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
            Roboto, 'Helvetica Neue', Arial, sans-serif;
        display: block;
        font-weight: 300;
        font-size: 100px;
        letter-spacing: 1px;
    }
    .subtitle {
        font-weight: 300;
        font-size: 42px;
        color: #526488;
        word-spacing: 5px;
    }
    .links {
        padding-top: 15px;
    }
}
</style>

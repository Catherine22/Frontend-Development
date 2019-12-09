<template>
    <div id="container">Green Banner</div>
</template>

<script>
export default {
    created() {
        console.log('[Green]', 'created');
    },
    destroyed() {
        console.log('[Green]', 'destroyed');
    }
};
</script>

<style scoped>
#container {
    padding: 20px;
    max-width: 500px;
    text-align: center;
    background-color: green;
    color: white;
}
</style>

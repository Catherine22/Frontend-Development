<template>
    <div id="container">Red Banner</div>
</template>

<script>
export default {
    created() {
        console.log('[red]', 'created');
    },
    destroyed() {
        console.log('[red]', 'destroyed');
    }
};
</script>

<style scoped>
#container {
    padding: 20px;
    text-align: center;
    background-color: red;
    color: white;
}
</style>

<template>
    <footer>
        <p>{{ copyright }}</p>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            copyright: 'Copyright 2019 Vue Ninjas'
        };
    }
};
</script>

<style scoped>
p {
    color: #42b983;
    text-align: center;
}
</style>

<template>
    <header>
        <h1 v-show="!isEmpty(title)">{{ title }}</h1>
    </header>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: false
        }
    },
    methods: {
        isEmpty(str) {
            return (
                !str /*'' or null or undefined*/ || /^\s+$/.test(str)
            ); /* contains 1 or more whitespace characters */
        }
    }
};
</script>

<style scoped>
header {
    background: #42b983;
}

h1 {
    color: white;
    text-align: center;
}
</style>

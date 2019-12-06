<template>
    <div id="students">
        <ul>
            <li v-for="student in students" :key="student">
                <h2>{{ student }}</h2>
            </li>
        </ul>
        <button @click="dropOut">Drop out</button>
    </div>
</template>

<script>
export default {
    props: {
        students: {
            type: Array,
            required: true
        }
    },
    methods: {
        dropOut() {
            this.students.pop();
        }
    }
};
</script>

<style scoped>
#students {
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li {
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}
</style>

<template>
    <div id="single-blog">
        <div id="detail">
            <h3>Blog title: {{ blog.title }}</h3>
            <p>Blog Content:</p>
            <p>{{ blog.content }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id,
            blog: {
                title: null,
                content: null
            }
        };
    },
    created() {
        this.$http.get(`https://jsonplaceholder.typicode.com/posts/${this.id}`).then(
            response => {
                console.log('onResponse', response);
                let body = response.body;
                this.blog.title = body.title;
                this.blog.content = body.body;
            },
            error => {
                console.warn('onError', error);
            }
        );
    }
};
</script>

<style scoped>
#single-blog * {
    box-sizing: border-box;
}

#detail {
    padding: 10px 20px;
    border: 1px dotted #cccccc;
    margin: 30px 0;
    white-space: pre;
}

h3 {
    margin-top: 10px;
}
</style>

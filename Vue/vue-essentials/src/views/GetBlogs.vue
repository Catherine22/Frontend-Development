<template>
    <div id="get-blogs">
        <h2>All Blog Articles</h2>
        <div id="single-blog" v-for="blog in blogs" :key="blog.title">
            <h3>{{ blog.title }}</h3>
            <article>{{ blog.body }}{</article>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // userId, id, title, body
            blogs: []
        };
    },
    methods: {
        post() {
            this.$http.get('https://jsonplaceholder.typicode.com/posts').then(
                response => {
                    console.log('onResponse', response);
                    let body = response.body.slice(0, 10);
                    body.forEach(blog => {
                        this.blogs.push(blog);
                    });
                },
                error => {
                    console.warn('onError', error);
                }
            );
        }
    },
    mounted() {
        this.post();
    }
};
</script>

<style scoped>
#get-blogs {
    max-width: 800;
    margin: 0 auto;
}

#single-blog {
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eeeeee;
}
</style>

<template>
    <div id="list-blogs">
        <h2>All Blog Articles</h2>
        <input type="text" v-model="search" placeholder="Search blogs" />
        <div id="single-blog" v-for="blog in filterBlogs" :key="blog.title">
            <h3 v-rainbow="">{{ blog.title }}</h3>
        </div>
    </div>
</template>

<script>
import SearchMixins from '@/views/blogs/mixins/SearchMixins';
export default {
    data() {
        return {
            // userId, id, title, body
            blogs: [],
            search: ''
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
    created() {
        this.post();
    },
    directives: {
        rainbow: {
            bind(el, binding, vnode) {
                // Generate random 6 digit numbers for colour hex
                el.style.color = `#${Math.random()
                    .toString()
                    .slice(2, 8)}`;
            }
        }
    },
    mixins: [SearchMixins]
};
</script>

<style scoped>
#list-blogs {
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

<!--URL: http://localhost:3000/posts/:id -->
<template>
    <div class="container">
        <article>
            <h1 class="title">{{ post.title }}</h1>
            <p>{{ post.content }}</p>
        </article>
        <aside>
            <h3>Posts you might enjoy</h3>
            <ul>
                <li v-for="(related, index) in relatedPosts" :key="index">
                    <!-- <nuxt-link :to="`${related.id}`">{{ related.title }}</nuxt-link> -->
                    <nuxt-link :to="{ name: 'posts-id', params: { id: related.id } }">
                        {{ related.title }}
                    </nuxt-link>
                </li>
            </ul>
        </aside>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id,
            posts: [
                {
                    id: 'a001',
                    title: 'Title from A001',
                    content: 'balabala'
                },
                {
                    id: 'a002',
                    title: 'Title from A002',
                    content: 'balabala'
                },
                {
                    id: 'a003',
                    title: 'Title from A003',
                    content: 'balabala'
                }
            ]
        };
    },
    computed: {
        post() {
            return this.posts.find(post => this.id === post.id);
        },
        relatedPosts() {
            return this.posts.filter(post => this.id !== post.id);
        }
    }
};
</script>

<style scoped>
.container {
    display: flex;
    justify-content: space-between;
    line-height: 1.5;
}
article * {
    margin-bottom: 1rem;
}
aside {
    min-width: 280px;
    max-width: 280px;
    padding-left: 2rem;
}
.title {
    font-size: 2rem;
}
</style>

export default {
    computed: {
        filterBlogs() {
            return this.blogs.filter(blog => {
                return blog.title.includes(this.search);
            });
        }
    }
};

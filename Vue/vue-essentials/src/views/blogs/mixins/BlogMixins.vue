<template>
    <div>
        <get-blogs></get-blogs>
        <list-blogs></list-blogs>
    </div>
</template>

<script>
import GetBlogs from '@/views/blogs/mixins/GetBlogs.vue';
import ListBlogs from '@/views/blogs/mixins//ListBlogs.vue';
export default {
    components: {
        'get-blogs': GetBlogs,
        'list-blogs': ListBlogs
    }
};
</script>

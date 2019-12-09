<template>
    <div id="add-blog">
        <h2>Add a New Blog Post</h2>
        <form v-show="!blog.submitted">
            <label>Blog Title:</label>
            <input type="text" required v-model.lazy="blog.title" />
            <label>Blog Content:</label>
            <textarea v-model.lazy="blog.content"></textarea>

            <div id="options">
                <label>Option 1</label>
                <input type="checkbox" value="1" v-model="blog.options" />
                <label>Option 2</label>
                <input type="checkbox" value="2" v-model="blog.options" />
                <label>Option 3</label>
                <input type="checkbox" value="3" v-model="blog.options" />
                <label>Option 4</label>
                <input type="checkbox" value="4" v-model="blog.options" />
            </div>

            <select v-model="blog.selectedAuthor">
                <option disabled value="">Please select one</option>
                <option v-for="author in blog.authors" :key="author">{{ author }}</option>
            </select>
        </form>

        <div v-show="blog.submitted"></div>

        <div id="preview">
            <h3>Preview</h3>
            <p>Blog title: {{ blog.title }}</p>
            <p>Blog Content:</p>
            <p>{{ blog.content }}</p>
            <p>Blog Options:</p>
            <ul>
                <li v-for="option in blog.options" :key="option">{{ option }}</li>
            </ul>
            <p>Blog Author: {{ blog.selectedAuthor }}</p>
        </div>

        <button v-show="!blog.submitted" @click="post">Post</button>
        <button v-show="blog.submitted" @click="goBack">Go back</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            blog: {
                title: null,
                content: null,
                options: [],
                authors: ['The Net Ninja', 'The Angular Avenger', 'The Vue Vindicator'],
                selectedAuthor: null,
                submitted: false
            }
        };
    },
    methods: {
        post() {
            this.$http
                .post('https://jsonplaceholder.typicode.com/posts', {
                    userId: 1,
                    title: this.blog.title,
                    body: this.blog.content
                })
                .then(
                    response => {
                        console.log('onResponse', response);

                        this.blog.title = null;
                        this.blog.content = null;
                        this.blog.options = [];
                        this.blog.selectedAuthor = null;
                        this.blog.submitted = true;
                    },
                    error => {
                        console.warn('onError', error);
                    }
                );
        },
        goBack() {
            // Go back to the previous page
            // this.$router.go(-1);

            this.blog.submitted = false;
        }
    }
};
</script>

<style scoped>
#add-blog * {
    box-sizing: border-box;
}

#add-blog {
    margin: 20px auto;
    max-width: 500px;
}

label {
    display: block;
    margin: 20px 0 10px;
}

input[type='text'],
textarea {
    display: block;
    width: 100%;
    padding: 8px;
}

#preview {
    padding: 10px 20px;
    border: 1px dotted #cccccc;
    margin: 30px 0;
    white-space: pre;
}

h3 {
    margin-top: 10px;
}

#options input {
    display: inline-block;
    margin-right: 10px;
}

#options label {
    display: inline-block;
}
</style>

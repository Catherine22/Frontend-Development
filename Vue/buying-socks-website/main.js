Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: `<div class="product">
                <div class="product-image">
                    <img :src="image" :alt="imageAlt" />
                </div>

                <div class="product-info">
                    <h1>{{ productTitle }}</h1>
                    <p v-if="variants[selectedVariant].variantQuantity >= 10">
                        In stock
                    </p>
                    <p
                        v-else-if="variants[selectedVariant].variantQuantity > 0 && variants[selectedVariant].variantQuantity < 10"
                    >
                        Almost sold out!
                    </p>
                    <p
                        v-else
                        :style="[ inStock? '': { textDecoration: 'line-through' }]"
                    >
                        Out of stock
                    </p>
                    <li v-for="detail in details">{{ detail }}</li>
                    <div
                        class="color-box"
                        v-for="(variant, index) in variants"
                        :key="variant.variantId"
                        :style="{ backgroundColor: variant.variantColour }"
                        @mouseover="updateProductImage(index)"
                    ></div>
                    <p>Shipping: {{ shipping }}</p>
                    <button
                        :class="{ disabledButton: !inStock }"
                        @click="addToCart()"
                        :disabled="!inStock"
                    >
                        Add to Cart
                    </button>
                </div>
                <product-tabs />
            </div>`,
    data() {
        return {
            brand: 'Vue Mastery',
            product: 'Socks',
            imageAlt: 'A pair of socks',
            details: ['80% cotton', '20% polyester', 'Gender-neutral'],
            selectedVariant: 0,
            variants: [
                {
                    variantId: 2234,
                    variantColour: 'green',
                    variantImage: 'assets/vmSocks-green-onWhite.jpg',
                    variantQuantity: 9
                },
                {
                    variantId: 2235,
                    variantColour: 'blue',
                    variantImage:
                        'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg',
                    variantQuantity: 0
                }
            ]
        };
    },
    computed: {
        productTitle() {
            return `${this.brand} ${this.product}`;
        },
        image() {
            return this.variants[this.selectedVariant].variantImage;
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity > 0;
        },
        shipping() {
            return this.premium ? 'Free' : '$2.99';
        }
    },
    methods: {
        addToCart() {
            this.$emit(
                'add-to-cart',
                this.variants[this.selectedVariant].variantId
            );
        },
        updateProductImage(index) {
            this.selectedVariant = index;
        }
    }
});

Vue.component('product-tabs', {
    template: `<div>
                <span class="tab" 
                      :class="{ activeTab: selectedTab === tab}" 
                      v-for="(tab, index) in tabs" 
                      :key="index" 
                      @click="selectedTab = tab"
                >{{ tab }}</span>

                <div v-show="selectedTab === 'Reviews'">
                    <h2>Reviews</h2>
                    <p v-if="reviews.length==0">There are no reviews yet.</p>
                    <ul>
                        <li v-for="review in reviews">
                            <p>{{ review.name }}</p>
                            <p>{{ review.rating }}</p>
                            <p>{{ review.comments }}</p>
                        </li>
                    </ul>
                </div>

                <product-review v-show="selectedTab === 'Make a reviews'" 
                                @review-submitted="addReview"/>
            </div>`,
    data() {
        return {
            tabs: ['Reviews', 'Make a reviews'],
            selectedTab: 'Reviews',
            reviews: []
        };
    },
    methods: {
        addReview(review) {
            this.reviews.push(review);
        }
    }
});

Vue.component('product-review', {
    template: `<div>
                <!-- the submit.prevent event will no longer reload the page -->
                <form class="review-form" @submit.prevent="onSubmit">
                    <p v-if="errors.length>0">
                        <b>Please correct the following error(s):</b>
                        <ul>
                            <li v-for="error in errors">{{ error }}</li>
                        </ul>
                    </p>
                    <p>
                        <label>Name:</label>
                        <input id="reviewer" v-model="review.name" />
                    </p>
                    <p>
                        <label>Review:</label>
                        <textarea
                            id="review"
                            v-model="review.comments"
                        ></textarea>
                    </p>
                    <p>
                        <label>Rating:</label>
                        <select id="rating" v-model.number="review.rating">
                            <option>5</option>
                            <option>4</option>
                            <option>3</option>
                            <option>2</option>
                            <option>1</option>
                        </select>
                    </p>
                    <p>
                        <input type="submit" value="Submit" />
                    </p>
                </form>
            </div>`,
    data() {
        return {
            review: {
                name: null,
                comments: null,
                rating: null
            },
            errors: []
        };
    },
    methods: {
        onSubmit() {
            this.errors = [];
            if (!this.verifyText(this.review.name)) {
                this.errors.push('Name required');
            }
            if (!this.verifyText(this.review.comments)) {
                this.errors.push('Comments required');
            }
            if (!this.verifyText(this.review.rating)) {
                this.errors.push('Rating required');
            }
            if (this.errors.length > 0) {
                return;
            }

            this.$emit('review-submitted', { ...this.review });
            this.review.name = null;
            this.review.comments = null;
            this.review.rating = null;
        },

        verifyText(str) {
            return !!str && /\S+/.test(str);
        }
    }
});

var app = new Vue({
    el: '#app',
    data: {
        isPremium: false,
        cart: []
    },
    methods: {
        updateCart(id) {
            this.cart.push(id);
        }
    }
});

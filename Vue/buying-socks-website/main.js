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

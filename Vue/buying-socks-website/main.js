var app = new Vue({
    el: '#app',
    data: {
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
        ],
        cart: 0,
        isOnSale: true
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
        onSale() {
            return this.isOnSale
                ? `${this.productTitle} are on sale`
                : `${this.productTitle} are not on sale`;
        }
    },
    methods: {
        addToCart() {
            this.cart += 1;
        },
        updateProductImage(index) {
            this.selectedVariant = index;
        }
    }
});

var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: 'assets/vmSocks-green-onWhite.jpg',
        imageAlt: 'A pair of socks',
        inStock: true,
        inventory: 9,
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [
            {
                variantId: 2234,
                variantColour: 'green',
                variantImage: 'assets/vmSocks-green-onWhite.jpg'
            },
            {
                variantId: 2235,
                variantColour: 'blue',
                variantImage:
                    'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg'
            }
        ],
        cart: 0
    },
    methods: {
        addToCart() {
            this.cart += 1;
        },
        updateProductImage(image) {
            this.image = image;
        }
    }
});

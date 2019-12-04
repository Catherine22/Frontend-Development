var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        imageAlt: 'A pair of socks',
        imageGreenSocks: 'assets/vmSocks-green-onWhite.jpg',
        imageBlueSocks:
            'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg',
        inStock: false,
        inventory: 9,
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [
            {
                variantId: 2234,
                variantColour: 'green'
            },
            {
                variantId: 2235,
                variantColour: 'blue'
            }
        ]
    }
});

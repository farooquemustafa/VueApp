var app = new Vue({
    el: '#app',
    data: {
        brand: 'FM',
        product: 'Socks',
        image: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
        altText: "A pair of Socks",
        inStock: true,
        inventory: 100,
        details: ["80% cotton", "20% polyster", "Gender-neutral"], 
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg'
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg'
            }
        ],
        cart: 0,
        link: 'https://'//www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks'
    },
    methods: {
        addToCart: function () {
            this.cart += 1
        },
        updateProduct: function (variantImage) {
            this.image = variantImage
        },
    computed: {
            title () {
                return this.brand + ' ' + this.product

            }
            
        }
    }
})


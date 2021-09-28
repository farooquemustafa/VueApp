import {product-details} from 'ProductComponent';


Vue.component ('ExclusiveProduct', {
    template: `
        <div class="ExclusiveProduct">
        <div class="product-image">
            <img v-bind:src="image" >
        </div>
        <div class="product-info">

            <h1> {{ brandName }} {{ product }} </h1>
            <p v-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p>

            <ul>
                <li v-for="detail in details">{{ detail }}</li>
            </ul>

            <div v-for="variant in modified" 
                :key="variant.modifiedId"
                class="color-box"
                :style="{backgroundColor: variant.modifiedColor}"
                @mouseover="updateProduct(variant.modifiedImage)">  
            </div>

            <button v-on:click="addToCart" 
                :disabled="!inStock"
                :class="{ disabledButton: !inStock }"> Add to Cart</button>
            
            <div class="cart">
                <p>Cart({{cart}})</p>
            </div>

        </div>

        </div>
    `,
    data() {
        retrun 
        {
            brandName: 'FM',
            product: 'Socks',
            image: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
            altText: "A pair of Socks",
            inStock: true,
            inventory: 100,
            details: ["70% cotton", "30% polyster", "Gender-Free - Universal", "All-in-one size"], 
            modified: [
                {
                    modifiedId: 2234,
                    modifiedColor: "green",
                    modifiedImage: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg'
                },
                {
                    modifiedId: 2235,
                    modifiedColor: "blue",
                    modifiedImage: 'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg'
                }
            ],
            cart: 0,
            //link: 'https://'//www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks'
        }  

    } ,
    methods: {
        addToCart: function () {
            this.cart += 1
        },
        updateProduct: function (modifiedImage) {
            this.image = modifiedImage
        }
    },
    computed: {
            title () {
                return this.brandName + ' ' + this.product

            }
            
        }

})

var app = new Vue({
    el: '#app',
    
})


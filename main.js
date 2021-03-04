const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
      updateCart(id) {
        this.cart.push(id)
      },
      removeById(id) {
        /*
        My answer "doesn't work" because
        it removes all the products with same id at once.
        */
        // this.cart = this.cart.filter((item) => item !== id)

        // this solution only remove 1 each time
        const index = this.cart.indexOf(id)
        if (index > -1) {
            this.cart.splice(index, 1)
        }
      }
    }
})

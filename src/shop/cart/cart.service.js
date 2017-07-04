class CartService {
    constructor(localStorageService, $q, shopOrderService) {
        'ngInject';
        this.localStorageService = localStorageService;
        this.$q = $q;
        this.shopOrderService = shopOrderService;
    }

    getItems() {
        const items = this.localStorageService.get('cart') || [];

        return this.$q.resolve(items);
    }

    removeItem(item) {
        let deffered = this.$q.defer();

        this.getItems().then(items => {
            for (let index = items.length - 1; index >= 0; index--) {
                if (items[index].product.id == item.product.id) {
                    items.splice(index, 1);
                }
            }

            this.localStorageService.set('cart', items);
            deffered.resolve();
        });

        return deffered.promise;
    }

    getTotals() {
        let totals = [];

        return this.getItems().then(items => {
            // sub-total
            let subtotal = items.reduce((previous, current) => {
                return previous + this.getItemTotal(current);
            }, 0);

            totals.push({
                name: 'subtotal',
                value: subtotal,
                title: 'Subtotal'
            });

            return totals;
        });
    }

    getItemTotal(item) {
        return item.quantity * item.product.price;
    }

    addProduct(product, quantity = 1) {
        let deffered = this.$q.defer();

        this.getItems().then(items => {
            let existingItem = items.find(item => item.product.id == product.id);

            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                items.push({
                    product,
                    quantity
                });
            }

            this.localStorageService.set('cart', items);
            deffered.resolve();
        });

        return deffered.promise;
    }

    clear() {
        this.localStorageService.set('cart', []);

        return this.$q.resolve();
    }
}

export default CartService;
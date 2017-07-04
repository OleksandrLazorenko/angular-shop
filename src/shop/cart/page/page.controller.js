class PageController {
    constructor(shopCartService, shopOrderService, $state, $q, notify) {
        'ngInject';
        this.shopCartService = shopCartService;
        this.shopOrderService = shopOrderService;
        this.$state = $state;
        this.$q = $q;
        this.notify = notify;
    }

    isEmpty() {
        return !this.items.length;
    }

    goToCatalog() {
        this.$state.go('catalog');
    }

    deleteItem(item) {
        this.shopCartService.removeItem(item)
            .then(() => this.update());
    }

    createOrder() {
        this.shopOrderService.createOrder(this.items, this.totals)
            .then(() => this.shopCartService.clear())
            .then(() => this.notify({
                message: 'Your order is placed successfully',
                duration: 3000,
                position: 'right'
            }))
            .then(() => this.$state.go('orders'));
    }

    update() {
        let promises = [];

        promises.push(this.shopCartService.getItems());
        promises.push(this.shopCartService.getTotals());

        return this.$q.all(promises)
            .then(data => {
                [this.items, this.totals] = data;
            })
    }
}

export default PageController;
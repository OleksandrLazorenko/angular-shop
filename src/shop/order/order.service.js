class OrderService {
    constructor(localStorageService, $q, $filter) {
        'ngInject';
        this.localStorageService = localStorageService;
        this.$q = $q;
        this.$filter = $filter;
    }

    createOrder(items, totals) {
        let deffered = this.$q.defer();

        this.getOrders().then(orders => {
            orders.push({
                items,
                totals,
                date: new Date()
            });

            this.localStorageService.set('orders', orders);
            deffered.resolve();
        });

        return deffered.promise;
    }

    getOrders() {
        let orders = this.localStorageService.get('orders') || [];
        orders = this.$filter('orderBy')(orders, '-date');

        return this.$q.resolve(orders);
    }
}

export default OrderService;
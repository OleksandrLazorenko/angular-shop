class PageController {
    constructor($state) {
        'ngInject';
        this.$state = $state;
    }

    isEmpty() {
        return !this.orders.length;
    }

    continueShopping() {
        this.$state.go('catalog');
    }

    goToCart() {
        this.$state.go('cart');
    }
}

export default PageController;
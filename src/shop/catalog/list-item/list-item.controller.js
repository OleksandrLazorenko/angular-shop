class ListItemController {
    constructor(shopCartService, notify) {
        'ngInject';
        this.shopCartService = shopCartService;
        this.notify = notify;
    }

    addToCart() {
        this.shopCartService.addProduct(this.product)
            .then(() => this.notify({
                message: `${this.product.name} was added to cart`,
                duration: 3000,
                position: 'right'
            }));
    }
}

export default ListItemController;
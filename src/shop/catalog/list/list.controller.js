class ListController {
    constructor(shopCatalogService) {
        'ngInject';
        this.searchText = '';
        this.orderBy = '-price';
        this.shopCatalogService = shopCatalogService;
    }

    updateProducts() {
        this.shopCatalogService.getProducts(this.searchText, this.orderBy)
            .then(products => this.products = products);
    }
}

export default ListController;
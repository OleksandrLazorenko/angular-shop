export default function ($stateProvider) {
    'ngInject';

    $stateProvider.state('catalog', {
        parent: 'shop',
        url: '',
        component: 'shopCatalogList',
        resolve: {
            products: shopCatalogService => shopCatalogService.getProducts()
        }
    });
}
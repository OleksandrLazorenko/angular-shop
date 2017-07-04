export default function ($stateProvider) {
    'ngInject';

    $stateProvider.state('cart', {
        parent: 'shop',
        url: 'cart',
        component: 'shopCartPage',
        resolve: {
            items: shopCartService => shopCartService.getItems(),
            totals: shopCartService => shopCartService.getTotals()
        }
    });
}
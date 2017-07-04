export default function ($stateProvider) {
    'ngInject';

    $stateProvider.state('orders', {
        parent: 'shop',
        url: 'orders',
        component: 'shopOrderPage',
        resolve: {
            orders: shopOrderService => shopOrderService.getOrders()
        }
    });
}
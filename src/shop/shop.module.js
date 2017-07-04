import angular from 'angular';
import commonModule from './common/common.module';
import catalogModule from './catalog/catalog.module';
import cartModule from './cart/cart.module';
import orderModule from './order/order.module';
import layoutModule from './layout/layout.module';

const shopModule = angular.module('shop', [
    commonModule.name,
    catalogModule.name,
    cartModule.name,
    orderModule.name,
    layoutModule.name
]);

export default shopModule;

import angular from 'angular';
import commonModule from '../common/common.module';
import orderConfig from './order.config';
import OrderService from './order.service';
import pageComponent from './page/page.component';
import listComponent from './list/list.component';

const orderModule = angular
    .module('shop.order', [commonModule.name])
    .config(orderConfig)
    .service('shopOrderService', OrderService)
    .component('shopOrderPage', pageComponent)
    .component('shopOrderList', listComponent);

export default orderModule;

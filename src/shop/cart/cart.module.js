import angular from 'angular';
import CartService from './cart.service';
import cartConfig from './cart.config';
import pageComponent from './page/page.component';
import listComponent from './list/list.component';
import totalsComponent from './totals/totals.component';

const cartModule = angular.module('shop.cart', [])
    .service('shopCartService', CartService)
    .config(cartConfig)
    .component('shopCartPage', pageComponent)
    .component('shopCartList', listComponent)
    .component('shopCartTotals', totalsComponent);

export default cartModule;

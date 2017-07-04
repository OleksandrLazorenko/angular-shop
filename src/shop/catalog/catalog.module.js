import angular from 'angular';
import commonModule from '../common/common.module';
import listComponent from './list/list.component';
import listItemComponent from './list-item/list-item.component';
import CatalogService from './catalog.service';
import catalogConfig from './catalog.config';

const catalogModule = angular.module('shop.catalog', [commonModule.name])
    .component('shopCatalogList', listComponent)
    .component('shopCatalogListItem', listItemComponent)
    .service('shopCatalogService', CatalogService)
    .config(catalogConfig);

export default catalogModule;

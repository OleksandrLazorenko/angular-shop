import angular from 'angular';
import './index.scss';
import shopModule from './shop/shop.module';

angular.bootstrap(document, [shopModule.name], {strictDi: true});
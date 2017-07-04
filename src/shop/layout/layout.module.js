import angular from 'angular';
import commonModule from '../common/common.module';
import layoutConfig from './layout.config';
import headerComponent from './header/header.component';

const layoutModule = angular
    .module('shop.layout', [commonModule.name])
    .config(layoutConfig)
    .component('shopLayoutHeader', headerComponent);

export default layoutModule;

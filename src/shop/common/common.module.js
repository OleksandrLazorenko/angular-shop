import angular from 'angular';
import '@uirouter/angularjs';
import '@cgross/angular-notify'
import 'angular-local-storage';
import joinFilter from './join/join.filter';

const commonModule = angular.module('shop.common', ['ui.router', 'cgNotify', 'LocalStorageModule'])
    .filter('join', joinFilter);

export default commonModule;

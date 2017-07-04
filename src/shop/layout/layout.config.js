import layoutTemplate from './layout.html';

export default function ($urlRouterProvider, $locationProvider, $stateProvider) {
    'ngInject';

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode({enabled: true, requireBase: false});

    $stateProvider.state('shop', {
        abstract: true,
        url: '/',
        views: {
            '': {
                template: layoutTemplate
            }
        }
    });
}
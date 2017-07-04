const products = [
    {id: 1, name: 'Margarita', ingredients: ['basil', 'tomato', 'mozzarella'], price: 5.75},
    {id: 2, name: 'Peperoni', ingredients: ['peperoni', 'tomato', 'mozzarella', 'parmejano'], price: 7.00},
    {id: 3, name: 'Meat', ingredients: ['bacon', 'tomato', 'mozzarella', 'ham', 'salami'], price: 12.00},
    {id: 4, name: 'Marina', ingredients: ['shrimp', 'parmejano', 'tuna', 'galric'], price: 15.75}
];

class CatalogService {
    constructor($q, $filter) {
        'ngInject';
        this.$q = $q;
        this.$filter = $filter;
    }

    getProducts(filter = '', sortBy = '-price') {
        let data = this.$filter('filter')(products, {name: filter});
        data = this.$filter('orderBy')(data, sortBy);

        return this.$q.resolve(data);
    }
}

export default CatalogService;
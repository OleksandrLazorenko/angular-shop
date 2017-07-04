class HeaderController {
    constructor($state) {
        'ngInject';
        this.$state = $state;
        this.items = [
            {
                state: 'catalog',
                label: 'Home'
            },
            {
                state: 'cart',
                label: 'Cart'
            },
            {
                state: 'orders',
                label: 'History'
            },
        ];
    }

    isActiveItem(item) {
        return this.$state.includes(item.state);
    }
}

export default HeaderController;
import ListController from './list.controller';
import listTemplate from './list.component.html';

const listComponent = {
    bindings: {
        orders: '<'
    },
    template: listTemplate,
    controller: ListController
}

export default listComponent;
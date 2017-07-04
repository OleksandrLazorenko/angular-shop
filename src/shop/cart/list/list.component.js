import listTemplate from './list.component.html';
import ListController from './list.controller';

const listComponent = {
    bindings: {
        items: '<',
        onItemDelete: '&'
    },
    template: listTemplate,
    controller: ListController
}

export default listComponent;
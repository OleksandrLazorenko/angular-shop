import ListItemController from './list-item.controller';
import listItemTemplate from './list-item.component.html';

const listItemComponent = {
    bindings: {
        product: '<'
    },
    template: listItemTemplate,
    controller: ListItemController
}

export default listItemComponent;
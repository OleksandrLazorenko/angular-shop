import pageTemplate from './page.component.html';
import PageController from './page.controller';

const pageComponent = {
    bindings: {
        orders: '<'
    },
    template: pageTemplate,
    controller: PageController
}

export default pageComponent;
import totalsTemplate from './totals.component.html';
import TotalsController from './totals.controller';

const totalsComponent = {
    bindings: {
        totals: '<'
    },
    template: totalsTemplate,
    controller: TotalsController
}

export default totalsComponent;
class ListController {
    getProductNames(order) {
        return order.items.map(item => item.product.name);
    }

    getSubtotal(order) {
        let subtotal = order.totals.find(total => total.name == 'subtotal');

        return subtotal.value;
    }
}

export default ListController;
export default {
  showCart(state) {
    return state.showCart;
  },
  cart(state) {
    return state.cart;
  },
  totalCartProducts(state) {
    return state.cart.reduce(function (acc, item) {
      return acc + item.amount;
    }, 0);
  },
};

export default {
  toggleCartModal(context) {
    const showCart = !context.getters.showCart;
    context.commit("setShowCart", showCart);
  },
  addToCartHandler(context, payload) {
    const cart = context.getters.cart;
    const existingCartItemIndex = cart.findIndex(
      (item) => item.name === payload.shopItem.name
    );
    const existingCartItem = cart[existingCartItemIndex];
    let updatedItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + 1,
      };
      updatedItems = [...cart];
      updatedItems[existingCartItemIndex] = updatedItem;
      context.commit("setCart", updatedItems);
    } else {
      cart.push(payload.shopItem);
      context.commit("setCart", cart);
    }
  },

  removeProductHandler(context, payload) {
    let cart = context.getters.cart;
    const existingCartItemIndex = cart.findIndex(
      (item) => item.name === payload.shopItem.name
    );
    const existingCartItem = cart[existingCartItemIndex];
    let updatedItems;
    if (existingCartItem.amount > 1) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedItems = [...cart];
      updatedItems[existingCartItemIndex] = updatedItem;
      context.commit("setCart", updatedItems);
    } else {
      cart = cart.filter((item) => item.name !== payload.shopItem.name);
      context.commit("setCart", cart);
    }
  },
};

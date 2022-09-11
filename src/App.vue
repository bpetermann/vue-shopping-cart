<template>
  <teleport to="body">
    <CartModal
      v-if="showCart"
      :cart="cart"
      @toggleCart="toggleCartModal"
      @addProduct="addToCartHandler"
      @removeProduct="removeProductHandler"
    />
  </teleport>
  <TheHeader
    @toggleCart="toggleCartModal"
    :totalCartProducts="totalCartProducts"
  />
  <TheSearchbar @searchTermHandler="searchTermHandler" />
  <TheCategories
    @selectCategory="selectCategoryHandler"
    :active="categoryActive"
  />
  <TheHero @selectCategory="selectCategoryHandler" />
  <ProductHighlight
    :product="highlightedProduct"
    @addProduct="addToCartHandler"
  />
  <ProductsOverview
    :products="filteredItems"
    @selectHighlightedProduct="selectHighlightedProduct"
    @addProduct="addToCartHandler"
  />
  <TheNewsletter />
  <TheFooter />
</template>

<script>
import CartModal from "./components/cart/CartModal.vue";
import TheHeader from "./components/layout/TheHeader.vue";
import TheSearchbar from "./components/layout/TheSearchbar.vue";
import TheCategories from "./components/layout/TheCategories.vue";
import TheHero from "./components/layout/TheHero.vue";
import ProductHighlight from "./components/products/ProductHighlight.vue";
import ProductsOverview from "./components/products/ProductsOverview.vue";
import TheNewsletter from "./components/layout/TheNewsletter.vue";
import TheFooter from "./components/layout/TheFooter.vue";

export default {
  components: {
    CartModal,
    TheHeader,
    TheSearchbar,
    TheCategories,
    TheHero,
    ProductHighlight,
    ProductsOverview,
    TheNewsletter,
    TheFooter,
  },
  name: "app",
  data() {
    return {
      highlightedProduct: null,
      cart: [],
      showCart: false,
      selectedCategory: null,
      filteredItems: null,
      searchTerm: "",
      products: [
        {
          id: "i1",
          name: "Sandals",
          description: "Maroon sandals",
          price: 24.99,
          amount: 1,
          category: "Shoes",
        },
        {
          id: "i2",
          name: "Brogues",
          description: "Mint green lace up brogues",
          price: 85.99,
          amount: 1,
          category: "Shoes",
        },
        {
          id: "i3",
          name: "Sneakers",
          description: "Multi-coloured Sneakers",
          price: 69.99,
          amount: 1,
          category: "Shoes",
        },
        {
          id: "i4",
          name: "Handbag",
          description: "Brown leather handbag",
          price: 89.99,
          amount: 1,
          category: "Bags",
        },
      ],
    };
  },
  beforeMount() {
    this.selectCategoryHandler("Shoes");
    this.selectHighlightedProduct(this.selectedCategory[0].id);
  },
  computed: {
    totalCartProducts() {
      return this.cart.reduce(function (acc, item) {
        return acc + item.amount;
      }, 0);
    },
    categoryActive() {
      return this.selectedCategory[0].category;
    },
  },
  methods: {
    selectHighlightedProduct(prodId) {
      const selectedProduct = this.filteredItems.filter(
        (prod) => prod.id === prodId
      );
      this.highlightedProduct = selectedProduct[0];
    },
    selectCategoryHandler(category) {
      this.selectedCategory = this.products.filter((prod) => {
        return prod.category.toLowerCase().includes(category.toLowerCase());
      });
      this.searchTermHandler(this.searchTerm);
    },
    searchTermHandler(text) {
      this.searchTerm = text;
      this.filteredItems = this.selectedCategory.filter((prod) => {
        return prod.description.toLowerCase().includes(text.toLowerCase());
      });
    },
    addToCartHandler(shopItem) {
      const existingCartItemIndex = this.cart.findIndex(
        (item) => item.name === shopItem.name
      );
      const existingCartItem = this.cart[existingCartItemIndex];
      let updatedItems;
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + 1,
        };
        updatedItems = [...this.cart];
        updatedItems[existingCartItemIndex] = updatedItem;
        this.cart = updatedItems;
      } else {
        this.cart.push(shopItem);
      }
    },
    removeProductHandler(shopItem) {
      const existingCartItemIndex = this.cart.findIndex(
        (item) => item.name === shopItem.name
      );
      const existingCartItem = this.cart[existingCartItemIndex];
      let updatedItems;
      if (existingCartItem.amount > 1) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount - 1,
        };
        updatedItems = [...this.cart];
        updatedItems[existingCartItemIndex] = updatedItem;
        this.cart = updatedItems;
      } else {
        this.cart = this.cart.filter((item) => item.name !== shopItem.name);
      }
    },
    toggleCartModal() {
      this.showCart = !this.showCart;
    },
  },
};
</script>

<style scoped></style>

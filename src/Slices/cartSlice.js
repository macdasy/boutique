import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      localStorage.setItem('cartItems', JSON.stringify(action.payload));
      console.log(action.payload);

      const existingIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingIndex >= 0) {
        state.cartItems[existingIndex] = {
          ...state.cartItems[existingIndex],
          cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
        };
        console.log(state.cartItems[existingIndex]);
        toast.info("Increased product quantity", {
          position: "bottom-left",
        });
        state.cartTotalAmount += state.cartItems[existingIndex].price;

      } else {
        let tempProductItem = { ...action.payload, cartQuantity: 1 };
        console.log(tempProductItem);
        state.cartItems.push(tempProductItem);
        console.log('added');
        toast.success("Product added to cart", {
          position: "bottom-left",
        });
        state.cartTotalAmount += action.payload.price;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      state.cartTotalQuantity += 1;
    },
    decreaseCart(state, action) {
      console.log(action.payload);
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        state.cartTotalAmount -= state.cartItems[itemIndex].price;

        toast.info("Decreased product quantity", {
          position: "bottom-left",
        });
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );

        state.cartItems = nextCartItems;
        state.cartTotalAmount -= action.payload.price;
        toast.error("Product removed from cart", {
          position: "bottom-left",
        });
      }
      state.cartTotalQuantity -= 1;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      state.cartItems.map((cartItem) => {
        let count, price;
        if (cartItem.id === action.payload.id) {
          count = cartItem.cartQuantity;
          price = cartItem.price;
          const nextCartItems = state.cartItems.filter(
            (item) => item.id !== cartItem.id
          );
          
          state.cartTotalQuantity -= count;
          state.cartTotalAmount -= (price * count);
          state.cartItems = nextCartItems;

          toast.error("Product removed from cart", {
            position: "bottom-left",
          });
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        return state;
      });
    },
    getTotals(state) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
    clearCart(state, action) {
      state.cartItems = [];
      state.cartTotalAmount = 0;
      state.cartTotalQuantity = 0;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error("Cart cleared", { position: "bottom-left" });
    },
  },
});

export const { addToCart, decreaseCart, removeFromCart, getTotals, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;

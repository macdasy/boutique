import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
import 'font-awesome/css/font-awesome.min.css';
import { Provider } from 'react-redux';
import 'animate.css';


import { configureStore } from "@reduxjs/toolkit";
import productsReducer, { productsFetch } from "./Slices/productsSlice";
import cartReducer, { getTotals } from "./Slices/cartSlice";
import { productsApi } from "./Slices/productsApi";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

store.dispatch(productsFetch());
store.dispatch(getTotals());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

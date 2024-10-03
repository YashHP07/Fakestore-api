// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface Product {
//   id: number;
//   title: string;
//   price: number;
//   quantity: number;
// }

// interface CartState {
//   products: Product[];
// }

// const initialState: CartState = {
//   products: [],
// };

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addToCart: (state, action: PayloadAction<Product>) => {
//       const existingProduct = state.products.find(p => p.id === action.payload.id);
//       if (existingProduct) {
//         existingProduct.quantity += 1;
//       } else {
//         state.products.push({ ...action.payload, quantity: 1 });
//       }
//     },
//     removeFromCart: (state, action: PayloadAction<number>) => {
//       state.products = state.products.filter(product => product.id !== action.payload);
//     },
//     decrementQuantity: (state, action: PayloadAction<number>) => {
//       const product = state.products.find(p => p.id === action.payload);
//       if (product && product.quantity > 1) {
//         product.quantity -= 1;
//       } else {
//         state.products = state.products.filter(p => p.id !== action.payload);
//       }
//     },
//   },
// });

// export const { addToCart, removeFromCart, decrementQuantity } = cartSlice.actions;
// export default cartSlice.reducer;




import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

interface CartState {
  products: Product[];
}

const initialState: CartState = {
  products: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingProduct = state.products.find(p => p.id === action.payload.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(product => product.id !== action.payload);
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const product = state.products.find(p => p.id === action.payload);
      if (product) product.quantity += 1;
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const product = state.products.find(p => p.id === action.payload);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      } else {
        state.products = state.products.filter(p => p.id !== action.payload);
      }
    },
  },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;

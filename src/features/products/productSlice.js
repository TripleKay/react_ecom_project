import { createSlice } from "@reduxjs/toolkit";

//declare state;
const initialState = {
  products : [],
  product : {}
}

//create slice and reducers
export const productSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {
    fetchProducts : (state,{payload})=>{ //state,action(type,playload)
      state.products = payload;
    },

    selectedProduct: (state,{payload})=> {
      state.product = payload;
    },

    removeSelectedProduct : (state) => {
      state.product = {}
    }
  }
});

//genreate actions from slice and export;
export const {fetchProducts,selectedProduct,removeSelectedProduct} = productSlice.actions;

export const getAllProducts = state => state.productReducer.products;
//export reducers
export default productSlice.reducer;
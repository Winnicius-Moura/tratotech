import { configureStore } from "@reduxjs/toolkit";
import sliceCategorias from "./reducers/categorias";
import sliceItens from './reducers/itens';
import cartSlice from './reducers/cart';

const store = configureStore({
    reducer: {
        categorias: sliceCategorias,
        itens: sliceItens,
        cart: cartSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>
export default store;
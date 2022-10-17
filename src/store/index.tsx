import { configureStore } from "@reduxjs/toolkit";
import sliceCategorias from "./reducers/categorias";
import sliceItens from './reducers/itens';

const store = configureStore({
    reducer: {
        categorias: sliceCategorias,
        itens: sliceItens,
    }
});

export default store;
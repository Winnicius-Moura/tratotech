import { configureStore } from "@reduxjs/toolkit";
import sliceCategorias from "./reducers/categorias";

const store = configureStore({
    reducer: {
        categorias: sliceCategorias
    }
});

export default store;
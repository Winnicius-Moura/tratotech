import { createSlice } from "@reduxjs/toolkit";

interface cartProps{
    id: number,
    quantidade: number,
}

const INITIAL_STATE:cartProps[] = [];


const cartSlice = createSlice({
    name: 'cart',
    initialState: INITIAL_STATE,
    reducers:{
        addToCart:(state, {payload}) => {
            const onCartItem = (state.some(item => item.id === payload))
            if(!onCartItem) return [
                ...state,
                {
                    id:payload,
                    quantidade: 1,
                }
            ];
            return state.filter(item => item.id !== payload)
        }    
    }
});

export const {addToCart} = cartSlice.actions;

export default cartSlice.reducer;

export const useCart = (state:any) => {
    return state.cart as cartProps[];
}
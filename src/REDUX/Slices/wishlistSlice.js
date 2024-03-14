import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name:'wishlist',
    initialState:[],
    reducers:{
        addWishItem:(state,action)=>{
            state.push(action.payload)
        },
        removeWishlistItem:(state,action)=>{
            return state.filter(item=>item.id!==action.payload)
        }
    }
})

export const {addWishItem,removeWishlistItem} = wishlistSlice.actions
export default wishlistSlice.reducer
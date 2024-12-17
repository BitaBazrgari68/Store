import { configureStore, createSlice } from "@reduxjs/toolkit";
const shopSlice = createSlice({
    name: "cart",
    initialState: { cartItems: [],sumPrice:0},
    reducers: {
        addToCart: (state, action) => {

            if (!state.cartItems?.find((item) => item.id === action.payload.id)) {
                state.cartItems = [...state.cartItems, { id: action.payload.id,img:action.payload.img,title:action.payload.title,price:action.payload.price, count: 1 }];
               state.sumPrice=state.sumPrice+action.payload.price;
            }
            else {
                state.cartItems?.map((item) => {
                    if (item.id === action.payload.id) {
                        item.count = item.count + 1;
                        state.sumPrice=state.sumPrice+item.price;
                        // console.log("opps",action.payload.id)
                        // return { ...item, count: item.count + 1 }
                    }
                    else
                        return item
                })
            }
        },

        removeFromCart: (state, action) => {
            state.cartItems.map((i) => {
                if (i.id === action.payload.id && i.count > 0){
                    i.count = i.count - 1;
                    state.sumPrice=state.sumPrice-i.price;
                }
               // return { ...i, count: i.count === 0 ? 0 : i.count - 1 }
                else return i
            })
        },
    }
})

export const { addToCart, removeFromCart } = shopSlice.actions
export const store = configureStore({
    reducer: {
        cart: shopSlice.reducer
    }
})
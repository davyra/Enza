import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalAmount: 0
    },
    reducers: {
        addItem(state, action) {
            const newItem = action.payload
            const existingItem = state.items.find((item) => item.id === newItem.id)

            state.totalAmount += newItem.cost * newItem.quantity

            if (!existingItem) {
                state.items.push(newItem)
            } else {
                existingItem.quantity += newItem.quantity
            }
        },
        removeItem(state, action) {
            const id = action.payload

            const existingItem = state.items.find((item) => item.id === id)

            if (existingItem) {
                state.totalAmount -= existingItem.cost * existingItem.quantity
                state.items = state.items.filter((item) => item.id !== id)
            }
        },
        clearCart(state) {
            state.items = []
            state.totalAmount = 0
        }
    }
})

export const { addItem, removeItem, clearCart } = cartSlice.actions

export default cartSlice.reducer

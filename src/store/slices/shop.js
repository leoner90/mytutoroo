import { createSlice } from '@reduxjs/toolkit'

//init
const initialState = {
  money: 1230,
  plantInHand: null,
}

//change
export const ShopSlice = createSlice({
  name: 'Shop',
  initialState,
  reducers: {
    setPlantInHand: (state, action) => {
      state.money = action.payload
    },
  },
})

//export
export const { setPlantInHand } = ShopSlice.actions
export default ShopSlice.reducer

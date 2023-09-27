import { createSlice } from '@reduxjs/toolkit'
import { api } from '../services'
//init
const initialState = {
  phoneNumber: '071818181546',
  location: 'Salford',
  testimonials: [],
}

//change
export const ShopSlice = createSlice({
  name: 'Shop',
  initialState,
  //local manipulation
  reducers: {
    setPlantInHand: (state, action) => {
      state.money = action.payload
    },
  },
  //to call after mutation e.g. DB call
  extraReducers: builder => {
    builder.addMatcher(api.endpoints.getTestimonials.matchFulfilled, (state, action) => {
      // state.testimonials = JSON.parse(action.payload);
      state.testimonials = action.payload;
    })   
  },
})

//export
export const { setPlantInHand } = ShopSlice.actions
export default ShopSlice.reducer

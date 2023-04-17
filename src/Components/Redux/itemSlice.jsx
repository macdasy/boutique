import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: []
  },
  reducers: {
    addItem: (state, action) => {
        console.log(action);
        state.value = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { addItem } = counterSlice.actions

export default counterSlice.reducer
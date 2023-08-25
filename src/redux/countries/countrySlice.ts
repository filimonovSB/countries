import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { TCountry, TSliceState, status } from './countryTypes'
import { fetchCountries } from './countryThunks'


const initialState: TSliceState = {
    countries: [],
    status: status.LOADING,
}

const countrieSlice = createSlice({
    name: 'countrie',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchCountries.fulfilled, (state, action: PayloadAction<TCountry[]>) => {
            state.countries = action.payload
            state.status = status.SUCCES
        })
        builder.addCase(fetchCountries.rejected, (state, action) => {
            state.status = status.ERROR
        })
        builder.addCase(fetchCountries.pending, (state, action) => {
            state.status = status.LOADING
        })

    },

})

export default countrieSlice.reducer
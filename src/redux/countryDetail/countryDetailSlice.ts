import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { TCountryDetail, TCountryDetailInitialState } from './countryDetailTypes'
import { status } from '../countries/countryTypes'
import { fetchDetailCountry, fetchNeighborsByBorder } from './counttyDetailThunks'


export const initialState: TCountryDetailInitialState = {
    data: {
        borders: [],
        capital: [],
        currencies: [],
        cca2: "",
        flags: {
            png: "",
            svg: "",
            alt: ""
        },
        languages: {},
        name: {
            common: "",
            official: "",
            nativeName: {},
        },
        population: 0,
        region: "",
        subregion: "",
        tld: ""
    },
    status: status.LOADING,
    neighbors: []
}

const countryDetaiSlice = createSlice({
    name: 'countryDetail',
    initialState,
    reducers: {
        clearCountryDetail(state, action) {
            state = initialState
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchDetailCountry.fulfilled, (state, action: any) => {
            state.data = action.payload
        })
        builder.addCase(fetchNeighborsByBorder.fulfilled, (state, action: any) => {
            if (action.payload.length > 0)
                state.neighbors = action.payload.map((n: any) => { return { name: n.name.common, cca2: n.cca2 } })
        })

    },

})

export const { clearCountryDetail } = countryDetaiSlice.actions

export default countryDetaiSlice.reducer
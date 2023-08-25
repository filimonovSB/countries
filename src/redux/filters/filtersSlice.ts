import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export enum regions {
    Africa = 'Africa',
    Europa = 'Europa',
    Oceania = 'Oceania',
    Americas = 'Americas',
    Asia = 'Asia',
    Undefined = ''
}

type TFiltersState = {
    search: string
    sortRegion: regions
}

const initialState: TFiltersState = {
    search: '',
    sortRegion: regions.Undefined

}

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setRegion(state, action: PayloadAction<regions>) {
            state.sortRegion = action.payload
        },
        clearRegion(state, action) {
            state.sortRegion = regions.Undefined
        },
        setSearch(state, action: PayloadAction<string>) {
            state.search = action.payload
        },


    },

})

export const { setRegion, setSearch } = filtersSlice.actions

export default filtersSlice.reducer
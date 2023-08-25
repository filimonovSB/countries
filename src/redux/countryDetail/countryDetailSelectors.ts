import { RootState } from "../store"

export const selectCountryDetail = (state: RootState) => state.countryDetail.data

export const selectNeighbors = (state: RootState) => state.countryDetail.neighbors
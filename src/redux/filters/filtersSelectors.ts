import { RootState } from "../store";

export const getSortRegion = (state: RootState) => state.filters.sortRegion

export const getSearch = (state: RootState) => state.filters.search
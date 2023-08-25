import { RootState } from "../store";

export const selectAllCounntries = (state: RootState) => state.countrie.countries

export const selectVisibleCountries = ({ search = '', region = '' }) => (state: RootState) =>
    state.countrie.countries.filter(
        country => (country.name.common.toLocaleLowerCase().includes(search.toLocaleLowerCase()) && country.region.includes(region))
    )
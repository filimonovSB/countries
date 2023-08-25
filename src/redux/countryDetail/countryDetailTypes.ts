import { status } from './../countries/countryTypes';
import { TFlag, TNameCountrie, currency } from "../../types/country"


export type TCountryDetail = {
    name: TNameCountrie
    region: string
    subregion: string
    flags: TFlag
    cca2: string
    population: number
    capital: string[]
    languages: Record<string, string>
    currencies: currency[]
    tld: string
    borders: string[]
}
export type TCountryDetailInitialState = {
    data: TCountryDetail
    status: status
    neighbors: {
        name: string,
        cca2: string
    }[]
}
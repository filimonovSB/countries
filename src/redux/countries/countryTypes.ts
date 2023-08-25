import { TFlag, TNameCountrie, TNativeName } from "../../types/country"


export enum status {
    LOADING = 'loading',
    SUCCES = 'succes',
    ERROR = 'error'
}

export type TCountry = {
    flags: TFlag
    name: TNameCountrie
    cca2: string
    population: number
    region: string
    capital: string[]
}

export type TSliceState = {
    countries: TCountry[],
    status: status,
}
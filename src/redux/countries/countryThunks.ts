import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { TCountry } from './countryTypes';

const baseUrl = 'https://restcountries.com/v3.1/'
const queryParams = 'name,region,subregion,languages,capital,currencies,population,borders,flags,tld,cca2'

export const fetchCountries = createAsyncThunk(
    'countrie/fetchCountries',
    async () => {
        try {
            const { data } = await axios.get<TCountry[]>(`${baseUrl}all?fields=${queryParams}`)
            return data
        } catch (error) {
            console.log(error);
        }
        return []
    }
)


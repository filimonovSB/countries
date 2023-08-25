import { createAsyncThunk } from "@reduxjs/toolkit";
import { initialState } from "./countryDetailSlice";
import axios from "axios";
import { TCountryDetail } from "./countryDetailTypes";


const baseUrl = 'https://restcountries.com/v3.1/'
const queryParams = 'name,region,subregion,languages,capital,currencies,population,borders,flags,tld,cca2'

export const fetchDetailCountry = createAsyncThunk(
    'countrie/fetchDetailCountry',
    async (name: string) => {
        console.log('Загружаю новую страну');

        try {
            const { data } = await axios.get<TCountryDetail>(`${baseUrl}alpha/${name}?fields=${queryParams}`)
            return data
        } catch (error) {
            console.log(error);
        }

        return initialState
    }
)


export const fetchNeighborsByBorder = createAsyncThunk(
    'countrie/fetchNeighborsByBorder',
    async (Neighbors: string[]) => {
        try {
            console.log('Fetch?');
            const { data } = await axios.get(`${baseUrl}alpha?codes=${Neighbors.join(',')}&fields=name,cca2`)
            return data
        } catch (error) {
            console.log(error);
        }

        return initialState
    }
)
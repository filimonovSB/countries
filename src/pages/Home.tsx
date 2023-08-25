import React, { useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux'

import Box from '../components/box/Box'
import Filters from '../components/filters/Filters'
import { useAppDispatch } from '../redux/store'
import { fetchCountries } from '../redux/countries/countryThunks'
import CountryList from '../components/country-list/CountryList'
import { selectVisibleCountries } from '../redux/countries/countrySelectors'
import { getSearch, getSortRegion } from '../redux/filters/filtersSelectors'

const Home: React.FC = () => {
    const dispatch = useAppDispatch()
    const search = useSelector(getSearch)
    const region = useSelector(getSortRegion)
    const countries = useSelector(
        useMemo(() => {
            return selectVisibleCountries({ search, region })
        }, [region, search])
    )

    useEffect(() => {
        dispatch(fetchCountries())
    }, [dispatch])

    return (
        <div>
            <Box mt='40px'>
                <Filters />
            </Box>
            <Box mt='40px'>
                <CountryList countries={countries} />
            </Box>
        </div >
    )
}

export default Home
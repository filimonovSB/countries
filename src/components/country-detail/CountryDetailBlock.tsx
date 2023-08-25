import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import style from './CountryDetailBlock.module.scss'
import { useAppDispatch } from '../../redux/store'
import { fetchDetailCountry, fetchNeighborsByBorder } from '../../redux/countryDetail/counttyDetailThunks'
import { selectCountryDetail, selectNeighbors } from '../../redux/countryDetail/countryDetailSelectors'
import Box from '../box/Box'
import { clearCountryDetail } from '../../redux/countryDetail/countryDetailSlice'
import Button from '../button/Button'
import { formatNumberWithCommas } from '../../utils'


const CountryDetailBlock: React.FC = () => {
    const dispatch = useAppDispatch()
    const { name } = useParams()
    const country = useSelector(selectCountryDetail)
    const neighbors = useSelector(selectNeighbors)

    useEffect(() => {
        dispatch(fetchDetailCountry(name || ""))

        return () => {
            dispatch(clearCountryDetail)
        }

    }, [name, dispatch])

    useEffect(() => {
        dispatch(fetchNeighborsByBorder(country.borders))
        return () => {
            dispatch(clearCountryDetail)
        }
    }, [country, dispatch])

    if (!neighbors[0] || !country.flags)
        return <>"Нет данных"</>

    return (
        <div className={style.country}>
            <img className={style.country__image}
                src={country.flags.png} alt=""
            />
            <div className={style.country__content}>
                <h2 className={style.country__title}>
                    {country.name.common}
                </h2>
                <div className={style.country__text}>
                    <div className={style.country__text_left}>
                        <p>
                            <span className='text-bold'>Native Name:</span>
                            {country.name.official}
                        </p>
                        <p>
                            <span className='text-bold'>Population:</span>
                            {formatNumberWithCommas(country.population)}
                        </p>
                        <p>
                            <span className='text-bold'>Region:</span>
                            {country.region}
                        </p>
                        <p>
                            <span className='text-bold'>Sub Region:</span>
                            {country.subregion}
                        </p>
                        <p>
                            <span className='text-bold'>Capital:</span>
                            {country.capital.join(', ')}
                        </p>
                    </div>
                    <div className={style.country__text_right}>
                        <p>
                            <span className='text-bold'>Top level Domain:</span>
                            {country.tld}
                        </p>
                        <p>
                            <span className='text-bold'>Currencies:</span>
                            {Object.values(country.currencies).map((c, index) => { return index < Object.values(country.currencies).length - 1 ? c.name + ", " : c.name })
                            }
                        </p>
                        <p>
                            <span className='text-bold'>Languages:</span>
                            {Object.values(country.languages).join(', ')}
                        </p>
                    </div>
                </div>
                <div className={style.country__border}>
                    <span className='text-bold'>Border Countries: </span>
                    {neighbors &&
                        neighbors.map(n =>
                            <Box mr='8px' ml='8px' mt='15px'>
                                <Link to={`/${n.cca2}`}>
                                    <Button>
                                        {n.name}
                                    </Button>
                                </Link>
                            </Box>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default CountryDetailBlock
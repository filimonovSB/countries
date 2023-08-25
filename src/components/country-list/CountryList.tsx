import React from 'react'
import { Link } from 'react-router-dom'

import { TCountry } from '../../redux/countries/countryTypes'
import style from './CounteList.module.scss'
import CountryBlock from '../country-block/CountryBlock'

interface ICountreList {
    countries: TCountry[]
}

const CountryList: React.FC<ICountreList> = ({ countries }) => {
    return (
        <div className={style.wrapper}>
            {countries &&
                countries.map((c, i) => <Link to={`/${c.cca2}`} key={i}> <CountryBlock {...c} key={c.cca2} /> </Link>)
            }
        </div>
    )
}

export default CountryList
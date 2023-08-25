import React from 'react'

import style from './CountryBlock.module.scss'
import { TCountry } from '../../redux/countries/countryTypes'
import { formatNumberWithCommas } from '../../utils'

const CountryBlock: React.FC<TCountry> = ({ flags, name, population, region, capital }) => {
    return (
        <div className={style.wrapper}>
            <img src={flags.png}
                className={style.wrapper__image}
                alt={flags.alt}
            />
            <div className={style.wrapper__content}>
                <h4 className={style.wrapper__title}>
                    {name.common}
                </h4>
                <div>
                    <span className="text-bold">Population:</span>
                    {formatNumberWithCommas(population)}
                </div>
                <div>
                    <span className="text-bold">Region:</span>
                    {region}
                </div>
                <div>
                    <span className="text-bold">Capital:</span>
                    {capital.join(', ')}
                </div>
            </div>
        </div>
    )
}

export default CountryBlock
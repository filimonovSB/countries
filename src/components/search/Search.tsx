import React from 'react'
import { useSelector } from 'react-redux'

import style from './Search.module.scss'
import serchIcon from '../../assets/icons/icon-search.svg'
import { useAppDispatch } from '../../redux/store'


import { setSearch } from '../../redux/filters/filtersSlice'
import { getSearch } from '../../redux/filters/filtersSelectors'

const Search: React.FC = () => {
    const dispatch = useAppDispatch()
    const searchValue = useSelector(getSearch)

    const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearch(e.target.value))
    }

    return (
        <div className={style.wrapper}>
            <img src={serchIcon} className={style.icon} alt="search-icon" />
            <input onChange={onChangeSearch} value={searchValue} placeholder='Search for a country..' className={style.input} />
        </div>
    )
}

export default Search
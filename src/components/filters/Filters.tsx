import React, { ChangeEvent } from 'react'
import { useSelector } from 'react-redux'

import style from './Filters.module.scss'
import Search from '../search/Search'
import SelectFilter from '../select-filter/SelectFilter'
import { useAppDispatch } from '../../redux/store'
import { setRegion } from '../../redux/filters/filtersSlice'
import { getSortRegion } from '../../redux/filters/filtersSelectors'

const regions = [
    { name: 'Africa', value: 'Africa' },
    { name: 'Europe', value: 'Europe' },
    { name: 'Oceania', value: 'Oceania' },
    { name: 'Americas', value: 'Americas' },
    { name: 'Asia', value: 'Asia' },
    { name: 'No Select', value: '' },
]

const Filters: React.FC = () => {
    const dispatch = useAppDispatch()
    const sortRegion = useSelector(getSortRegion)


    const changeSort = (e: any) => {
        dispatch(setRegion(e.target.value))
    }

    return (
        <div className={style.wrapper}>
            <Search />
            <SelectFilter changeValue={changeSort} value={sortRegion} defaultOption='Filter by region' options={regions} />
        </div>
    )
}

export default Filters
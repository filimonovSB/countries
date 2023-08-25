import React, { PropsWithChildren } from 'react'
import style from './SelectFilter.module.scss'

type option = {
    name: string
    value: string
}

interface ISelectFilterProps {
    value: string
    defaultOption: string
    options: option[]
    changeValue: (e: any) => void
}

const SelectFilter: React.FC<ISelectFilterProps> = ({ defaultOption, options, value, changeValue }) => {
    return (
        <select onChange={changeValue} value={value} className={style.select}>
            <option className={style.option} disabled>{defaultOption}</option>
            {
                options.map((option: option, index: number) => <option value={option.value} className={style.option} key={index}>{option.name}</option>)
            }
        </select>
    )
}

export default SelectFilter
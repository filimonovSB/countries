import React from 'react'
import style from './Header.module.scss'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
    return (
        <div className={style.header}>
            <div className="container">
                <div className={style.header__wrapper}>
                    <div className="">
                        <Link to='/'>
                            <h2>Where in the world?</h2>
                        </Link>
                    </div>
                    <div className=""></div>
                </div>
            </div>
        </div>
    )
}

export default Header
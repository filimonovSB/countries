import React, { PropsWithChildren } from 'react'

import style from './Button.module.scss'

interface IButtonProps extends PropsWithChildren {
    onClick?: () => void
}

const Button: React.FC<IButtonProps> = ({ onClick, children }) =>
    <button onClick={onClick} className={style.button}>
        {children}
    </button>

export default Button
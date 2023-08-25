import React, { FC, PropsWithChildren } from 'react'

interface IBoxProps extends PropsWithChildren {
    m?: string,
    mt?: string,
    mr?: string,
    mb?: string,
    ml?: string,
    p?: string,
    pt?: string,
    pr?: string,
    pb?: string,
    pl?: string,
    w?: string,
}

const Box: FC<IBoxProps> = ({
    m = 0,
    mt = 0,
    mr = 0,
    mb = 0,
    ml = 0,
    p = 0,
    pt = 0,
    pr = 0,
    pb = 0,
    pl = 0,
    w = '100%',
    children,
}) => {

    return (
        <div style={{
            margin: m,
            marginTop: mt,
            marginRight: mr,
            marginBottom: mb,
            marginLeft: ml,
            padding: p,
            paddingTop: pt,
            paddingRight: pr,
            paddingBottom: pb,
            paddingLeft: pl,
        }}>
            {children}
        </div>
    )
}

export default Box


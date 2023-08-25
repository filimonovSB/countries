export type currency = {
    name: string
    symbol: string
}

export type TNativeName = {
    official: string
    common: string
}

export type TNameCountrie = {
    common: string
    official: string
    nativeName: Record<string, TNativeName>
}

export type TFlag = {
    png: string
    svg: string
    alt: string
}
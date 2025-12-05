
// -- core --
export type FQDN = string

export type CCID = string
export const IsCCID = (str: string): boolean => {
    return str.startsWith('con1') && !str.includes('.') && str.length === 42
}

export type CSID = string
export const IsCSID = (str: string): boolean => {
    return str.startsWith('ccs1') && !str.includes('.') && str.length === 42
}

export type CKID = string
export const IsCKID = (str: string): boolean => {
    return str.startsWith('cck1') && !str.includes('.') && str.length === 42
}



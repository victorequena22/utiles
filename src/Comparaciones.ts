import { fechaToNumber } from "./Formatos"

export const compareOBJ = (a: any, b: any) => {
    return JSON.stringify(a) !== JSON.stringify(b)
}

export const ordenNumero = (a: number, b: number, orden: 'desc' | 'asc') => {
    if (orden === 'desc') return b - a
    else return a - b
}
export const ordenString = (a: string, b: string, orden: 'desc' | 'asc') => {
    if (orden === 'desc') return a < b ? -1 : a > b ? 1 : 0
    else return b < a ? -1 : b > a ? 1 : 0
}
export const ordenFecha = (a: string, b: string, orden: 'desc' | 'asc') => {
    const fa = fechaToNumber(a), fb = fechaToNumber(b)
    return ordenNumero(fa, fb, orden);
}

export const buscarTexto = (a: string, b: string) => {
    return (a.toUpperCase().indexOf(b) > -1)
}


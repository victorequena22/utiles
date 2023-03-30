import { fechaToNumber } from "./Formatos";
export const compareOBJ = (a: any, b: any) => {
    return JSON.stringify(a) !== JSON.stringify(b);
};
export const ordenNumero = (a: number, b: number, orden: "desc" | "asc") => {
    if (orden === "desc") { return b - a; }
    return a - b;
};
export const ordenString = (a: string, b: string, orden: "desc" | "asc") => {
    if (orden === "desc") { return a < b ? -1 : a > b ? 1 : 0; }
    return b < a ? -1 : b > a ? 1 : 0;
};
export const ordenFecha = (a: string, b: string, orden: "desc" | "asc") => {
    const fa = fechaToNumber(a);
    const fb = fechaToNumber(b);
    return ordenNumero(fa, fb, orden);
};
export const buscarTexto = (a: string, b: string) => {
    return (a.toUpperCase().indexOf(b.toUpperCase()) > -1);
};
export function MobileUserAgent() {
    if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)) {
        return true;
    }
    return false;
}
export function inRangeFechas(i: string, f: string, fecha?: string) {
    const inicio = fechaToNumber(i);
    const final = fechaToNumber(f);
    const dia = fechaToNumber(fecha);
    return (dia >= inicio) && (final >= dia);
}

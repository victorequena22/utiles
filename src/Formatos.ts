import dayjs = require("dayjs");

export function zfill(numero: number, width = 6) {
    const numberOutput = Math.abs(numero); /* Valor absoluto del número */
    const length = numero.toString().length; /* Largo del número */
    if (width <= length) {
        if (numero < 0) {
            return ("-" + numberOutput.toString());
        } else {
            return numberOutput.toString();
        }
    } else {
        const complete = () => {
            let rest = "";
            for (let i = length; i < width; i++) {
                rest += "0";
            }
            return rest;
        };
        if (numero < 0) {
            return ("-" + (complete()) + numberOutput.toString());
        } else {
            return ((complete()) + numberOutput.toString());
        }
    }
}
export function numberFormat(numero: number, decimal = 2) {
    return (numero
        .toFixed(decimal)
        .replace(".", ",")
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1."));
}
export function timeFormat(s2: number, decimal = 2) {
    const s = Math.floor(s2);
    const m = Math.floor(s / 60);
    return `${zfill(m, 2)}:${zfill(s - (m * 60), 2)}${(s2 - s).toFixed(decimal).replace("0", "")}`;
}
export function timeFormatAtHora(s2: number, decimal = 2) {
    const s = Math.floor(s2);
    const m = Math.floor(s / 60);
    const h = Math.floor(m / 60);
    return `${zfill(h, 2)}:${zfill(m - (h * 60), 2)}:${zfill(s - (m * 60), 2)}${(s2 - s).toFixed(decimal).replace("0", "")}`;
}
export function formatoFecha(fecha: string) {
    return dayjs(fecha).format('DD/MM/YYYY');
}
export function formatoHora(fecha?: string) {
    return dayjs(fecha).format('hh:mm a');
}
export function solicitud() {
    return dayjs().format('YYYY-MM-DD/HH:mm:ss');
}
export function fechaToNumber(fecha?: string) {
    return parseInt(dayjs(fecha).format('YYYYMMDDHHmmss'))
}
export function diaToNumber(fecha?: string) {
    return parseInt(dayjs(fecha).format('YYYYMMDD'))
}
export function getSegundos(fecha?: string) {
    const hora = parseInt(dayjs(fecha).format('HH'));
    const minuto = parseInt(dayjs(fecha).format('mm'));
    const segundo = parseInt(dayjs(fecha).format('ss'));
    return hora * 3600 + minuto * 60 + segundo;
}
export function parseDia(fecha?: string) {
    return dayjs(fecha).format('DD-MM-YYYY');
}
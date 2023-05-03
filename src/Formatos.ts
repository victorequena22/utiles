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
    const date = new Date(fecha);
    const año = date.getFullYear();
    const mes = date.getMonth() + 1;
    const dia = date.getDate() + 1;
    return zfill(dia, 2) + "/" + zfill(mes, 2) + "/" + año;
}
export function formatoHora(fecha?: string) {
    const date = fecha ? new Date(fecha) : new Date();
    const minuto = date.getMinutes();
    const segundo = date.getSeconds();
    let hora = date.getHours();
    let turno = " AM";
    if (hora >= 12) { turno = " PM"; }
    if (hora > 12) { hora = hora - 12; }
    if (hora === 0) { hora = hora + 12; }
    return zfill(hora, 2) + ":" + zfill(minuto, 2) + ":" + zfill(segundo, 2) + turno;
}
export function solicitud() {
    const date = new Date();
    const año = date.getFullYear();
    const mes = date.getMonth() + 1;
    const dia = date.getDate();
    const hora = date.getHours();
    const minuto = date.getMinutes();
    const segundo = date.getSeconds();
    return `${año}-${mes}-${dia}/${hora}:${minuto}:${segundo}`;
}
export function fechaToNumber(fecha?: string) {
    const date = fecha ? new Date(fecha) : new Date();
    const año = date.getFullYear();
    const mes = date.getMonth() + 1;
    const dia = date.getDate() + 1;
    const hora = date.getHours();
    const minuto = date.getMinutes();
    const segundo = date.getSeconds();
    return parseInt(año + zfill(mes, 2) + zfill(dia, 2) + zfill(hora, 2) + zfill(minuto, 2) + zfill(segundo, 2));
}
export function diaToNumber(fecha?: string) {
    const date = fecha ? new Date(fecha) : new Date();
    const año = date.getFullYear();
    const mes = date.getMonth() + 1;
    const dia = date.getDate() + 1;
    return parseInt(año + zfill(mes, 2) + zfill(dia, 2));
}


export function getSegundos(fecha?: string) {
    const date = fecha ? new Date(fecha) : new Date();
    const hora = date.getHours();
    const minuto = date.getMinutes();
    const segundo = date.getSeconds();
    return hora * 3600 + minuto * 60 + segundo;
}
export function parseDia(fecha?: string) {
    const date = fecha ? new Date(fecha) : new Date();
    const año = date.getFullYear();
    const mes = date.getMonth();
    const dia = date.getDate();
    return `${zfill(dia, 2)}-${zfill(mes, 2)}-${zfill(año, 2)}`;
}
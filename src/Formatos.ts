export function zfill(number: number, width = 6) {
    const numberOutput = Math.abs(number) /* Valor absoluto del número */
    const length = number.toString().length /* Largo del número */
    if (width <= length) {
        if (number < 0) {
            return ("-" + numberOutput.toString())
        } else {
            return numberOutput.toString()
        }
    } else {
        const complete = () => {
            let rest = '';
            for (let i = length; i < width; i++) {
                rest += "0";
            }
            return rest;
        }
        if (number < 0) {
            return ("-" + (complete()) + numberOutput.toString())
        } else {
            return ((complete()) + numberOutput.toString())
        }
    }
}
export function numberFormat(number: number, decimal = 2) {
    return (number
        .toFixed(decimal) // always two decimal digits
        .replace('.', ',') // replace decimal point character with ,
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')) // use . as a separator
}
export function timeFormat(s2: number, decimal = 2) {
    const s = Math.floor(s2);
    const m = Math.floor(s / 60);
    return `${zfill(m, 2)}:${zfill(s - (m * 60), 2)}${(s2 - s).toFixed(decimal).replace('0', '')}`;
}
export function formatoFecha(fecha: string) {
    let date = new Date(fecha);
    let año = date.getFullYear();
    let mes = date.getMonth() + 1;
    let dia = date.getDate() ;
    return zfill(dia, 2) + '/' + zfill(mes, 2) + '/' + año;
};
export function formatoHora(fecha?: string) {
    let date = fecha ? new Date(fecha) : new Date();
    let hora = date.getHours(),
        minuto = date.getMinutes(),
        segundo = date.getSeconds(),
        turno = ' AM';
    if (hora >= 12)
        turno = ' PM'
    if (hora > 12)
        hora = hora - 12;
    if (hora === 0)
        hora = hora + 12;
    return zfill(hora, 2) + ":" + zfill(minuto, 2) + ":" + zfill(segundo, 2) + turno;
};
export function solicitud() {
    let date = new Date();
    let año = date.getFullYear(),
        mes = date.getMonth() + 1,
        dia = date.getDate() ,
        hora = date.getHours(),
        minuto = date.getMinutes(),
        segundo = date.getSeconds();
    return `${año}-${mes}-${dia}/${hora}:${minuto}:${segundo}`;
}
export function fechaToNumber(fecha: string) {
    let date = new Date(fecha);
    let año = date.getFullYear(),
        mes = date.getMonth() + 1,
        dia = date.getDate(),
        hora = date.getHours(),
        minuto = date.getMinutes(),
        segundo = date.getSeconds();
    let str = año + zfill(mes, 2) + zfill(dia, 2) + zfill(hora, 2) + zfill(minuto, 2) + zfill(segundo, 2)
    return parseInt(str);
};



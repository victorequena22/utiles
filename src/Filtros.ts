import { formatoFecha, zfill, fechaToNumber } from "./Formatos";

export function busqueda(itens: any[], encontar: string, bucarLabel: string[], fechas: string[] = []) {
    if (encontar !== "") {
        return itens.filter(iten => {
            let en = encontar.split(" "), pasa = false;
            bucarLabel.forEach(label => {
                let considencias = 0;
                en.forEach(e => {
                    if (fechas.some(f => f === label)) {
                        if (formatoFecha(iten[label]).indexOf(e) > -1) {
                            considencias++
                        }
                    } else if (isNaN(iten[label])) {
                        if (iten[label].toUpperCase().indexOf(e) > -1) { considencias++ }
                    } else {
                        if (zfill(parseFloat(iten[label])).indexOf(e) > -1) { considencias++ }
                    }
                })
                if (en.length === considencias) {
                    pasa = true
                }
            })
            return pasa
        })
    }
    return itens;
}
export function ordenar(itens: any[], by: string, orden: string, fechas: string[] = []) {
    return itens.sort((a: any, b: any) => {
        if (fechas.some(f => f === by)) {
            const fa = fechaToNumber(a[by]), fb = fechaToNumber(b[by])
            if (orden === 'desc') return fb < fa ? -1 : fb > fa ? 1 : 0
            else return fa < fb ? -1 : fa > fb ? 1 : 0
        } else if (isNaN(b[by])) {
            if (orden === 'desc') return a[by] < b[by] ? -1 : a[by] > b[by] ? 1 : 0
            else return b[by] < a[by] ? -1 : b[by] > a[by] ? 1 : 0
        } else {
            if (orden === 'desc') return b[by] - a[by]
            else return a[by] - b[by]
        }
    })
}
export function filtro<l>(itens: any[], value: number, Label: l) {
    if (value !== -1)
        return itens.filter(iten => {
            return iten[Label] === value;
        })
    return itens;
}
export function indexOfCallback(arr: any[], callback: (a: any) => boolean, startIndex = 0) {
    for (var i = startIndex; i < arr.length; i++) {
        if (callback(arr[i])) {
            return i;
        }
    }
    return -1;
}

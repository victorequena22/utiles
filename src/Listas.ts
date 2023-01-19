import { ordenFecha, ordenString, ordenNumero, buscarTexto } from './Comparaciones';
import { formatoFecha, zfill } from "./Formatos";
export function busqueda(itens: any[], encontar: string, bucarLabel: string[], fechas: string[] = []) {
    if (encontar !== "") {
        return itens.filter(iten => {
            let en = encontar.split(" "), pasa = false;
            bucarLabel.forEach(label => {
                let considencias = 0;
                en.forEach(e => {
                    if (fechas.some(f => f === label)) {
                        if (buscarTexto(formatoFecha(iten[label]), e)) considencias++
                    } else if (isNaN(iten[label])) {
                        if (buscarTexto(iten[label], e)) considencias++
                    } else {
                        if (buscarTexto(zfill(parseFloat(iten[label])), e)) considencias++
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
export function ordenar<p = any>(itens: p[], by: keyof p, orden: 'desc' | 'asc', fechas: (keyof p)[] = []) {
    return itens.sort((a: any, b: any) => {
        if (fechas.some(f => f === by)) return ordenFecha(a, b, orden);
        else if (isNaN(b[by])) return ordenString(a, b, orden);
        else return ordenNumero(a, b, orden);

    })
}
export function filtro<l>(itens: any[], value: number, Label: l) {
    if (value !== -1)
        return itens.filter(iten => {
            return iten[Label] === value;
        })
    return itens;
}
export function indexOfCallback<p = any>(arr: p[], callback: (a: any) => boolean, startIndex = 0) {
    for (var i = startIndex; i < arr.length; i++) {
        if (callback(arr[i])) {
            return i;
        }
    }
    return -1;
}
export function actualizarLista<p = any>(nuevo: p[], lista: p[], label: keyof p) {
    const push = nuevo.filter((d => {
        const i = lista.findIndex(c => c[label] === d[label]);
        if (i > -1) {
            lista[i] = d;
            return false;
        }
        return true;
    }));
    const arr = [...lista, ...push];
    return arr;
}

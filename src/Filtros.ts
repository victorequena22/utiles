import { zfill } from "./Formatos";

export function busqueda<p>(itens: any[], encontar: string, bucarLabel: p[]) {
    if (encontar !== "") {
        return itens.filter(iten => {
            let en = encontar.split(" "), pasa = false;
            bucarLabel.forEach(label => {
                let considencias = 0;
                en.forEach(e => {
                    if (isNaN(iten[label])) {
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
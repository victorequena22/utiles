class Semaforo {
    turnos: string[] = [];
    index = 0;
    block = true;
    constructor() {
        this.add = this.add.bind(this);
        this.next = this.next.bind(this);
        this.clean = this.clean.bind(this);
        this.isTurn = this.isTurn.bind(this);
    }
    add(t: string) {
        this.turnos.push(t);
    }
    clean(t: string) {
        this.turnos = this.turnos.filter(r => r !== t);
        if (this.index >= this.turnos.length) this.index = 0
    }
    isTurn(t: string) {
        if (this.block && this.turnos[this.index] === t) {
            this.block = false;
            return true;
        }
        return false;
    }
    forceTurn(t: string) {
        this.index = this.turnos.findIndex(s => s === t);
    }
    next() {
        this.block = true;
        this.index++;
        if (this.index >= this.turnos.length || this.index < 0) this.index = 0;
    }
}
const se = new Semaforo();
export function semaforo() { return se; }
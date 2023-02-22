export function ToRGB(hex: string) {
    // eslint-disable-next-line
    if (hex.charAt(0) === "#") { hex = hex.substring(1, hex.length); }
    const red = hex.substring(0, 2);
    const green = hex.substring(2, 4);
    const blue = hex.substring(4, 6);
    const alpha = hex.substring(6, 8);
    const r = parseInt(red, 16);
    const g = parseInt(green, 16);
    const b = parseInt(blue, 16);
    const a = parseInt(alpha, 16);
    return { r, g, b, a: isNaN(a) ? 255 : a };
}
export function getMes(m: number) {
    const meses = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"];
    return meses[m - 1];
}

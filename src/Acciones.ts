
export const portapapeles = (str: string) => {
    // PASO 1
    const el = document.createElement("textarea");
    // PASO 2
    el.value = str;
    el.setAttribute("readonly", "");
    // PASO 3
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    // PASO 4
    el.select();
    // PASO 5
    document.execCommand("copy");
    // PASO 6
    document.body.removeChild(el);
    return str;
};

export function focusId(id: string) {
    setTimeout(() => {
        const el = document.getElementById(id);
        if (el !== null) { el.focus(); }
    }, 100);
}

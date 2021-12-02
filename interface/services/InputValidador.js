export function somenteNumero(evt) {
    let evento = evt || window.event;
    let key = evento.keyCode || evento.which;
    key = String.fromCharCode(key);

    let regex = /^[0-9.]+$/;
    if (!regex.test(key)) {
        evento.returnValue = false;
        if (evento.preventDefault) evento.preventDefault();
    }
}
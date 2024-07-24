export const SoloLetras = function(event) {
    const regexLetras = /^[a-zA-Z\ ]{0,}$/;
        
    if (!(regexLetras.test(event.key))) {
        event.preventDefault();
    }
}
export const SoloNumeros = function (event) {
    const regexnums = /^[\d]{0,}$/;
    if (!(regexnums.test(event.key))) {
        event.preventDefault();
        }
}

export const toggleSubmitButton = () => {
    if (terminos.checked) {
        enviar.disabled = false;   
    } else {
        enviar.disabled = true;
    }
    terminos.addEventListener("change", toggleSubmitButton);
};
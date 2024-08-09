//validar el correo electrónico
export const validarCorreo = (elemento) => {
    
    const spanId = `spanError${elemento.id}`;
    const errorMessage = "Correo inválido. Debe ser un correo electrónico válido.";

    // Expresion regular 
    const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  
    let span = document.querySelector(`#${spanId}`);
    if (!span) {
        span = document.createElement("span");
        span.setAttribute("id", spanId);
        span.setAttribute("class", "ErrorSpan");
        span.textContent = errorMessage;
    }

    const padre = elemento.parentElement;

    // Validar el correo
    if (regexCorreo.test(elemento.value)) {
        elemento.classList.remove("incorrecto");
        elemento.classList.add("correcto");
        if (span.parentNode === padre) {
            padre.removeChild(span);
        }
    } else {
        elemento.classList.remove("correcto");
        elemento.classList.add("incorrecto");
        if (span.parentNode !== padre) {
            padre.appendChild(span);
        }
    }
};
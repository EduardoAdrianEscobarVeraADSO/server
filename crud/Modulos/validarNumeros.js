//validar el numero telefonico
export const validarNumeros = (elemento) => {
    
    const spanId = `spanError${elemento.id}`;
    const errorMessage = "Numero invalido, debe tener 10 caracteres como minimo y como maximo";

    // Expresion regular 
    const regexNumero = /^\d{10}$/;

  
    let span = document.querySelector(`#${spanId}`);
    if (!span) {
        span = document.createElement("span");
        span.setAttribute("id", spanId);
        span.setAttribute("class", "ErrorSpan");
        span.textContent = errorMessage;
    }

    const padre = elemento.parentElement;

    // Validar numero
    if (regexNumero.test(elemento.value)) {
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



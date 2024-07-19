export const cantidad = (elemento) => {
    // Asignar un ID unico al span de error basado en el nombre del elemento
    const spanId = `spanError${elemento.id}`;
    const errorMessage = "Debe contener entre 3 a 40 caracteres";

    // Buscar si ya existe un span de error específico para este elemento
    let span = document.querySelector(`#${spanId}`);
    if (!span) {
        span = document.createElement("span");
        span.setAttribute("id", spanId);
        span.setAttribute("class", "ErrorSpan");
        span.textContent = errorMessage;
    }

    const padre = elemento.parentElement;

    if (elemento.value.length <= 40 && elemento.value.length >= 3) {
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

// Función para validar el correo electrónico
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

    // Validar el correo electrónico
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

// Función para validar el numero telefonico
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



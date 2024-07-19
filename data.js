import { fetchDocumentos, fetchUsuarios } from "./module.js";
import { cantidad, validarCorreo, validarNumeros } from "./module2.js";


// async function db() {
//     const documentos = await fetchDocumentos();
//         const usuarios = await fetchUsuarios();

//         const select = document.getElementById("tdoc");

//         let tipo_doc = [];

//         documentos.forEach(tipo => {
//             const option = document.createElement("option");
//             option.value = tipo.id;
//             option.textContent = tipo.name;
//             select.appendChild(option);
//             tipo_doc.push(tipo.name)
//         });

//         const tabla = document.querySelector("#dataTable tbody");
    
//         usuarios.forEach(tipo => {

//             const tr = document.createElement("tr");

//             const tdnombre = document.createElement("td");
//             tdnombre.textContent = tipo.nameUser;

//             const tdapellido = document.createElement("td");
//             tdapellido.textContent = tipo.lastName;

//             const tdtdocumento = document.createElement("td");
//             tdtdocumento.textContent = tipo_doc[tipo.id - 1];

//             const tdnumdoc = document.createElement("td");
//             tdnumdoc.textContent = tipo.Ndocumento;

//             const correo = document.createElement("td");
//             correo.textContent = tipo.correo;

//             const tddireccion = document.createElement("td");
//             tddireccion.textContent = tipo.direccion;

//             const btns = document.createElement("td");
//             const buttonD = document.createElement("button");
//             const buttonE = document.createElement("button")
//             buttonD.textContent = "Eliminar";
//             buttonD.classList.add("btn-delete");
//             buttonE.textContent = "Editar";
//             buttonE.classList.add("btn-edit");
//             btns.appendChild(buttonD);
//             btns.appendChild(buttonE);

//             tr.appendChild(tdnombre);
//             tr.appendChild(tdapellido);
//             tr.appendChild(tdtdocumento);
//             tr.appendChild(tdnumdoc);
//             tr.appendChild(correo);
//             tr.appendChild(tddireccion);
//             tr.appendChild(btns);
//             tabla.appendChild(tr);
//         });

//         let idUsuario = usuarios[usuarios.length -1].id

//         const formulario = document.querySelector("#userForm");
//         formulario.addEventListener("submit", function(event){
//             event.preventDefault();
            

//         // const regexNombreApellido = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+$/;
//         // const regexDocumento = /^[0-9]+$/;
//         // const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         // const regexDireccion = /^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9\s]+$/;

//         if(nombre === "" || apellido === "" || tdoc === "" || Ndoc === "" ||
//             correo === "" || direccion === ""){
//                 alert("Todos los campos son obligatorios")
//             }
        
        
//         const nombre = document.querySelector("#nameUser").value.trim();
//             const apellido = document.querySelector("#lastName").value.trim();
//             const tdoc = document.querySelector("#tdoc").value.trim();
//             const Ndoc = document.querySelector("#Ndocument").value.trim();
//             const correo = document.querySelector("#correo").value.trim();
//             const direccion = document.querySelector("#direccion").value.trim();
//             const letras = function(event) {
//                 const regexLetras = /^[a-zA-Z\ ]{0,}+$/;
//                 if (!regexLetras.test(event.key)) {
//                     event.preventDefault();
//                     }
//             }
//             nombre.addEventListener("keypress",(event)=>{
//                 letras(event)
//             });
//     })}

// db();

const nombre = document.querySelector("#nameUser");
const apellido = document.querySelector("#lastName");
const tdoc = document.querySelector("#tdoc");
const Ndoc = document.querySelector("#Ndocument");
const correoInput = document.querySelector("#correo");
const direccion = document.querySelector("#direccion");
const celular = document.querySelector("#Ntelefono");
const terminos = document.querySelector("#terminos")
const enviar = document.querySelector("#enviar")


nombre.addEventListener("keypress",(event)=> SoloLetras(event))
nombre.addEventListener("input",(event)=> cantidad(nombre))
apellido.addEventListener("keypress",(event)=> SoloLetras(event))
apellido.addEventListener("input", (event)=> cantidad(apellido))
Ndoc.addEventListener("keypress",(event) => SoloNumeros(event))
celular.addEventListener("keypress", (event) => SoloNumeros (event))
correoInput.addEventListener("input", () => validarCorreo(correoInput));
celular.addEventListener("input", () => validarNumeros(celular))
Ndoc.addEventListener("input", () => validarNumeros(Ndoc))


const SoloLetras = function(event) {
    const regexLetras = /^[a-zA-Z\ ]{0,}$/;
        
    if (!(regexLetras.test(event.key))) {
        event.preventDefault();
    }
}
const SoloNumeros = function (event) {
    const regexnums = /^[\d]{0,}$/;
    if (!(regexnums.test(event.key))) {
        event.preventDefault();
        }
}


const toggleSubmitButton = () => {
    if (terminos.checked) {
        enviar.disabled = false;   
    } else {
        enviar.disabled = true;
    }
};

terminos.addEventListener("change", toggleSubmitButton);
toggleSubmitButton();
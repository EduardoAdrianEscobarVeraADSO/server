import { fetchDocumentos, fetchUsuarios } from "./module.js";
import { cantidad } from "./module2.js";


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
    const correo = document.querySelector("#correo");
    const direccion = document.querySelector("#direccion");
    const celular = document.querySelector("#Ntelefono");

nombre.addEventListener("keypress",(event)=>{
    SoloLetras(event);
})
nombre.addEventListener("blur",(event)=>{
    cantidad(nombre);
})
apellido.addEventListener("keypress",(event)=>{
    SoloLetras(event)
    })
apellido.addEventListener("blur", (event)=>{
    cantidad(apellido)
})
Ndoc.addEventListener("keypress",(event) => {
    SoloNumeros(event)
})

celular.addEventListener("keypress", (event)=>{
    SoloNumeros(event)
})
correoInput.addEventListener("blur", ValidacionCorreo);

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

const ValidacionCorreo = function(event) {
    const correoV = event.target.value;
    const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    
    if (!regexCorreo.test(correoV)) {
        event.target.classList.add("incorrecto");
        event.target.classList.remove("correcto")
    } else {
        event.target.classList.remove("incorrecto");
        event.target.classList.add("correcto")
    }
};

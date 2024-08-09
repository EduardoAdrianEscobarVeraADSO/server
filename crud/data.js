import { peticion } from "./Modulos/fetchs.js";
import { validarNumeros } from "./Modulos/validarNumeros.js";
import { validarCorreo } from "./Modulos/validarCorreos.js";
import { cantidad } from "./Modulos/validarNombres.js";
import { SoloLetras, SoloNumeros } from "./Modulos/validarBloquearTeclas.js";
import { toggleSubmitButton } from "./Modulos/validacionCheckBox.js";

// async function db() {
//         const documentos = await fetchDocumentos();
//         const usuarios = await fetchUsuarios();

//         console.log(documentos);

//         const select = document.getElementById("tdoc");

//         let tipo_doc = [];

//         documentos.forEach(tipo => {
//             const option = document.createElement("option");
//             option.value = tipo.id;
//             option.textContent = tipo.name;
//             select.appendChild(option);
//             console.log(select);
//             tipo_doc.push(tipo.name)
//         });
//         console.log(tipo_doc);
//         const tabla = document.querySelector("#dataTable tbody");
    
//         usuarios.forEach(tipo => {

//             const tr = document.createElement("tr");

//             const tdid = document.createElement("td");
//             tdid.textContent = tipo.id;

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
//             tr.appendChild(tdid);
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
//         const nombre = document.querySelector("#nameUser");
//         const apellido = document.querySelector("#lastName");
//         const tdoc = document.querySelector("#tdoc");
//         const Ndoc = document.querySelector("#Ndocument");
//         const correoInput = document.querySelector("#correo");
//         const celular = document.querySelector("#Ntelefono");
//         const terminos = document.querySelector("#terminos")
//         const enviar = document.querySelector("#enviar");
//         const template = document.querySelector("#template").content;
                
//         formulario.addEventListener("submit", function(event){
//             event.preventDefault();
            
//             let usuario = {};
//               usuario = {
//                 "id": `${parseInt(idUsuario) + 1}`,
//                 "nameUser": nombre.value,
//                 "lastName": apellido.value,
//                 "Ndocumento": parseInt(Ndoc.value),
//                 "tdoc": `${parseInt(tdoc.value)}`,
//                 "correo": correoInput.value,
//                 "direccion": direccion.value,
//                 "Ntelefono": celular.value

//               }
//               fetch("http://127.0.0.1:3000/users", {
//                 method: "POST",
//                 body: JSON.stringify(usuario)
//               })
//         })
        
//           const eliminar = document.querySelectorAll(".btn-delete");
//           eliminar.forEach(a=>{
//             a.addEventListener('click', function (event){
//                 event.preventDefault();
//                 let id = a.parentElement.parentElement.firstChild.textContent;
//                 console.log(id);
//                 fetch(`http://127.0.0.1:3000/users/${id}`, {
//                   method: "DELETE"
                  
                  
//                 })
//     }
// )})}
// db();

// toggleSubmitButton();

const formulario = document.querySelector("#userForm");
const nombre = document.querySelector("#nameUser");
const apellido = document.querySelector("#lastName");
const tdoc = document.querySelector("#tdoc");
const Ndoc = document.querySelector("#Ndocument");
const correoInput = document.querySelector("#correo");
const celular = document.querySelector("#Ntelefono");
const terminos = document.querySelector("#terminos")
const enviar = document.querySelector("#enviar")
const template = document.querySelector("#template").content;
const table = document.querySelector("#dataTable");
const tbody = document.querySelector("tbody");

nombre.addEventListener("keypress",(event)=> SoloLetras(event))
nombre.addEventListener("input",(event)=> cantidad(nombre))
apellido.addEventListener("keypress",(event)=> SoloLetras(event))
apellido.addEventListener("input", (event)=> cantidad(apellido))
Ndoc.addEventListener("keypress",(event) => SoloNumeros(event))
celular.addEventListener("keypress", (event) => SoloNumeros (event))
correoInput.addEventListener("input", () => validarCorreo(correoInput));
celular.addEventListener("input", () => validarNumeros(celular))
Ndoc.addEventListener("input", () => validarNumeros(Ndoc))


//AGREGAR TIPOS DE DOCUMENTO OPTION
addEventListener("DOMContentLoaded", (event) =>{
  const select = document.getElementById("tdoc");
  let tipo_doc = [];
peticion("docs").then(data=>{
  data.forEach(tipo => {
    const option = document.createElement("option");
    option.value = tipo.id;
    option.textContent = tipo.name;
    select.appendChild(option);
    console.log(select);
    tipo_doc.push(tipo.name)
});
console.log(tipo_doc);

})

})



//LISTAR
const listar = async () =>{
  const documentos = await peticion("docs");
  console.log(documentos);
  
  const usuarios = await peticion("users");
  let fragment = document.createDocumentFragment();
  
  usuarios.forEach(element => {
    let idUsuario = usuarios[usuarios.length -1].id
    let documento = documentos.find((doc) => doc.id === element.tdoc);
    template.querySelector("tr").id = `user_${element.id}`;
    template.querySelector(".id").textContent = element.id;
    template.querySelector(".first_name").textContent = element.nameUser;
    template.querySelector(".last_name").textContent = element.lastName;
    template.querySelector(".type_id").textContent = documento.name;
    template.querySelector(".Ndocumento").textContent = element.Ndocumento;
    template.querySelector(".email").textContent = element.correo;
    template.querySelector(".address").textContent = element.direccion;
    template.querySelector(".phone").textContent = element.Ntelefono;
    template.querySelector(".edit").setAttribute("data-id", element.id);
    template.querySelector(".delete").setAttribute("data-id", element.id);
    let clone = document.importNode(template, true)
    fragment.appendChild(clone);
  });
  table.querySelector("tbody").appendChild(fragment);
  
}
listar()

const edit = (event, element) =>{
  enviar(`users/${element.dataset.id}`,{
    method: "PATCH",
    headers:{
      "Content-type":"application/json; charset=UTF-8"
    },
  }).then((data) =>{
    loadForm(data);
    toggleModal();
  });
}


document.addEventListener("click", e=> {
  let element = "";
  if(e.target.matches(".editar") || e.target.matches(".editar *")){
    element = e.target.matches(".editar") ? e.target : e.target.parentNode;
    edit(e, element)
  }
})



function loadForm(data) {
  const {nameUser, lastName, tdoc, Ndocumento, correo, direccion, Ntelefono} = data;
  nombre.value = nameUser;
  apellido.value = lastName;
  tdoc.value = tdoc;
  Ndoc.value = Ndocumento;
  correo.value = correo;
  direccion.value = direccion;
  Ntelefono.value = Ntelefono;

}

const createRow = async (data) => {
  const documentos = await peticion("docs");

  const tr = tbody.insertRow(-1);
  // const tdId = tr.insertCell(0);
  const tdNombre = tr.insertCell(0);
  const tdApellido = tr.insertCell(1);
  const tdTipo = tr.insertCell(2);
  const tdDocumento = tr.insertCell(3);
  const tdEmail = tr.insertCell(4);
  const tdDireccion = tr.insertCell(5);
  const tdTelefono = tr.insertCell(6);

  // tdId.textContent  = data.id;
  tdNombre.textContent  = data.nameUser;
  tdApellido.textContent  = data.lastName;
  tdTipo.textContent  = data. documentos.find((doc) => doc.id === element.tdoc).name;
  tdDocumento.textContent  = data.Ndocumento;
  tdEmail.textContent  = data.correo;
  tdDireccion.textContent  = data.direccion;
  tdTelefono.textContent  = data.Ntelefono;


  const div = document.createElement("div");
  const btnEdit = document.createElement("button");
  const btnDelete = document.createElement("button");
  const iconEdit = document.createElement("i");
  const iconDelete = document.createElement("i");

  div.classList.add("group");
  btnDelete.classList.add("delete", "button", "button--danger");
  btnEdit.classList.add("edit", "button");
  iconEdit.classList.add("bx", "bxs-edit-alt");
  iconDelete.classList.add("bx", "bxs-trash");

  btnEdit.setAttribute("data-id", data.id);
  btnDelete.setAttribute("data-id", data.id);

  btnEdit.appendChild(iconEdit);
  btnDelete.appendChild(iconDelete);

  div.appendChild(btnEdit)
  div.appendChild(btnDelete)

  tr.id = `user_${data.id}`
}


createRow()
// formulario.addEventListener("submit", function(event){
//               event.preventDefault();
              
//               let usuario = {};
//                 usuario = {
//                   "nameUser": nombre.value,
//                   "lastName": apellido.value,
//                   "Ndocumento": parseInt(Ndoc.value),
//                   "tdoc": `${parseInt(tdoc.value)}`,
//                   "correo": correoInput.value,
//                   "direccion": direccion.value,
//                   "Ntelefono": celular.value
  
//                 }
//                 fetch("http://127.0.0.1:3000/users", {
//                   method: "POST",
//                   body: JSON.stringify(usuario)
//                 })
//           });





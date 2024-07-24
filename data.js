import { fetchDocumentos, fetchUsuarios } from "./Modulos/fetchs.js";
import { validarNumeros } from "./Modulos/validarNumeros.js";
import { validarCorreo } from "./Modulos/validarCorreos.js";
import { cantidad } from "./Modulos/validarNombres.js";
import { SoloLetras, SoloNumeros } from "./Modulos/validarBloquearTeclas.js";
import { toggleSubmitButton } from "./Modulos/validacionCheckBox.js";

async function db() {
        const documentos = await fetchDocumentos();
        const usuarios = await fetchUsuarios();

        console.log(documentos);

        const select = document.getElementById("tdoc");

        let tipo_doc = [];

        documentos.forEach(tipo => {
            const option = document.createElement("option");
            option.value = tipo.id;
            option.textContent = tipo.name;
            select.appendChild(option);
            console.log(select);
            tipo_doc.push(tipo.name)
        });
        console.log(tipo_doc);
        const tabla = document.querySelector("#dataTable tbody");
    
        usuarios.forEach(tipo => {

            const tr = document.createElement("tr");

            const tdid = document.createElement("td");
            tdid.textContent = tipo.id;

            const tdnombre = document.createElement("td");
            tdnombre.textContent = tipo.nameUser;

            const tdapellido = document.createElement("td");
            tdapellido.textContent = tipo.lastName;

            const tdtdocumento = document.createElement("td");
            tdtdocumento.textContent = tipo_doc[tipo.id - 1];

            const tdnumdoc = document.createElement("td");
            tdnumdoc.textContent = tipo.Ndocumento;

            const correo = document.createElement("td");
            correo.textContent = tipo.correo;

            const tddireccion = document.createElement("td");
            tddireccion.textContent = tipo.direccion;

            const btns = document.createElement("td");
            const buttonD = document.createElement("button");
            const buttonE = document.createElement("button")
            buttonD.textContent = "Eliminar";
            buttonD.classList.add("btn-delete");
            buttonE.textContent = "Editar";
            buttonE.classList.add("btn-edit");

            btns.appendChild(buttonD);
            btns.appendChild(buttonE);
            tr.appendChild(tdid);
            tr.appendChild(tdnombre);
            tr.appendChild(tdapellido);
            tr.appendChild(tdtdocumento);
            tr.appendChild(tdnumdoc);
            tr.appendChild(correo);
            tr.appendChild(tddireccion);
            tr.appendChild(btns);
            tabla.appendChild(tr);
        });

        let idUsuario = usuarios[usuarios.length -1].id

        const formulario = document.querySelector("#userForm");
        const nombre = document.querySelector("#nameUser");
        const apellido = document.querySelector("#lastName");
        const tdoc = document.querySelector("#tdoc");
        const Ndoc = document.querySelector("#Ndocument");
        const correoInput = document.querySelector("#correo");
        const celular = document.querySelector("#Ntelefono");
        const terminos = document.querySelector("#terminos")
        const enviar = document.querySelector("#enviar")
                
        formulario.addEventListener("submit", function(event){
            event.preventDefault();
            
            let usuario = {};
              usuario = {
                "id": `${parseInt(idUsuario) + 1}`,
                "nameUser": nombre.value,
                "lastName": apellido.value,
                "Ndocumento": parseInt(Ndoc.value),
                "tdoc": parseInt(tdoc.value),
                "correo": correoInput.value,
                "direccion": direccion.value,
                "Ntelefono": celular.value

              }
              fetch("http://127.0.0.1:3000/users", {
                method: "POST",
                body: JSON.stringify(usuario)
              })
        })
        
          const eliminar = document.querySelectorAll(".btn-delete");
          eliminar.forEach(a=>{
            a.addEventListener('click', function (event){
                event.preventDefault();
                let id = a.parentElement.parentElement.firstChild.textContent;
                console.log(id);
                fetch(`http://127.0.0.1:3000/users/${id}`, {
                  method: "DELETE"
                  
                  
                })
    }
)})}
db();




nombre.addEventListener("keypress",(event)=> SoloLetras(event))
nombre.addEventListener("input",(event)=> cantidad(nombre))
apellido.addEventListener("keypress",(event)=> SoloLetras(event))
apellido.addEventListener("input", (event)=> cantidad(apellido))
Ndoc.addEventListener("keypress",(event) => SoloNumeros(event))
celular.addEventListener("keypress", (event) => SoloNumeros (event))
correoInput.addEventListener("input", () => validarCorreo(correoInput));
celular.addEventListener("input", () => validarNumeros(celular))
Ndoc.addEventListener("input", () => validarNumeros(Ndoc))




toggleSubmitButton();


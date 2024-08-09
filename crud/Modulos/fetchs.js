import { URL } from "./config.js";


export const peticion = async (url) => {
  let respuesta = await fetch(`${URL}/${url}`)
  let datos = await respuesta.json();
  return datos;
};
export const enviar = async (endopoint, options) => {
  let respuesta = await fetch(`${URL}/${endopoint}`,options);
  let data = await respuesta.json();
  return data;
} 
  
export const feed = (onNavigate) => {
//=============================================Creamos los elementos de nuestro feed=============================================//
  const div = document.createElement('div');
  const divPadre = document.createElement('div');
  const title = document.createElement('h2');
  const inputPost = document.createElement('input');
  const botonGuardar = document.createElement('button');
//=============================================Escribimos la info dentro de los elementos=============================================//
  title.textContent = 'Bienvenida a tu muro';
  inputPost.placeholder = 'Escribe aquí lo que piensas';
  botonGuardar.textContent = 'Guardar';
//=============================================Damos clases a los elementos=============================================//
  divPadre.className = "divPadre"
//=============================================Damos ID a los elementos=============================================//
  inputPost.id = "guardarPost"

//=============================================Mostramos los elementos=============================================//
  div.append(title, inputPost, botonGuardar, divPadre);

  return div;
};

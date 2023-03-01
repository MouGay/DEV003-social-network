import { signOff, saveTask, getTask } from '../lib';
// eslint-disable-next-line no-unused-vars
export const feed = (onNavigate) => {
// ========Creamos los elementos de nuestro feed===========
  const div = document.createElement('div');
  const divPadre = document.createElement('div');
  const titleCiber = document.createElement('h2');
  const subTitle = document.createElement('h2');
  const taskForm = document.createElement('form');
  const postTitle = document.createElement('input');
  // se crea const para texto del post
  const headerPost = document.createElement('h3');
  const postText = document.createElement('textarea');
  const botonGuardar = document.createElement('button');
  const btnLogOut = document.createElement('button');

  // =====Escribimos la info dentro de los elementos=====
  postTitle.type = 'text';
  headerPost.textContent = 'Bienvenida a tu muro';
  postTitle.placeholder = 'Escribe aquí lo que piensas';
  botonGuardar.textContent = 'Guardar';
  btnLogOut.textContent = 'Cerrar sesión';
  btnLogOut.className = 'botones';
  titleCiber.className = 'titulo';
  subTitle.className = 'subtitulo';
  titleCiber.textContent = '<CiberFem>';
  subTitle.textContent = 'Inspiración para programadoras';
  // ============Damos clases a los elementos==============
  divPadre.className = 'divPadre';

  // ==============Damos ID a los elementos===============

  postTitle.id = 'postTitle';
  taskForm.id = 'taskForm';
  // post text id
  postText.id = 'postText';
  botonGuardar.id = 'botonGuardar';

  // se agrupan los elementos segun el form
  taskForm.append(postTitle, postText, botonGuardar);
  div.append(titleCiber, subTitle, headerPost, taskForm, divPadre, btnLogOut);

  // taskForm = document.getElementById('taskForm');

  taskForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    // console.log('submitted');
    const title = postTitle.value;
    // console.log(postTitle.value);
    const description = postText.value;
    //  console.log(postText.value);
    saveTask(title, description);
    // taskForm.reset();
  });

  getTask().then(() => {
    console.log('hola muro');
  });

  btnLogOut.addEventListener('click', () => {
    signOff().then(() => {
      console.log('cerrando');
      onNavigate('/');
    }).catch((error) => {
      if (error.code) {
        console.log(error.code);
      }
      // An error happened.
    });
  });

  return div;
};

import { signUp } from '../lib/index';
// import { auth } from '../lib/firebase.js';

export const registro = (onNavigate) => {
  const homeDiv = document.createElement('div');
  const title = document.createElement('h2');
  const backButton = document.createElement('button');
  const createAcount = document.createElement('button');
  const inputEmail = document.createElement('input');
  const emailErr = document.createElement('div');
  const emailErrT = document.createElement('div');
  const inputPsw = document.createElement('input');
  const nameUser = document.createElement('input');
  const generalErr = document.createElement('div');
  const formContainer = document.createElement('div');
  const signUpForm = document.createElement('form');
  title.textContent = '<CiberFem>';
  backButton.textContent = 'Regresar';
  title.textContent = 'Únete a la comunidad CiberFem';
  createAcount.textContent = 'crea tu usuario';
  emailErr.textContent = 'El email ya está en uso';
  emailErrT.textContent = 'Autenticación inválida';
  // Aquí ponemos clases a los botones
  createAcount.className = 'botones';
  createAcount.id = 'createAcount';
  backButton.className = 'botones';
  inputEmail.className = 'inputs';
  inputEmail.id = 'inputEmail';
  // id error test
  generalErr.id = 'generalErr';
  emailErr.classList.add('errors', 'hide');
  emailErr.id = 'emailErr';
  emailErrT.id = 'emailErrT';
  inputPsw.className = 'inputs';
  inputPsw.id = 'inputPsw';
  nameUser.className = 'inputs';
  generalErr.classList.add('errors', 'hide');
  title.className = 'titulo';
  formContainer.className = 'formbox';
  signUpForm.className = 'signUpForm';
  inputEmail.placeholder = 'Ingresa tu email aqui';
  inputPsw.placeholder = 'Ingresa tu contraseña';
  nameUser.placeholder = 'Ingresa Nombre de usuaria';
  inputPsw.type = 'password';
  createAcount.type = 'submit';

  backButton.addEventListener('click', () => {
    onNavigate('/');
  });

  signUpForm.append(inputEmail, emailErr, inputPsw, nameUser, generalErr, createAcount);
  formContainer.append(title, signUpForm, backButton);
  homeDiv.append(formContainer);

  signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    generalErr.classList.add('hide');
    emailErr.classList.add('hide');
    if (inputEmail.value === '' || inputEmail.value === null || inputEmail.value === undefined) {
      emailErr.textContent = 'Por favor introduce un correo válido';
      emailErr.classList.remove('hide');
    } else {
      try {
        const email = inputEmail.value;
        const Psw = inputPsw.value;
        const User = nameUser.value;
        console.log(email, Psw, User);
        const userData = await signUp(email, Psw);
        console.log(userData);
        signUpForm.reset();
        onNavigate('/feed');
      } catch (error) {
        let textMessage = 'Ups, ocurrió un error';
        if (error.code === 'auth/email-already-in-use') {
          textMessage = 'Email ya en uso';
        } else if (error.code === 'auth/invalid-email') {
          textMessage = 'Email inválido';
        } else if (error.code === 'auth/weak-password') {
          textMessage = 'Contraseña débil';
        }
        // else para finalizar errores
        generalErr.textContent = textMessage;
        generalErr.classList.remove('hide');
      }
    }
  });

  return homeDiv;
};

// const signUpForm = document.querySelector('#signUpForm');

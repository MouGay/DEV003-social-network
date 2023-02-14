import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebase.js';

export const registro = (onNavigate) => {
  const homeDiv = document.createElement('div');
  const title = document.createElement('h2');
  const buttonNewUser = document.createElement('button');
  const backButton = document.createElement('button');
  const createAcount = document.createElement('button');
  const inputEmail = document.createElement('input');
  const emailErr = document.createElement('div');
  const inputPsw = document.createElement('input');
  const nameUser = document.createElement('input');
  const generalErr = document.createElement('div');
  const formcontainer = document.createElement('div');
  const signUpForm = document.createElement('form');
  title.textContent = '<CiberFem>';
  buttonNewUser.textContent = 'Entra con tu cuenta';
  backButton.textContent = 'Regresar';
  title.textContent = 'Únete a la comunidad CiberFem';
  createAcount.textContent = 'crea tu usuario';
  emailErr.textContent = 'El email ya está en uso';
  // Aquí ponemos clases a los botones
  buttonNewUser.className = 'botones';
  createAcount.className = 'botones';
  backButton.className = 'botones';
  inputEmail.className = 'inputs';
  emailErr.classList.add('errors', 'hide');
  inputPsw.className = 'inputs';
  nameUser.className = 'inputs';
  generalErr.classList.add('errors', 'hide');
  title.className = 'titulo';
  formcontainer.className = 'formbox';
  signUpForm.className = 'signUpForm';
  inputEmail.placeholder = 'Ingresa tu email aqui';
  inputPsw.placeholder = 'Ingresa tu contraseña';
  nameUser.placeholder = 'Ingresa Nombre de usuaria';
  inputPsw.type = 'password';
  createAcount.type = 'submit';
  console.log(signUpForm);
  console.log(createAcount);

  buttonNewUser.addEventListener('click', () => {
    onNavigate('/logIn');
  });
  backButton.addEventListener('click', () => {
    onNavigate('/');
  });

  signUpForm.append(inputEmail, emailErr, inputPsw, nameUser, generalErr, createAcount);
  formcontainer.append(title, signUpForm, backButton, buttonNewUser);
  homeDiv.append(formcontainer);
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
        const userData = await createUserWithEmailAndPassword(auth, email, Psw);
        console.log(userData);
        signUpForm.reset();
      } catch (error) {
        let textMessage = 'Ups, ocurrió un error';
        if (error.code === 'auth/email-already-in-use') {
          textMessage = 'Email ya en uso';
        } else if (error.code === 'auth/invalid-email') {
          textMessage = 'Email inválido';
        } else if (error.code === 'auth/weak-password') {
          textMessage = 'Contraseña débil';
        }
        generalErr.textContent = textMessage;
        generalErr.classList.remove('hide');
      }
    }
  });

  return homeDiv;
};

// const signUpForm = document.querySelector('#signUpForm');

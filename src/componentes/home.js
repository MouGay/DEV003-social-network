import { entrarConGoogle, signInUser } from '../lib/index';

export const home = (onNavigate) => {
  // creamos elementos
  const homeDiv = document.createElement('div');
  const homeContainer = document.createElement('div');
  const imgContainer = document.createElement('div');
  const deskContainer = document.createElement('div');
  const container = document.createElement('div');
  // se crea div para insertar imagen del boton google
  const googleimg = document.createElement('div');
  const title = document.createElement('h2');
  const subTitle = document.createElement('h2');
  const registerButton = document.createElement('button');
  const logInButton = document.createElement('button');
  const logInGoogle = document.createElement('button');
  const inputEmail = document.createElement('input');
  const logInEmailErr = document.createElement('div');
  const inputPsw = document.createElement('input');
  const logInGeneralErr = document.createElement('div');

  // Aquí le dimos clases a los elementos
  container.className = 'logInContainer';
  registerButton.className = 'botones';
  logInButton.className = 'botones';
  logInGoogle.className = 'googleIcon';
  logInEmailErr.classList.add('errors', 'hide');
  logInGeneralErr.classList.add('errors', 'hide');
  // se asigna clase para dar estilo al div para el boton de google
  googleimg.classList = 'googleIcon';
  logInGoogle.id = 'btnlogInGoogle';
  title.className = 'titulo';
  subTitle.className = 'subtitulo';
  homeDiv.className = 'homediv';
  deskContainer.className = 'deskContainer';
  imgContainer.className = 'imgContainer';
  homeContainer.className = 'homeContainer';
  registerButton.textContent = 'Crea una cuenta';
  logInButton.textContent = 'Inicia sesión';
  title.textContent = '<CiberFem>';
  subTitle.textContent = 'Inspiración para programadoras';
  inputEmail.className = 'inputs';
  inputEmail.placeholder = 'Ingresa tu email aqui';
  inputPsw.className = 'inputs';
  inputPsw.placeholder = 'Ingresa tu contraseña';
  inputPsw.type = 'password';
  logInEmailErr.textContent = 'El email ya está en uso';

  registerButton.addEventListener('click', () => {
    onNavigate('/registro');
  });
  /* logInGoogle.addEventListener('click', () => {
    entrarConGoogle(onNavigate);
  }); pendiente de pregunta porqué no funciona */
  homeContainer.append(
    inputEmail,
    inputPsw,
    // se agregan cambian los errores para que aparezcan bajo los inputs
    logInEmailErr,
    logInGeneralErr,
    logInButton,
    registerButton,
    logInGoogle,

  ); // revisar porqué marca error
  deskContainer.append(imgContainer, homeContainer);
  homeDiv.append(title, subTitle, deskContainer);
  // funcion para login con usuarios creados  signInWithEmailAndPassword -> signInUser
  logInButton.addEventListener('click', (e) => {
    e.preventDefault();
    signInUser(inputEmail.value, inputPsw.value)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // pasa onNavigate como parametro llevando al feed si el usuario se logea
        onNavigate('/feed');
      })
      .catch((error) => {
        // const errorCode = error.code;
        let logInTextMsg = 'Ups, ocurrió un error';
        if (error.code === 'auth/wrong-password') {
          logInTextMsg = 'Contraseña equivocada';
        } else if (error.code === 'auth/invalid-email') {
          logInTextMsg = 'Ingresa el correo de tu cuenta';
        }
        logInGeneralErr.textContent = logInTextMsg;
        logInGeneralErr.classList.remove('hide');
      });
  });

  // pasando la función entrarConGoogle del index.js a home.js
  logInGoogle.addEventListener('click', () => {
    entrarConGoogle()
      .then((result) => {
        // The signed-in user info.
        // const user = result.user;
        console.log(result);
        onNavigate('/feed');
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        console.log(errorCode, errorMessage, email);
      });
  });

  return homeDiv;
};

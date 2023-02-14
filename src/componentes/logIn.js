export const logIn = (onNavigate) => {
  const homeDiv = document.createElement('div');
  const title = document.createElement('h2');
  const homeButton = document.createElement('button');
  const backButton = document.createElement('button');
  //const inputEmail = document.createElement('input');
  //const inputPsw = document.createElement('input');
  // Aquí pusimos clases  a los botones
  homeButton.className = 'botones';
  backButton.className = 'botones';
  //inputEmail.className = 'inputs';
  //inputPsw.className = 'inputs';
  homeButton.textContent = 'Entrar';
  backButton.textContent = 'Regresar al home';
  title.textContent = 'Inicia Sesión';
  title.className = 'titulo';
  //inputEmail.placeholder = 'ingresa tu email aqui';
  //inputPsw.placeholder = 'ingresa tu contraseña';
  //inputPsw.type = 'password';

  homeButton.addEventListener('click', () => {
    //                          ;
    onNavigate('/feed');
  });
  homeButton.addEventListener('click', () => {
    //    console.log(inputPsw.value);
    onNavigate('/feed');
  });
  backButton.addEventListener('click', () => {
    onNavigate('/');
  });

  homeDiv.append(title, /*inputEmail, inputPsw,*/ homeButton, backButton);

  return homeDiv;
};

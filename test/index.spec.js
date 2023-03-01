// importamos la funcion que vamos a testear
// import { async } from 'regenerator-runtime';
import { registro } from '../src/componentes/registro';
import { signUp } from '../src/lib';

jest.mock('../src/lib/firebase');
jest.mock('../src/lib/index');
// mock de index y firebase
function tick() {
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
}

// -----------------Función de registro -----------------

describe('Test registro', () => {
  /* let emailInput;
  let inputPsw;
  let createAcount; */
  let generalErr;
  let createAcount;
  beforeEach(() => {
    // llamado al componente registro
    document.body.appendChild(registro());
    /* emailInput = document.getElementById('emailInput');
    inputPsw = document.getElementById('inputPsw');
    createAcount = document.getElementById('createAccount'); */
    generalErr = document.getElementById('generalErr');
    createAcount = document.getElementById('createAcount');
  });

  it('debe mostrar error', async () => {
    signUp.mockImplementationOnce(() => Promise.reject(
      new Error('Firebase:Error (auth/invalid-email).'),
    ));
    // id signUpform
    createAcount.click();
    await tick();
    expect(generalErr.textContent).toBe('Email inválido');
  });
});

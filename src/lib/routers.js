import { home } from '../componentes/home.js';
import { registro } from '../componentes/registro.js';
//import { logIn } from '../componentes/logIn.js';
import { feed } from '../componentes/feed.js';
import { onNavigate, component } from '../main.js';


export const rootDiv = document.getElementById('root');

export const routes = {
  '/': home(onNavigate),
  //'/logIn': logIn(onNavigate),
  '/registro': registro(onNavigate),
  '/feed': feed(onNavigate),
};

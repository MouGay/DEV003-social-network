/* eslint-disable no-use-before-define */
import { home } from './componentes/home.js';
import { registro } from './componentes/registro.js';
import { feed } from './componentes/feed.js';

const rootDiv = document.getElementById('root');

const routes = {
  '/': home(onNavigate),
  '/registro': registro(onNavigate),
  '/feed': feed(onNavigate),
};

function onNavigate(pathname) {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );

  rootDiv.removeChild(rootDiv.firstChild);
  rootDiv.appendChild(routes[pathname]);
}

const component = routes[window.location.pathname];

window.onpopstate = () => {
  rootDiv.removeChild(rootDiv.firstChild);
  rootDiv.append(component);
};
rootDiv.appendChild(component);

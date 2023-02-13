import { rootDiv, routes } from './lib/routers.js';

export function onNavigate(pathname) {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );

  rootDiv.removeChild(rootDiv.firstChild);
  //Aquí Marcia nos ayudó a resolver la dependencia cíclica del OnNavigate
  rootDiv.appendChild(routes[pathname](onNavigate));
}

export const component = routes[window.location.pathname];

window.onpopstate = () => {
  rootDiv.removeChild(rootDiv.firstChild);
  rootDiv.append(component);
};
rootDiv.appendChild(component);

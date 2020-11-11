import Dashboard from './view/dashboard.js';
import Login from './view/loginPage.js';
import SignUp from './view/signUpPage.js';
import { routeRegex, getParams } from './constants/index.js';
export const routerSpa = async () => {
  const routes = [
    { path: '/', View: Dashboard },
    { path: '/login', View: Login },
    { path: '/sign', View: SignUp }
  ];

  // Test each route for potential match
  const potentialMatches = routes.map(route => {
    return {
      route: route,
      result: location.pathname.match(routeRegex(route.path))
    };
  });

  let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

  if (!match) {
    match = {
      route: routes[0],
      result: [location.pathname]
    };
  }

  const view = new match.route.View(getParams(match));

  document.querySelector('#root').innerHTML = await view.getHtml();
};

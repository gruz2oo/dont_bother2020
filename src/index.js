import { routerSpa } from './route.js';

export const navigateTo = url => {
  history.pushState(null, null, url);
  router();
};

const router = routerSpa;

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', e => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  router();
});

let contentDiv = document.getElementById('content');

let routes = {
  '/': home,
  '/index.html': home,
  '/about'     : about,
  '/contact'   : contact,
  '/projects'  : projects,
  '/featured0' : featured0,
  '/featured1' : featured1,
  '/featured2' : featured2,
  '/featured3' : featured3,
  '/featured4' : featured4,
  '/featured5' : featured5,
  '/featured6' : featured6,
  '/featured7' : featured7,
  '/featured8' : featured8,
  '/featured9' : featured9,
  '/featured10': featured10,
  '/featured11': featured11,
};

window.onpopstate = () => {
  contentDiv.innerHTML = routes[window.location.pathname];
}

let onNavItemClick = (pathName) => {
  window.history.pushState({}, pathName, window.location.origin + pathName);
  contentDiv.innerHTML = routes[pathName];
}

contentDiv.innerHTML = routes[window.location.pathname];

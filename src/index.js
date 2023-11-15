import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';

function loadNav(){
  const navbar = document.createElement('nav');
  navbar.id = 'navbar';

  const home = document.createElement('li');
  home.id = 'home';
  home.textContent = 'Home';
  const menu = document.createElement('li');
  menu.id = 'menu';
  menu.textContent = 'Menu';
  const contact = document.createElement('li');
  contact.id = 'contact';
  contact.textContent = 'Contact';
  
  const ul = document.createElement('ul');
  ul.appendChild(home)
  ul.appendChild(menu)
  ul.appendChild(contact);
  ul.childNodes.forEach(page => {
    page.addEventListener('click', () => switchToPage(page))
  });
  navbar.appendChild(ul);
  document.querySelector('#content').appendChild(navbar);
}

function switchToPage(page){
  if (!page.classList.contains('onpage')) {
    clearPage();
    loadPage(page.id);
  }
}

function clearPage(){
  document.querySelector(getCurrentPageId()).classList.remove('onpage');
  document.querySelector('#content')
  .removeChild(document.querySelector('main'));
}

function loadPage(page){
  const pages = {
    home: loadHome,
    menu: loadMenu,
    contact: loadContact
  };
  pages[page]();
}

function getCurrentPageId() {
  const pages = document.querySelector('nav>ul').childNodes
  for (let page of pages){
    if (page.classList.contains('onpage')){
      return `#${page.id}`;
    }
  }
}

loadNav();
loadHome();
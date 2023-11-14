import loadHome from './home.js';

function loadNav(){
  const navbar = document.createElement('nav');
  navbar.id = 'navbar';

  const home = document.createElement('li');
  home.id = 'home';
  home.textContent = 'Home';
  home.classList.add('onpage');
  const menu = document.createElement('li');
  menu.id = 'menu';
  menu.textContent = 'Menu';
  const contact = document.createElement('li');
  contact.id = 'contact';
  contact.textContent = 'Contact';

  // home.addEventListener('click', ()=> {
  //   switchToPage(home);
  // })
  // menu.addEventListener('click', ()=> {
  //   switchToPage(menu);
  // })
  // contact.addEventListener('click', ()=> {
  //   switchToPage(contact);
  // }) 

  const ul = document.createElement('ul');
  ul.appendChild(home)
  ul.appendChild(menu)
  ul.appendChild(contact);
  navbar.appendChild(ul);
  document.querySelector('#content').appendChild(navbar);
}

// function switchToPage(page){
//   if (!page.classList.contains('onpage')){
//     document.querySelector(getCurrentPage()).classList.remove('onpage');
//     clearPage();
//     loadPage(page);
//   }
// }

// function getCurrentPage() {
//   document.querySelector('nav').forEach(page => {
//     if (page.classList.contains('onpage')){
//       return page.id;
//     }
//   })
// }

loadNav();
loadHome();
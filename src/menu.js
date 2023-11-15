export default function loadMenu(){
  const main = document.createElement('main');
  main.id = "main-menu";
  const menuContainer = document.createElement('div');
  menuContainer.id = "menu-container";
  for (let i = 1; i <= 8; i++){
    const item = document.createElement('div');
    item.textContent = `menu${i}`;
    menuContainer.appendChild(item);
  }
  main.appendChild(menuContainer);
  document.querySelector('#content').appendChild(main);
  document.querySelector('nav #menu').classList.add('onpage');
}

export default function loadContact(){
  const main = document.createElement('main');
  main.id = "main-contact";
  const contact = document.createElement('div');
  contact.id = 'contact';
  contact.textContent = 'tel +6969696969';
  
  main.appendChild(contact);
  document.querySelector('#contact').classList.add('onpage');
  document.querySelector('#content').appendChild(main);
}
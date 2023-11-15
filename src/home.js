export default function loadHome(){
  const main = document.createElement('main');
  main.id = 'main-home';
  const sec1 = document.createElement('div');
  sec1.textContent = '1';
  const sec2 = document.createElement('div');
  sec2.textContent = '2';
  const sec3 = document.createElement('div');
  sec3.textContent = '3';
  const sec4 = document.createElement('div');
  sec4.textContent = '4';
  
  main.appendChild(sec1);
  main.appendChild(sec2);
  main.appendChild(sec3);
  main.appendChild(sec4);
  
  document.querySelector('#content').appendChild(main);
  document.querySelector('nav #home').classList.add('onpage');
}
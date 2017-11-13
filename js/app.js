/*
6 formas Para acceder a un elemento
var ul = document.getElementsByTagNameNS('ul')[0];
var ul = document.querySelectorAll('ul')[0];
var ul = document.querySelector('ul');
var ul= document.getElementById('ul-id');
var ul= document.getElementsByClassName('ul-class')[0];*/
var ul= document.getElementsByName('ul-class')[0];

for(var i = 0; i<ul.children.length; i++)
{
    console.log(ul.children[i].textContent);
}
/*para encontrar al padre */
var padre = ul.firstElementChild.parentElement;
var hijo = document.createElement('li');
hijo.textContent ='item nuevo';
var hermano = padre.firstChild;

/*padre.appendChild(hijo);*/
padre.insertBefore(hijo,hermano);

var padre = ul.firstElementChild.parentNode

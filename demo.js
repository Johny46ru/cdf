// ==UserScript== 
// @name Dream-kombi fix
// @description Комплексный 
// @author Cotona 
// @match http://dreamwar.ru/* 
// ==/UserScript== 
/* jshint -W097 */ 
if(location.href.match('dreamwar.ru')) { 
speed=321; 
vst = 1;//1 - вступаем в заявки, 0 - нет 
//########### 
//##ФУНКЦИИ## 
//########### 
//ТЕКСТ 
function legendsFindText(tx) {if(document.body.innerHTML.match(tx)) {return true;} else {return false;}} 
//ССЫЛКИ 
function legendsFindLink(tx) {l=0;for(i=0;i<document.links.length;i++){if(document.links[i].text.match(tx)&&!document.links[i].text.match('Собрать все')) {l=document.links[i].href; break;}} if(l!=0) {return l;} else {return false;}} 
function legendsFindLinkA(tx) {l=0;for(i=0;i<document.links.length;i++){if(document.links[i].text==tx) {l=document.links[i].href; break;}} if(l!=0) {return l;} else {return false;}} 
function legendsFindLinkAn(tx) {for(i=0;i<document.links.length;i++){if(document.links[i].text==tx) {l=i; break;}} return l;} 
function legendsFindLinkNoEnd(tx) {l=0;for(i=0;i<document.links.length-1;i++){if(document.links[i].text.match(tx)) {l=document.links[i].href; break;}} if(l!=0) {return l;} else return false;} 
function legendsFindLinkEnd(tx) {l=0;for(i=0;i<document.links.length-1;i++){if(document.links[i].text.match(tx)) {l=document.links[i].href;}} if(l!=0) {return l;} else {return false;}} 
function legendsFindLinkD(tx,bx) {l=0;for(i=0;i<document.links.length;i++){if(document.links[i].innerHTML.match(bx)&&document.links[i].text.match(tx)) {l=document.links[i].href; break;}} if(l!=0) {return l;} else {return false;}} 
//function legendsFindLinkD(tx,bx) {l=0;for(i=0;i<document.links.length;i++){if(document.links[i].innerHTML.match(bx)&&document.links[i].text.match(tx)) {l=document.links[i].href; break;}} if(l!=0) {return l;} else {return false;}} 
function legendsFindLinker(tx) {l=0;for(i=0;i<document.links.length;i++){if(document.links[i].href.match(tx)) {l=document.links[i].href; break;}} if(l!=0) {return l;} else {return false;}} 
/*Переход по ссылке с интервалом*/ 
function legendsLink(tx, sec) {if(tx!="") {setTimeout(function(){location.href=tx;}, sec);}} 
/*Проверка значения хранилища*/ 
function legendsIsStorage(name, tx) {if(localStorage.getItem(name)==tx) { return true; } else { return false;}} 
function legendsGet(name) {return localStorage.getItem(name);} 

function legendsSetInput(n,a) {if(n!=""&&a!="") {document.getElementsByTagName('input')[n].value=a;}} 

function legendsCoord(hh) {for(var i=0;i<document.getElementsByTagName('b').length;i++){if(document.getElementsByTagName('b')[i].innerHTML.match("/")){var sdf=document.getElementsByTagName('b')[i].innerHTML;var hgf=sdf.split('/');y=parseInt(hgf[0]);x=parseInt(hgf[1]);i=document.getElementsByTagName('b').length;}}if(hh=="x") {return x;} if(hh=="y") {return y;}} 
/*Назначение для хранилища*/ 
function legendsSet(name, tx) {if(localStorage.setItem(name, tx)) { return true; } else { return false;}} 
function legendsI(name, tx) {document.getElementById(name).innerHTML=tx;} 
function legendsClick(tx, sec) {for(var q=0;q<document.forms.length;q++){for(var y=0;y<document.forms[q].elements.length;y++){if (document.forms[q].elements[y].value.match(tx)){var go = document.forms[q].elements[y];setTimeout(function(){go.click();}, sec);}}}} 
function legendsAllCheck() { 
for(q=0;q<document.getElementsByTagName('input').length;q++){ 
if(document.getElementsByTagName('input')[q].getAttribute('type') == 'checkbox'&&document.getElementsByTagName('input')[q].value!=82) document.getElementsByTagName('input')[q].checked = true; 
} 
} 
function legends(a, z) {var num=(Math.floor(Math.random() * (a - z)) + z); return num;} 
function delete_cookie(name) { 
document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'; 
} 
function getParameterByName(name, url) { 
if (!url) url = window.location.href; 
name = name.replace(/[\[\]]/g, "\\$&"); 
var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
results =
regex.exec(url); 
if (!results) return null; 
if (!results[2]) return ''; 
return decodeURIComponent(results[2].replace(/\+/g, " ")); 
} 
function legendsSetInput(n,a) {if(n!=""&&a!="") {document.getElementsByTagName('input')[n].value=a;}} 
function legendsSelect(n,a) {objSel = document.getElementsByName(n)[0];objSel.options[a].selected=true;} 
function legendsSelCount(n) {objSel = document.getElementsByName(n)[0]; return objSel.options.length;} 

//########### 
//##ФУНКЦИИ## 
//########### 
legendsClick("Продолжить добычу",40000); 

if(legendsFindText('Бой')||legendsFindText('Bad Gateway')||legendsFindText('internal server error')||legendsFindText('Parse error')||legendsFindText('Iaiiaeou')||legendsFindText('Центр Арены')){ 
//Заметил, что частенько на баффах выпадает 503(502,500) ошибка. Обновляем страницу 
legendsLink(window.location.href,1); 
} 

if(legendsFindText('Добыча ресурсов')){ 
//legendsClick("Начать добычу",90000); 
legendsLink(legendsFindLink("Обновить"),3000, 5000); 
}
if(dreamFindText('Введите код:')){
dreamLink(window.location.href,40000); }
    
if(legendsFindText('Защита от дублирования')){ 
legendsLink(legendsFindLink("Обновить"),1000);} 
//if(legendsFindText('Точить вещь')){
//legendsLink(legendsFindLink("Да"),2000); 
//if(legendsFindText('Успех')||legendsFindText('Неудача'),2000){ 
//history.back(); 
//} 
//}    
if(legendsFindText('Инвентарь')){ 
legendsLink(legendsFindLink("30%"));
legendsLink(legendsFindLink("продать за")); 
legendsLink(legendsFindLink("Да")); 
legendsLink(legendsFindLink("Инвентарь")); 
} 
if(legendsFindText('Торговец древностями')){ 
legendsClick("OK",10); 
} 
if(legendsFindText('Классы и умения')){ 
legendsLink('http://dreamwar.ru/class.php?up=1&skill=13&UIN='+getParameterByName('UIN',legendsFindLink('На главную'))+'&&pass='+getParameterByName('pass',legendsFindLink('На главную'))+'&sid='+getParameterByName('sid',legendsFindLink('rand')),1); 
} 
if(legendsFindText('Гостевая книга')){ 
legendsLink(legendsFindLink("[x]")); 
} 

if(legendsFindText('Точить вещь')){ 
legendsClick("OK"); 
legendsLink(legendsFindLink("Да")); 
legendsLink(legendsFindLink("Кузница")); 
if(legendsFindText('Вы получили')){ 
legendsLink(legendsFindLink("Назад")); 
legendsLink(legendsFindLink("Кузница")); 
} 
if(legendsLinkLocation(2)==false) legendsLink(legendsLinkLocation(8),1); 
if(legendsLinkLocation(8)==false) legendsLink(legendsLinkLocation(2),1); 
} 
} 
// Your code here...

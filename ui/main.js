console.log('Loaded!');
var element=document.getElementById('main-txt');
element.innerHTML='new value';
var img =document.getElementById('anji');
var marginLeft=0;
function moveright(){
  marginLeft=marginLeft+10;
  img.style.marginLeft=marginLeft+'px';
}

img.onclick=function() {
    var interval=setInterval(moveright,100);
};
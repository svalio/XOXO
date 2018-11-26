window.onload = function(){
var td = document.getElementById('t');
var count = 0;
td.onclick = function(evt){
	var target = evt.target;
  if(count%2 == 0){
    target.textContent = '0';
    count++;
  }else{
    target.textContent = 'X';
    count++;
   }
  if (count == 9){
  	alert('gameOver');
  }
  checkWin();
}
var elems = document.getElementsByTagName('td');
function checkWin(){
	//x
  if(elems[0].textContent == 'X' && elems[1].textContent == 'X' && elems[2].textContent =='X'){setTimeout(function(){alert('x winner')},300)}
  if(elems[3].textContent == 'X' && elems[4].textContent == 'X' && elems[5].textContent =='X'){setTimeout(function(){alert('x winner')},300)}
  if(elems[6].textContent == 'X' && elems[7].textContent == 'X' && elems[8].textContent =='X'){setTimeout(function(){alert('x winner')},300)}
  if(elems[0].textContent == 'X' && elems[3].textContent == 'X' && elems[6].textContent =='X'){setTimeout(function(){alert('x winner')},300)}
  if(elems[1].textContent == 'X' && elems[4].textContent == 'X' && elems[7].textContent =='X'){setTimeout(function(){alert('x winner')},300)}
  if(elems[2].textContent == 'X' && elems[5].textContent == 'X' && elems[8].textContent =='X'){setTimeout(function(){alert('x winner')},300)}
  if(elems[0].textContent == 'X' && elems[4].textContent == 'X' && elems[8].textContent =='X'){setTimeout(function(){alert('x winner')},300)}
  if(elems[2].textContent == 'X' && elems[4].textContent == 'X' && elems[6].textContent =='X'){setTimeout(function(){alert('x winner')},300)}
  //0
  if(elems[0].textContent == '0' && elems[1].textContent == '0' && elems[2].textContent =='0'){setTimeout(function(){alert('0 winner')},300)}
  if(elems[3].textContent == '0' && elems[4].textContent == '0' && elems[5].textContent =='0'){setTimeout(function(){alert('0 winner')},300)}
  if(elems[6].textContent == '0' && elems[7].textContent == '0' && elems[8].textContent =='0'){setTimeout(function(){alert('0 winner')},300)}
  if(elems[0].textContent == '0' && elems[3].textContent == '0' && elems[6].textContent =='0'){setTimeout(function(){alert('0 winner')},300)}
  if(elems[1].textContent == '0' && elems[4].textContent == '0' && elems[7].textContent =='0'){setTimeout(function(){alert('0 winner')},300)}
  if(elems[2].textContent == '0' && elems[5].textContent == '0' && elems[8].textContent =='0'){setTimeout(function(){alert('0 winner')},300)}
  if(elems[0].textContent == '0' && elems[4].textContent == '0' && elems[8].textContent =='0'){setTimeout(function(){alert('0 winner')},300)}
  if(elems[2].textContent == '0' && elems[4].textContent == '0' && elems[6].textContent =='0'){setTimeout(function(){alert('0 winner')},300)}
 }
 
}
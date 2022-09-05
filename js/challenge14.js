const AGE_USER= parseInt(prompt("Podes ingresar cuantos años tienes:"));
if(AGE_USER<=10){
  alert("La canción mas destacada es de Shakira, Rauw Alejandro - Te Felicito");
}else if(AGE_USER>11 && AGE_USER<=20){
  alert("La canción mas destacada es de James Blunt - You're Beautiful");
}else if(AGE_USER>21 && AGE_USER<=30){
  alert("La canción más destacada es de Alejandro Sanz - Mi Soledad y yo");
}else if(AGE_USER>31 && AGE_USER<=40){
  alert("La canción mas destacada es de Europe - The Final Countdown");
}else if(AGE_USER>41 && AGE_USER<=50){
  alert("La canción mas destacada es de Queen - Bohemian Rhapsody");
}else if(AGE_USER>51 && AGE_USER<=60){
  alert("La canción mas destacada es de Ennio Morricone - El bueno, el feo y el malo");
}else if(AGE_USER>61 && AGE_USER<=70){
  alert("La canción más destacada es de Julio Sosa - Cambalache");
}else {
  alert("Por ahora estamos en busqueda de canciones para esas epocas.");
}
//otra alternativa es hacerlo con switch
switch(true){
  case AGE_USER<=10:
    alert("La canción mas destacada es de Shakira, Rauw Alejandro - Te Felicito");
    break;
  case AGE_USER>11 && AGE_USER<=20:
    alert("La canción mas destacada es de James Blunt - You're Beautiful");
    break;
  case AGE_USER>21 && AGE_USER<=30:
    alert("La canción más destacada es de Alejandro Sanz - Mi Soledad y yo");
    break
  case AGE_USER>31 && AGE_USER<=40:
    alert("La canción mas destacada es de Europe - The Final Countdown");
    break;
  case AGE_USER>41 && AGE_USER<=50:
    alert("La canción mas destacada es de Queen - Bohemian Rhapsody");
    break;
  case AGE_USER>51 && AGE_USER<=60:
    alert("La canción mas destacada es de Ennio Morricone - El bueno, el feo y el malo");
    break;
  case AGE_USER>61 && AGE_USER<=70:
    alert("La canción más destacada es de Julio Sosa - Cambalache");
    break;
  default:
    alert("Por ahora estamos en busqueda de canciones para esas epocas.");
}
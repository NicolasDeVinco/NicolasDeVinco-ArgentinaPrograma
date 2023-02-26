

/*----------------------FUNCIONES INFO PERSONAL------------------------------------------------------------------*/

const info = ['<img src="./images/date.png" width="20px" id="date">  Fecha nacimiento: 02/02/1986', '<img src="./images/country.png" width="20px" id="date"> País: Argentina', '<img src="./images/Phone_icon.png" width="20px" id="date"> Cel: 111111111111', '<img src="./images/Mail.svg.png" width="20px" id="date"> Mail: claraburton@gmail.aol', '<img src="./images/direccion.png" width="20px" id="date"> Domicilio: Calle Falsa 123'];

let text = "";
for (let i = 0; i < info.length; i++) {
  text += info[i] + "<br>" + "<br>" ;
}

document.getElementById("loop_for").innerHTML = text;




/*----------------------FUNCIONES REDES------------------------------------------------------------------ */

/* INSTAGRAM */

let insta_button = document.getElementById("insta");
let p_insta = document.getElementById('p_insta');


function insta() {
      
  if(p_insta.innerHTML.length === 0){
    p_insta.innerHTML = '@carlaburtonok';
  } else {
    p_insta.innerHTML = '';
  }
}   

insta_button.onclick = function() {insta()};



/* LINKEDIN */

let linke_button = document.getElementById("linke");
let p_linke = document.getElementById('p_linke');


function linke() {
      
  if(p_linke.innerHTML.length === 0){
    p_linke.innerHTML = 'carlaburton';
  } else {
    p_linke.innerHTML = '';
  }
}   

linke_button.onclick = function() {linke()};



/* FACEBOOK */

let face_button = document.getElementById("face");
let p_face = document.getElementById('p_face');


function face() {
      
  if(p_face.innerHTML.length === 0){
    p_face.innerHTML = '@soycarlaburtonof';
  } else {
    p_face.innerHTML = '';
  }
}   

face_button.onclick = function() {face()};



/* TWITTER */

let twit_button = document.getElementById("twit");
let p_twit = document.getElementById('p_twit');


function twit() {
      
  if(p_twit.innerHTML.length === 0){
    p_twit.innerHTML = '@soycarlaburton';
  } else {
    p_twit.innerHTML = '';
  }
}   

twit_button.onclick = function() {twit()};



/* TIK TOK */

let tik_button = document.getElementById("tik");
let p_tik = document.getElementById('p_tik');


function tik() {
      
  if(p_tik.innerHTML.length === 0){
    p_tik.innerHTML = '@carlitaburton';
  } else {
    p_tik.innerHTML = '';
  }
}   

tik_button.onclick = function() {tik()};



/* SNAPCHAT */

let snap_button = document.getElementById("snap");
let p_snap = document.getElementById('p_snap');


function snap() {
      
  if(p_snap.innerHTML.length === 0){
    p_snap.innerHTML = 'carlita_ok_burton';
  } else {
    p_snap.innerHTML = '';
  }
}   

snap_button.onclick = function() {snap()};




/*----------------------FUNCIONES HABILIDADES ------------------------------------------------------------*/

  document.getElementById("idiomas").onclick = function() {idiomas()};

  function idiomas() {
    document.getElementById("ingles").innerHTML= '<img src="./images/eeuu.png" width="20px"> Ingles avanzado';
    document.getElementById("frances").innerHTML= '<img src="./images/Flag_of_France_(1794–1815,_1830–1974,_2020–present).svg.png" width="20px"> Frances básico';
    document.getElementById("italiano").innerHTML='<img src="./images/italia.jpg" width="20px"> Italiano básico';
    document.getElementById("espanol").innerHTML= '<img src="./images/espana.jpg" width="20px"> Español natal';
    document.getElementById("idiomas").style.backgroundColor= "green";
    document.getElementById("informatica").style.backgroundColor= "blue";
    document.getElementById("deportes").style.backgroundColor= "blue";
    document.getElementById("pasiones").style.backgroundColor= "blue";
  }

  document.getElementById("informatica").onclick = function() {informatica()};

  function informatica() {
    document.getElementById("ingles").innerHTML= '<img src="./images/office.svg.png" width="15px"> Office avanzado';
    document.getElementById("frances").innerHTML= '<img src="./images/photoshop.png" width="15px"> Photoshop básico';
    document.getElementById("italiano").innerHTML= '<img src="./images/illustrator.svg.png" width="15px"> Illustrator básico';
    document.getElementById("espanol").innerHTML= '<img src="./images/twitter.svg.png" width="15px"> Redes sociales avanzado';
    document.getElementById("idiomas").style.backgroundColor= "blue";
    document.getElementById("informatica").style.backgroundColor= "green";
    document.getElementById("deportes").style.backgroundColor= "blue";
    document.getElementById("pasiones").style.backgroundColor= "blue";
  }

  document.getElementById("deportes").onclick = function() {deportes()};

  function deportes() {
    document.getElementById("ingles").innerHTML= '<img src="./images/hockey-4.png" width="20px"> Hockey';
    document.getElementById("frances").innerHTML= '<img src="./images/gimna.png" width="20px"> Gimnasio';
    document.getElementById("italiano").innerHTML= '<img src="./images/running.svg.png" width="20px"> Running';
    document.getElementById("espanol").innerHTML= '<img src="./images/paddle.png" width="20px"> Paddle';
    document.getElementById("idiomas").style.backgroundColor= "blue";
    document.getElementById("informatica").style.backgroundColor= "blue";
    document.getElementById("deportes").style.backgroundColor= "green";
    document.getElementById("pasiones").style.backgroundColor= "blue";
  }

  document.getElementById("pasiones").onclick = function() {pasiones()};

  function pasiones() {
    document.getElementById("ingles").innerHTML= '<img src="./images/pr.png" width="17px"> Redonditos de Ricota';
    document.getElementById("frances").innerHTML= '<img src="./images/River-Plate-icon.png" width="20px"> River Plate';
    document.getElementById("italiano").innerHTML= '<img src="./images/burguer.png" width="17px"> Comida';
    document.getElementById("espanol").innerHTML= '<img src="./images/avion.png" width="20px"> Viajar';
    document.getElementById("idiomas").style.backgroundColor= "blue";
    document.getElementById("informatica").style.backgroundColor= "blue";
    document.getElementById("deportes").style.backgroundColor= "blue";
    document.getElementById("pasiones").style.backgroundColor= "green";
 
  }













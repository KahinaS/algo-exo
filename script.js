var tab = ["Bob", "Julien", "Roger"];
//let tab =['Bob','Julien','Roger'];



function afficherListe(){
  document.getElementById('liste').innerHTML = "";
  for (var i = 0; i < tab.length; i++) {   
  

   
  document.getElementById('liste').innerHTML += '<li>' + tab[i] + '</li>';

 
}


}
function Etape1(){
  let nom  = document.getElementById('texte').value;
  tab.push(nom);
  afficherListe();
}
function annuler(){
tab.pop()
afficherListe();
}
$liste = document.getElementById("liste");
function selectionne(e) {  
   e.target.classList.toggle("selected");

}
$liste.onclick = selectionne;

function annule(){
  for (let i = liste.children.length-1/*il manquait le -1*/ ; i >= 0; i--){
    if (liste.children[i].classList.contains("selected")){
      tab.splice(i, 1);
    }
  }
afficherListe(); //il était pas mis au bon étage
}

function restaurer(){
   tab = ["Bob" , "Julien" , "Roger"];
  afficherListe();
    
}
$(document).ready(function(){
  var $carrousel = $('#carrousel'),  
    $img = $('#carrousel li'), 
    indexImg = $img.length - 1,
    i = 0,
    $currentImg = $img.eq(i); 

});




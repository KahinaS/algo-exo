const tab = ["Bob", "Julien", "Roger"];




function afficherListe(){
  document.getElementById('liste').innerHTML = "";
  for (var i = 0; i < tab.length; i++) {   
  

   
  document.getElementById('liste').innerHTML += '<li>' + tab[i] + '</li>';

 
}


}
function Etape1(){
  let nom = document.getElementById('texte').value;
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


for (var i = tab.children.length-1; i >= 0; i--) { 
if{

($liste.children[i].classList.contains('selected'))tab.splice(i, 1)
}
}

}
afficherListe();

} 



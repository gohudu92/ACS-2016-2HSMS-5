// variables
var page= 'aucune';

// fonctions initiales
description_site();

function description_site() {
	var flow ="Bienvenu sur CerveauTraining où vous trouverez plusieurs jeux d'entraînement cérébral à découvrir "+
	"pour toute la famille, pour les petits comme pour les grands enfants ! Ce site vous propose des jeux pour "+
	"tester votre mémoire et votre rapidité de réponse. Il y en a pour tout les goûts: jeu de réflexion, de rapidité, "+ 
	"de concentration, d'analyse, de reflexe ou de logique. Jouez à des jeux qui sont simples à comprendre "+
	"mais subtils à résoudre. Découvrez comment faire travailler votre cerveau en vous amusant. Vous "+ 
	"pourrez jouer seul ou au contraire remporter des défis contre vos amis.";
	document.querySelector(".description_jeu").innerHTML= flow;
}

function table_navigation() {

	var a = document.createElement('li');
	a.setAttribute('role','presentation');
	a.setAttribute('class','off');
	a.innerHTML = "<a href='index.html'>Accueil</a>";
	
	var b = document.createElement('li');
	b.setAttribute('role','presentation');
	b.setAttribute('class','off');
	b.innerHTML = "<a href='connexion.html'>Se Connecter</a>";
	
	var c = document.createElement('li');
	c.setAttribute('role','presentation');
	c.setAttribute('class','off');
	c.innerHTML = "<a href='creer_compte.html'>Créer un compte</a>";
	
	var d = document.createElement('li');
	d.setAttribute('role','presentation');
	d.setAttribute('class','off');
	d.innerHTML = "<a href='liste_jeux.html'>Liste des Jeux</a>";
	
	var e = document.createElement('li');
	e.setAttribute('role','presentation');
	e.setAttribute('class','off');
	e.innerHTML = "<a href='informations.html'>Informations</a>";
	
	if(page =='index') a.setAttribute('class','active');
	if(page =='connexion') b.setAttribute('class','active');
	if(page =='creer_compte') c.setAttribute('class','active');
	if(page =='liste_jeux') d.setAttribute('class','active');
	if(page =='informations') e.setAttribute('class','active');

	document.querySelector('#table_navigation').appendChild(a);
	document.querySelector('#table_navigation').appendChild(b);
	document.querySelector('#table_navigation').appendChild(c);
	document.querySelector('#table_navigation').appendChild(d);
	document.querySelector('#table_navigation').appendChild(e);
}

// Mosaique
var nombreDeTour = 0;
var stockImge = "";
var countTIM = 30;
//var counter = setInterval(timerCount,1000);
var counter = setInterval(prochaineEtape,5000);

function prochaineEtape() {
			
			for(var i=0;i<6;i++)
			{
				var chemin = '1imgMosa'+i;
				var image = document.getElementById(chemin);
				var j = (i+1+nombreDeTour)%6;
				chemin = 'images/photo'+j+'.png';
				image.src = chemin;
			}
			for(var i=0;i<6;i++)
			{
				var chemin = '2imgMosa'+i;
				var image = document.getElementById(chemin);
				var j = (i+3+nombreDeTour)%6;
				chemin = 'images/photo'+j+'.png';
				image.src = chemin;
			}
			for(var i=0;i<6;i++)
			{
				var chemin = '3imgMosa'+i;
				var image = document.getElementById(chemin);
				var j = (i+4+nombreDeTour)%6;
				chemin = 'images/photo'+j+'.png';
				image.src = chemin;
			}
			nombreDeTour++
						}
	
function jeSuisDessu(id) {
		var image = document.getElementById(id);
		if(image.src.match("dessus"))
		{
			image.src = stockImge;
		}
		else
		{
			stockImge = image.src;
			image.src="images/dessus.png";
		}
		
	}
	
function timerCount() {
  		countTIM=countTIM-1;
  		if (countTIM <= -1)
  		{
    		 clearInterval(counter);
    	 	return;
  		}		
	}
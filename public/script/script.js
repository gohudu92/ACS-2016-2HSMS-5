// variables
var page= 'aucune';
var pageJeux = false;
var infoJeu = [['4 images 1 mot',"C'est l'équivalent du célèbre jeu 4 images 1 mot mais revisité selon notre TD G! Regardez les 4 images, et décelez ce qu'elles ont en commun !!  Découvrez pourquoi tout le monde va adorer ce jeu !!","4images1mot"],['Memo',"Le Grand classique des jeux de réflexion par excellence.Le Principe reste le même: s'entrainer à mémoriser les emplacements des différentes cartes de couleurs.Retournes les cartes et trouves un maximum de paires en un minimum de temps!Seul bémol: tu peux avoir une plus grande mémoire en l'exercant régulièrement.","memo"],["Click Rapide","Tu crois connaitre tes couleurs ? Tu as peut-être eu l'impression d'être rapide lors du quizz en base de donnée.Voyons voir si tout ca est bien vrai !Appuies sur la case rouge à chaque fois q'elle apparaît .. Mais attention trompes toi de couleurs et tes points seront négatifs!!","clickRapide"],["Fast And Write","On m'a dit que à l'Esilv à force de toucher le clavier touts les étudiants écrivaient à la vitesse de la lumière.J'aimerai bien voir ça!1 mot un clavier et à toi de jouer ! Écris le plus de mots en moins de temps possibl!","FastAndWrite"],["Une couleur, Une porte","Aides toi des touches du clavier et passes les portes selon les bonnes couleurs.Jeux de rapidité et de couleurs. Voyons voir si tu es capable d'associer couleurs et rapidité !","flecheEvo"],["Calcul mental","Ca prend sa calculette pour faire 2+2 en partiel, entraine toi ici ! Grâce à ce jeu, tu pourras calculer à la vitesse d'une calculatrice, aucune opération ne saura t'arrêter, le calcul mental n'aura plus de secret pour toi !","calculMentale"],["Souviens toi !","As-tu une mémoire de poisson rouge ??!! Attention top chrono tu as 10 secondes !! Observe bien le modèle et rappelle toi des 16 chiffres dans le bon ordre !","grilleMemo"]];
// fonctions initiales
//description_site();
//creer_mosaique();

function description_site() {
	var flow ="Bienvenu sur CerveauTraining où vous trouverez plusieurs jeux d'entraînement cérébral à découvrir "+
	"pour toute la famille, pour les petits comme pour les grands enfants ! Ce site vous propose des jeux pour "+
	"tester votre mémoire et votre rapidité de réponse. Il y en a pour tout les goûts: jeu de réflexion, de rapidité, "+ 
	"de concentration, d'analyse, de reflexe ou de logique. Jouez à des jeux qui sont simples à comprendre "+
	"mais subtils à résoudre. Découvrez comment faire travailler votre cerveau en vous amusant. Vous "+ 
	"pourrez jouer seul ou au contraire remporter des défis contre vos amis.";
	document.querySelector(".description_jeu").innerHTML= flow;
	document.querySelector("body").fontSize = "20px";
	
}

function description_jeu(index){
	var flow = infoJeu[index][1];
	document.querySelector(".description_jeu").innerHTML= flow;
	document.querySelector("body").fontSize = "20px";
	document.getElementById("titreGame").innerHTML = infoJeu[index][0];
}


function clickLien(index)
{
		window.open('pages_jeux/'+infoJeu[index][2]);
}

function des_jeu(index)
{
		var titre = infoJeu[index][0];
		var contenu = infoJeu[index][1];
		document.getElementById('titreArt').innerHTML = titre;
		document.getElementById("corp").innerHTML= contenu;
}

function table_navigation() {
	var lien ="";
	/*if(pageJeux){lien = '../';}*/
	var a = document.createElement('li');
	a.setAttribute('role','presentation');
	a.setAttribute('class','off');
	a.innerHTML = "<a href='"+lien+"/' style='color:white;font-size:100%;'> <img src='images/maison_mod.png' style = 'width:40px;height:40px;'/> Accueil</a>";
	
	var b = document.createElement('li');
	b.setAttribute('role','presentation');
	b.setAttribute('class','off');
	b.innerHTML = "<a href='"+lien+"/connexion' style='color:white;font-size:100%;'> <img src='images/cle_mod.png' style = 'width:40px;height:40px;'/>Se Connecter</a>";
	
	var c = document.createElement('li');
	c.setAttribute('role','presentation');
	c.setAttribute('class','off');
	c.innerHTML = "<a href='"+lien+"/creer_compte' style='color:white;font-size:100%;'> <img src='images/bonhomme_mod.png' style = 'width:40px;height:40px;'/>Créer un compte</a>";
	
	var d = document.createElement('li');
	d.setAttribute('role','presentation');
	d.setAttribute('class','off');
	d.innerHTML = "<a href='"+lien+"/liste_jeux' style='color:white;font-size:100%;'> <img src='images/tete_mod.png' style = 'width:40px;height:40px;'/>Liste des Jeux</a>";
	
	var e = document.createElement('li');
	e.setAttribute('role','presentation');
	e.setAttribute('class','off');
	e.innerHTML = "<a href='"+lien+"/informations' style='color:white;font-size:100%;'> <img src='images/lampe_mod.png' style = 'width:40px;height:40px;'/>Informations</a>";
	
	
	if(pageJeux){document.getElementById("banniere").setAttribute('href',lien+'rouletteChose');}
    if(!pageJeux){document.getElementById("banniere").setAttribute('href',lien+'pages_jeux/rouletteChose');}
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
var counter = setInterval(prochaineEtape,1000);

//System.getProperty("line.separator");

var nombreL = 4;
var nombreC = 2;
var dessu = false;

function creer_mosaique() {
	var j;
	for (j=1 ; j<=nombreC;j++)
	{
	var flow = document.createElement('div');
	flow.setAttribute('class','colonne');
	var i;
	for(i=0 ; i<nombreL;i++)
	{
		var num = i+4*(j-1)	;
		flow.innerHTML += "<img id='"+j+"imgMosa"+i+"' src='images/photo"+num+".png' onmouseover='jeSuisDessu(this.id)' onmouseleave='jeSuisDessu(this.id)' onclick='clickLien("+(num-1)+")' style='width:200px;height:120px;'>";
	}
	document.querySelector('.mosaique').appendChild(flow);
	}
}

function prochaineEtape() {
			
			if(!dessu)
			{
			for(var i=0;i<nombreL;i++)
			{
				var chemin = '1imgMosa'+i;
				var image = document.getElementById(chemin);
				var j = (i+1+nombreDeTour)%nombreL;
				chemin = 'images/photo'+j+'.png';
				var index = j-1;
				image.setAttribute('onclick','clickLien('+index+')');
				image.src = chemin;
			}
			for(var i=0;i<nombreL;i++)
			{
				var chemin = '2imgMosa'+i;
				var image = document.getElementById(chemin);
				var j = (i+3+nombreDeTour)%nombreL+4;
				chemin = 'images/photo'+j+'.png';
				var index = j-1;
				image.setAttribute('onclick','clickLien('+index+')');
				image.src = chemin;
			}
			/*
			for(var i=0;i<nombreL;i++)
			{
				var chemin = '3imgMosa'+i;
				var image = document.getElementById(chemin);
				var j = (i+4+nombreDeTour)%nombreL;
				chemin = 'images/photo'+j+'.png';
				image.src = chemin;
			}
			*/
			nombreDeTour++
						}
}
	
var idPasse = 0;

function jeSuisDessu(id) {
		var image = document.getElementById(id);
		if(image.src.match("dessus"))
		{
			document.getElementById(id).style.opacity = 1;
			image.src = stockImge;
			dessu = false;
		}
		else
		{
			if(idPasse != 0){document.getElementById(idPasse).style.opacity =1;}
			idPasse = id;
			stockImge = image.src;
			var index = parseInt(stockImge[stockImge.length-5]-1);
			console.log(index);
			des_jeu(index);
			document.getElementById(id).style.opacity =0.5;
			//image.src="images/dessus.png";
			dessu = true;
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
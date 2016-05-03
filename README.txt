Objet : ESILV 2AG Projet 2HSMS-5 ACS 2016
Auteurs : Mélanie PENEDA, Sofia SALI, Sébastien PERRIER,
		Hugo PIERRE, Hugo POUSSEUR
Date : 02/05/2016

Le dossier contient les dossiers permettant de faire fonctionner avec Node
et MongoDB le site de notre Projet 2HSMS-5 nommé "#CerveauTraining".
Le dossier 'bd' est celui que nous utilisons comme chemin de base de données,
lorsque qu'on lance la commande 'mongod.exe --dbpath', le chemin doit se terminer
par le dossier ../bd".
La base de données créée pour le site s'appelle 2HSMS (si l'on souhaite y
accéder via mongo.exe)

Notre site propose 5 pages principales qui sont accessibles depuis le 
navigateur :

- la page « Accueil »: où on a une description du site et à droite une
mosaïque interactive de jeux, où l’on peut voir les différents jeux proposés
par le site. En pointant le curseur sur un jeu de cette mosaïque, on peut
directement lire sa description à gauche. Pour retourner à la description du
site, il suffit d’appuyer sur la page d’accueil ou si l’utilisateur n’est pas
encore connecté d’appuyer sur #Cerveau Training en haut de la page.

- la page « Créer un compte »: où il est possible de créer un compte en entrant
une adresse un pseudo et un mot de passe pour accéder aux jeux. Si le nom
d’utilisateur existe déjà un message d’erreur est affiché.

- la page « Se connecter »: où l’utilisateur rentre son pseudo et son mot de
passe. Ainsi lorsqu’il sera connecté en bas à droite il pourra lire « connecté
en tant que + son pseudo », et « Se déconnecter » ce qui lui permettra de se
déconnecter (sur toutes les pages). Si le mot de passe est erroné lors
de la connexion de l’utilisateur, un message d’erreur sera affiché. De même
si le pseudo entré n'existe pas.
Une fois connecté une roulette est mise en place pour choisir aléatoirement
le nom d’une personne, lorsqu’on appuie sur le titre du site tout en haut
(elle nous a servie à choisir les volontaires pour tester les jeux
lors de la présentation)

- la page « Liste des jeux »: on peut voir tous les jeux du site et leur
description, on a accès aux jeux en cliquant directement dessus. Lorsque l’on
place le curseur sur un jeu ce dernier, il s’affiche tout à droite avec sa
description. Une fois qu’on clique sur le jeu on à son image à droite et sa
description à gauche. Attention ces jeux ne sont accessibles que lorsque l’on
est connecté.

-la page « Information »: sert à donner des informations sur le site pour que
l’utilisateur en apprenne plus sur nous, et sur l'objectif de notre projet.

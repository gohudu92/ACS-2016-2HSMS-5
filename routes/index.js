var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var mongoose = require('mongoose');

var User = mongoose.model('User');
var Score = mongoose.model('Score');
var Game = mongoose.model('Game');

var util = require('util');


var Utils = require('../utils');
var utils = new Utils();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('pages/index', { user: req.user, msgs:utils.read_messages(req)});
});

/* GET creer_compte */
router.get('/creer_compte', function(req, res, next) {
    res.render('pages/creer_compte', { user: req.user, msgs:utils.read_messages(req)});
});

/* POST creer_compte */
router.post('/creer_compte', function(req,res,next){
	console.log('connexion demandé');
	//req.query pour les get, req.body pour les post
	if (!req.body.username || !req.body.password || !req.body.email){
		res.status(401);
        if (!req.body.username) utils.new_message(req,{type:'danger',msg:'Pas de pseudo renseigné'});
        if (!req.body.email) utils.new_message(req,{type:'danger',msg:'Pas d\'email renseigné'});
        if (!req.body.password) utils.new_message(req,{type:'danger',msg:'Pas de mot de passe renseigné'});
        
		res.render('pages/creer_compte', {title: 'Creer_compte', msgs:utils.read_messages(req)});
		return;
	}
	console.log('enregistrement ok -> trouver user ');
	// on vérif si l'user n'existe pas:
	User.findOne({username: req.body.username},function(err, doc){
		if (err){
			throw err;
		}
		if (doc){
			res.status(403);
            utils.new_message(req,{type:'danger',msg:'Le pseudo est déjà utilisé'});
			res.render('pages/creer_compte',{title:'Creer_compte', msgs:utils.read_messages(req)});
			return;
		}
		//sinon, on crée le mdp
		var myhash = utils.hashPW(req.body.password.toString());
		//on enregistre le nouvel utilisateur
		var user = new User({username: req.body.username, hashed_password:myhash, email: req.body.email});
		user.save(function(err){
			if (err){
				throw err;
			}
            utils.new_message(req,{type:'success',msg:'Compte créé correctement'});
			res.render('pages/creer_compte',{title:'Creer_compte', msgs:utils.read_messages(req),success:true});
		});
	});
});

/* GET informations */
router.get('/informations', function(req, res, next) {
    res.render('pages/informations', { user: req.user, msgs:utils.read_messages(req)});
});

/* GET liste_jeux */
router.get('/liste_jeux', function(req, res, next) {
    res.render('pages/liste_jeux', { user: req.user, msgs:utils.read_messages(req)});
});

/* GET connexion */
router.get('/connexion', function(req, res, next) {
    res.render('pages/connexion', { user: req.user, msgs:utils.read_messages(req)});
});

/* POST connexion */
router.post('/connexion',function(req, res, next) {
    User.findOne({username: req.body.username},function(err, doc){
        if(err) throw err;
        if (!doc) {
            utils.new_message(req,{type:'danger',msg:'Le Pseudo n\'existe pas'})
            res.redirect('/connexion');
            return;
        }
        if (utils.hashPW(req.body.password) == doc.hashed_password){
            req.session.userId = doc._id;
            res.redirect('/liste_jeux');
                
        }
        else {
            utils.new_message(req,{type:'danger',msg:'Mauvais mot de passe'});
            res.redirect('/connexion');
        }
    });
});

/* GET 4images1mot */
router.get('/pages_jeux/4images1mot', function(req, res, next) {
    res.render('pages/pages_jeux/4images1mot', { user: req.user, msgs:utils.read_messages(req)});
});

/* GET calculMentale */
router.get('/pages_jeux/calculMentale', function(req, res, next) {
    res.render('pages/pages_jeux/calculMentale', { user: req.user, msgs:utils.read_messages(req)});
});

/* GET clickRapide */
router.get('/pages_jeux/clickRapide', function(req, res, next) {
    res.render('pages/pages_jeux/clickRapide', { user: req.user, msgs:utils.read_messages(req)});
});

/* GET FastAndWrite */
router.get('/pages_jeux/FastAndWrite', function(req, res, next) {
    res.render('pages/pages_jeux/FastAndWrite', { user: req.user, msgs:utils.read_messages(req)});
});

/* GET flecheEvo */
router.get('/pages_jeux/flecheEvo', function(req, res, next) {
    res.render('pages/pages_jeux/flecheEvo', { user: req.user, msgs:utils.read_messages(req)});
});

/* GET grilleMemo */
router.get('/pages_jeux/grilleMemo', function(req, res, next) {
    res.render('pages/pages_jeux/grilleMemo', { user: req.user, msgs:utils.read_messages(req)});
});

/* GET memo */
router.get('/pages_jeux/memo', function(req, res, next) {
    res.render('pages/pages_jeux/memo', { user: req.user, msgs:utils.read_messages(req)});
});

/* GET rouletteChose */
router.get('/pages_jeux/rouletteChose',utils.HasToBeConnected, function(req, res, next) {
    res.render('pages/pages_jeux/rouletteChose', { user: req.user, msgs:utils.read_messages(req)});
});

/* GET users list. */
router.get('/users', function(req, res, next) {
  User.find(function(err,users){
		if (err) throw err;
		res.json(users);
  });
});
    
/* GET se déconnecter */
router.get('/logout',function(req,res,next){
    req.session.userId = null;
    res.redirect('/connexion');   
});

module.exports = router;
var express = require('express');
var Authrouter = express.Router();

//Authentications all TABs.

   Authrouter.get('/extras_coming_soon', function (req, res) {
      res.render('Extras/extras_coming_soon');
   })
   Authrouter.get('/extras_maintenance', function (req, res) {
      res.render('Extras/extras_maintenance');
   })   
   Authrouter.get('/pages_404', function (req, res) {
      res.render('Pages/pages_404');
   })
   Authrouter.get('/pages_500', function (req, res) {
      res.render('Pages/pages_500');
   })
   Authrouter.get('/pages_confirm_mail', function (req, res) {
      res.render('Pages/pages_confirm_mail');
   })
   Authrouter.get('/pages_lock_screen', function (req, res) {
      res.render('Pages/pages_lock_screen');
   })
   Authrouter.get('/pages_login', function (req, res) {
      res.render('Pages/pages_login');
   })
   Authrouter.get('/pages_logout', function (req, res) {
      res.render('Pages/pages_logout');
   })
   Authrouter.get('/pages_recoverpw', function (req, res) {
      res.render('Pages/pages_recoverpw');
   })
   Authrouter.get('/pages_register', function (req, res) {
      res.render('Pages/pages_register');
   })
   Authrouter.get('/email_templates_action', function (req, res) {
      res.render('Email/email_templates_action');
   })
   Authrouter.get('/email_templates_alert', function (req, res) {
      res.render('Email/email_templates_alert');
   })
   Authrouter.get('/email_templates_billing', function (req, res) {
      res.render('Email/email_templates_billing');
   })

module.exports = Authrouter;
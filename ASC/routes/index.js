var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/elements", function(req, res) {
  res.render("elements");
});
router.get("/index", function(req, res) {
  res.render("index");
});
router.get("/charts", function(req, res) {
  res.render("charts");
});
router.get("/error", function(req, res) {
  res.render("error");
});
router.get("/icons", function(req, res) {
  res.render("icons");
});
router.get("/notifications", function(req, res) {
  res.render("notifications");
});
router.get("/page-lockscreen", function(req, res) {
  res.render("page-lockscreen");
});
router.get("/page-login", function(req, res) {
  res.render("page-login");
});
router.get("/page-profile", function(req, res) {
  res.render("page-profile");
});
router.get("/panels", function(req, res) {
  res.render("panels");
});
router.get("/tables", function(req, res) {
  res.render("tables");
});
router.get("/typography", function(req, res) {
  res.render("typography");
});
module.exports = router;

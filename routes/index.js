var express = require("express");
var router = express.Router();
var model = require("./../model/tasks")();

/* GET home page. */
router.get("/", function(req, res, next) {
  var query = {status : "false"}
  var banco = model.find(query, function(err, tasks) {
    if (err) {
      throw err;
    }
    res.render("index", {
      title: "TODO-List",
      tasks: tasks
    });
  });
});
router.post("/add", function(req, res, next) {
  var body = req.body;
  body.status = false;
  model.create(body, function(err, task) {
    if (err) throw err;
    res.redirect("/");
  });
});


router.get("/finish/:id", function(req, res, next) {
  var id = req.params.id;
  model.findById(id, function (err , task) {
    if(err)
      throw err;
    task.status = !task.status;
    task.save(function () {
      res.redirect('/');
    });
  });
});

module.exports = router;

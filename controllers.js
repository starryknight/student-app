const students = require("./model");
const controller = {
  home: function(req, res) {
    res.render("students/home", { word: "What's up app" });
  },
  index: function(req, res) {
    res.render("students/index", { students });
  },
  show: function(req, res) {
    for (let i = 0; i < students.length; i++) {
      if (students[i].name === req.params.name) {
        console.log(students[i]);
        res.render("students/show", { student: students[i] });
      }
    }
  }
};
module.exports = controller;

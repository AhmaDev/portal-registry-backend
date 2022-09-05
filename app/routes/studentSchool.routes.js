module.exports = (app) => {
   const studentSchool = require("../controllers/studentSchool.controllers.js");

   app.post("/api/addStudentSchool", studentSchool.create);

   app.get("/api/studentSchools", studentSchool.findAll);

   app.get("/api/studentSchool/:id", studentSchool.findOne);

   app.get("/api/storeSchool", studentSchool.createByFile);

   app.put("/api/manyStudentSchool", studentSchool.updateMany);

   app.put("/api/studentSchool/:id", studentSchool.update);

   app.delete("/api/studentSchool/:id", studentSchool.delete);

   app.delete("/api/studentSchools", studentSchool.deleteAll);
};

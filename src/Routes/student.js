const express = require("express");
const router = express.Router();

const studentsController = require("../Controller/student.controller");


router.post("/student/create", studentsController.createStudent);

router.get("/student/:studentId", studentsController.getSingleStudent);


module.exports = router;
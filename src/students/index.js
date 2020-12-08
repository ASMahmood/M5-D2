const express = require("express");
const fs = require("fs");
const path = require("path");
const uniqid = require("uniqid");

const router = express.Router();

router.get("/", (req, res) => {
  const studPath = path.join(__dirname, "studs.json"); //creates filepath to json
  const fileBleepBloop = fs.readFileSync(studPath); //turns file into machine shit
  const fileString = fileBleepBloop.toString(); //turns machine shit into a string
  const studArray = JSON.parse(fileString); //turns string into 🎈JASON🎈
  res.send(studArray); //sends json in the response
});

router.get("/:id", (req, res) => {
  const studPath = path.join(__dirname, "studs.json"); //creates filepath to json
  const fileBleepBloop = fs.readFileSync(studPath); //turns file into machine shit
  const fileString = fileBleepBloop.toString(); //turns machine shit into a string
  const studArray = JSON.parse(fileString); //turns string into 🎈JASON🎈
  let peepo = req.params.id; //getting id from url
  let desiredStud = studArray.filter((stud) => stud.ID === peepo); //getting the object that has the id
  res.send(desiredStud); //sends json in the response
});

router.post("/", (req, res) => {
  const studPath = path.join(__dirname, "studs.json"); //creates filepath to json
  const fileBleepBloop = fs.readFileSync(studPath); //turns file into machine shit
  const fileString = fileBleepBloop.toString(); //turns machine shit into a string
  const studArray = JSON.parse(fileString); //turns string into 🎈JASON🎈
  const newStud = req.body;

  newStud.ID = uniqid();

  studArray.push(newStud);

  fs.writeFileSync(studPath, JSON.stringify(studArray));

  res.status(201).send(newStud.ID); //sends json in the response
});

router.put("/:id", (req, res) => {
  const studPath = path.join(__dirname, "studs.json"); //creates filepath to json
  const fileBleepBloop = fs.readFileSync(studPath); //turns file into machine shit
  const fileString = fileBleepBloop.toString(); //turns machine shit into a string
  const studArray = JSON.parse(fileString); //turns string into 🎈JASON🎈

  let peepo = req.params.id;

  let newStudArray = studArray.filter((stud) => stud.ID !== peepo);

  let editedStud = req.body;
  editedStud.ID = peepo;

  newStudArray.push(editedStud);

  fs.writeFileSync(studPath, JSON.stringify(newStudArray));

  res.send("bobs ur uncle"); //sends json in the response
});

router.delete("/:id", (req, res) => {
  const studPath = path.join(__dirname, "studs.json"); //creates filepath to json
  const fileBleepBloop = fs.readFileSync(studPath); //turns file into machine shit
  const fileString = fileBleepBloop.toString(); //turns machine shit into a string
  const studArray = JSON.parse(fileString); //turns string into 🎈JASON🎈

  let peepo = req.params.id;

  let newStudArray = studArray.filter((stud) => stud.ID !== peepo);

  fs.writeFileSync(studPath, JSON.stringify(newStudArray));

  res.send("deleted"); //sends json in the response
});

module.exports = router;

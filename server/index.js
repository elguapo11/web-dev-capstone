// server/index.js
require('dotenv').config(); 
const express = require("express");
const journalEntryController = require('./journalEntryController')
const {Sequelize} = require('sequelize');




const {PORT, CONNECION_STRING} = process.env

const app = express();

const sequelize = new Sequelize (CONNECION_STRING, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false, 
    },
  }, 
}); 

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get('/api/journalentries', journalEntryController.getJournalEntries)

//this line of code is pulling from journalentrycontroller, and we used "object.property", which makes reading the code easier, instead of req, res. 

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
}); 


// server/index.js

const express = require("express");
const journalEntryController = require('./journalEntryController')

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get('/api/journalentries', journalEntryController.getJournalEntries)

//this line of code is pulling from journalentrycontroller, and we used "object.property", which makes reading the code easier, instead of req, res. 

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


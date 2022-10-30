//functions itself go here

const { DATE, DATEONLY } = require("sequelize");

module.exports = {
  getJournalEntries: async (req, res) => {
    const { sequelize } = req.app.get("db");
    const [journalEntryList] = await sequelize.query(
      "select * from journal_entry ;"
    );
    console.log(journalEntryList);
    res.status(200).send(journalEntryList);
  },
  putJournalEntries: async (req, res) => {
    const { sequelize } = req.app.get("title");
    const [edit, metadata] = await sequelize.query(
      `UPDATE journal_entry SET journal_text = '${"sldk"}' WHERE journal_entry_id = ${1}`
    );
    res.status(200).send("dope");
  },
  postJournalEntries: async (req, res) => {
    const { sequelize } = req.app.get("db");

    const { entry, title } = req.body;

    const create = await sequelize.query(
      `INSERT INTO journal_entry (journal_text, journal_title, date_created) VALUES ('${entry}','${title}',CURRENT_TIMESTAMP) `
    );
    res.status(200).send(req.body);
  },

  deleteJournalEntries: async (req, res) => {
    const { sequelize } = req.app.get("db");

    const journalEntryID = req.params.id;
    console.log("*****" + journalEntryID + "****");

    const deleteEntry = await sequelize.query(
      `DELETE FROM journal_entry WHERE journal_entry_id = ${journalEntryID}`
    );

    res.status(200).send();
  },
};

//this file is the logic that we are using in our index file.

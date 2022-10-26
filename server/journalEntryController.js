//functions itself go here

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
      `INSERT INTO journal_entry (journal_text, journal_title) VALUES ('${entry}','${title}') `
    );
    res.status(200).send(req.body);
  },
  deleteJournalEntries: async (req, res) => {
    const { sequelize } = req.app.get("db");
    const deleteEntry = await sequelize.query(
      `DELETE FROM journal_entry WHERE journal_text = ('${"sd"}') `
    );
    res.status(200).send("success");
  },
};

//this file is the logic that we are using in our index file.

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
  putJournalEntries: (req, res) => {
    res.status(200).send("dope");
  },
  postJournalEntries: (req, res) => {
    res.sendStatus(200);
  },
  deleteJournalEntries: (req, res) => {
    res.sendStatus(200);
  },
};

//this file is the logic that we are using in our index file.

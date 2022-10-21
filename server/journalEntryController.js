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
    const { sequelize } = req.app.get("db");
    const [edit, metadata]  = await sequelize.query(`UPDATE journal_entry SET journal_text = '${'sldk'}' WHERE journal_entry_id = ${1}`)
    res.status(200).send("dope");
  },
  postJournalEntries: async (req, res) => {
    const { sequelize } = req.app.get("db");
    const create = await sequelize.query (`INSERT INTO journal_entry (journal_text) VALUES ('${'sd'}') `); 
    res.status(200).send('cool beans');
  },
  deleteJournalEntries: (req, res) => {
    res.sendStatus(200);
  },
};

//this file is the logic that we are using in our index file.

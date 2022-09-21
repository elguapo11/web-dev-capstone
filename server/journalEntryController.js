//functions itself go here

module.exports = { 
    getJournalEntries: (req, res) => {
        res.status(200).send('ok')
    }, 
    putJournalEntries: (req, res) => {
        res.status(200).send('dope')
    }, 
    postJournalEntries: (req, res) => {
        res.sendStatus(200)
    },
    deleteJournalEntries: (req, res) => {
        res.sendStatus(200)
    }
    
}


//this file is the logic that we are using in our index file. 
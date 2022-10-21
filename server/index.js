// server/index.js
require('dotenv').config(); 

const express = require("express");
const journalEntryController = require('./journalEntryController')
const { Sequelize } = require('sequelize');



const {PORT, CONNECTION_STRING} = process.env;

const app = express();
app.use(express.json());


const sequelize = new Sequelize (CONNECTION_STRING, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false, 
    },
  }, 
}); 

sequelize.authenticate()

  .then(() => {
    app.set('db', { sequelize })
    
    app.get("/api", (req, res) => {
      res.json({ message: "Hello from server!" });
    });
     
    app.get('/api/journalentries', journalEntryController.getJournalEntries); 
    
    app.put('/api/journalentries/edit', journalEntryController.putJournalEntries)

    app.post('/journals', async (req, res) => {


      const { journals } = req.body;
      
      await sequelize.query(`
        insert into journal_entry(
          journal_text  
          ) values (
            '${journals}'
            );
          `);

      console.log(req.body);
      res.sendStatus(200); 
    }); 

    
    //this line of code is pulling from journalentrycontroller, and we used "object.property", which makes reading the code easier, instead of req, res. 
    
    app.listen(PORT, () => {
      console.log(`Server listening on ${PORT}`);
    }); 
    
    
  })



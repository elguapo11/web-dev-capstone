import { useState } from "react";
import axios from "axios";

function JournalEntryDisplay() {
  const [retrieveEntries, setRetrieveEntries] = useState([]);

  const handleClick = (e) => {
    axios.get("/api/journalentries").then((res) => {
      setRetrieveEntries(res.data);
      console.error();
    });
  };

  return (
    <div>
      <div>
        <button onClick={handleClick}>Get Journals </button>
        {retrieveEntries.map((entry, index) => {
          return (
            <div key={index}>
              <div>
                <li htmlFor="Journal Entry Number"> Entry number: {entry.journal_entry_id}</li>
                <li htmlFor="title"> Title: {entry.journal_title}</li>
                <li htmlFor="text">Thoughts of the day: {entry.journal_text}</li>
                <li htmlFor="Date Created">Date Created: {entry.date_created}</li>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default JournalEntryDisplay;

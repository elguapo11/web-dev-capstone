import { useState } from "react";
import axios from "axios";
import JournalItem from "./JournalItem";


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
        {retrieveEntries.map((entry) => {
          return (
            <JournalItem entry={entry}/>
          
          );
        })}
      </div>
      
    </div>
  );
}

export default JournalEntryDisplay;
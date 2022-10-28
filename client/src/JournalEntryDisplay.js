import { useState } from "react";
import axios from "axios";

function JournalEntryDisplay() {
  const [retrieveEntries, setRetrieveEntries] = useState([]);
  // useEffect(() => {
  //   axios.get("/api/journalentries").then((res) => {
  //     setRetrieveEntries(res.data);
  //   });
  // }, []);

    const handleClick = (e) => {
      axios.get("/api/journalentries").then((res) => {
        setRetrieveEntries(res.data)
        console.error();
      });
    }

  return (
    
    
    <div>
      <div
       
      >
         <button onClick={handleClick}>Get Journals </button>
        {retrieveEntries.map((entry, index) => {
          return (
            <div key={index}>
              <div>
                <li htmlFor="title">{entry.journal_title}</li>
                <li htmlFor="text">{entry.journal_text}</li>
              </div>
            </div>
          );
        })}
      </div>
        

    

    </div>
    
  );
}

export default JournalEntryDisplay;
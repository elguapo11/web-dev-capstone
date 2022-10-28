import { useEffect, useState } from "react";
import axios from "axios"; 


function JournalEntryDisplay() {
  const [retrieveEntries, setRetrieveEntries] = useState([]);
  useEffect(() => {
    axios.get("/api/journalentries").then((res) => {

      setRetrieveEntries(res.data)


    })
      
  }, []);

    return( 
      
      
      
      <div>
            <div
                style={{
                  display: 'flex',
                  alignSelf: 'self',
                  height: '100vh',
                  color: "blue", 
                }}
            >
                {retrieveEntries.map( (entry, index) => {
                  return (
                  <div key={index}>
                    <div>
                      <h2><li>{entry.journal_text}</li></h2>
                    </div>
                  </div>
          )   
            
        }

        )}
                
                
            </div>
                
                
               

        
      </div>

    )
}

export default JournalEntryDisplay;   
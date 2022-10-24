import axios from "axios";
import { useRef } from "react";


function Create() {
  const titleRef = useRef()
  const entryRef = useRef()

  function onSubmit(e) {
    e.preventDefault()
    console.log({text: titleRef.current.value, entry: entryRef.current.value})
}

return (
  <form onSubmit={onSubmit}>
    <label htmlFor="title">Title</label>
    <input ref= {titleRef} type= "title" id="title"/>
    <label htmlFor="title">Entry</label>
    <input ref= {entryRef} type= "entry" id="entry"/>
    <button type="submit">Submit</button>
    </form>
  )}


  // const Entries = (props) => {
  //   const { entryData, removeEntry } = props;
  
  //   const [journalShow, setJournalShow] = useState([]);
  
  //   useEffect(() => {
  //     axios.get("/api/journalentries").then((res) => {
  //       const journalEntryList = res.data;
  //       console.log(journalEntryList);
  //     });
  //   }, []);
  
  //   return (
  //     <div>
  //       <h2>My Entries</h2>
  
  //       <EntryHeader />
  //       <EntryBody entryData={entryData} removeEntry={removeEntry} />
  //     </div>
  //   );
  // };
  

  export default Entries;

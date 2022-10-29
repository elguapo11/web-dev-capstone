import { useRef } from "react";
import axios from "axios";



function DeleteEntry() {
    const entryIDRef = useRef();

  function onSubmit(e) {
    e.preventDefault();
    const journalEntryID = {
      journalId: entryIDRef.current.value,
    };

    axios
      .delete("/api/journalentries/deleteEntries", journalEntryID)
      .then((response) => console.log(`journal number ${journalEntryID} has been deleted`));
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="Delete Entry"> Delete Entry</label>
      <button type="submit">Submit</button>
      <input ref={entryIDRef} type="ID" id="ID" />
    </form>
  );
}
export default DeleteEntry;

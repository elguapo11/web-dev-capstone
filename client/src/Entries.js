import { useRef } from "react";
import axios from "axios";

function Create() {
  const titleRef = useRef();
  const entryRef = useRef();

  function onSubmit(e) {
    e.preventDefault();
    const journalDataBody = {
      title: titleRef.current.value,
      entry: entryRef.current.value,
    };
    

    axios
      .post("/api/journalentries/create", journalDataBody)

      .then((response) => console.log(journalDataBody));
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="title">Title</label>
      <input ref={titleRef} type="title" id="title" />
      <span></span>
      <label htmlFor="title">Start Writing</label>
      <input ref={entryRef} type="entry" id="entry" />
      <button type="submit">Submit</button>
     
    </form>
  );
}

<h2>Hello world</h2>;

export default Create;

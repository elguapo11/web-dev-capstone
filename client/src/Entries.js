import { useRef } from "react";

function Create() {
  const titleRef = useRef();
  const entryRef = useRef();

  function onSubmit(e) {
    e.preventDefault();
    console.log({
      text: titleRef.current.value,
      entry: entryRef.current.value,
    });
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

export default Create;

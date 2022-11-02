const JournalItem= (props) => {
    const entry = props.entry
    return (

        <div key={entry.journal_entry_id}>
        <div>
          <h4 htmlFor="Journal Entry Number"> Entry number: {entry.journal_entry_id}</h4>
          <h2 htmlFor="title"> Title: {entry.journal_title}</h2>
            <ul>
              <p htmlFor="text">Thoughts of the day: {entry.journal_text}</p>
              <p htmlFor="Date Created">Date Created: {entry.date_created}</p>
            </ul>
        </div>
      </div>
    )     

}

export default JournalItem
const JournalItem= (props) => {
    const entry = props.entry
    return (

        <div key={entry.journal_entry_id}>
        <div>
          <h1 htmlFor="Journal Entry Number"> Entry number: {entry.journal_entry_id}</h1>
          <h2 htmlFor="title"> Title: {entry.journal_title}</h2>
            <ul>
              <li htmlFor="text">Thoughts of the day: {entry.journal_text}</li>
              <li htmlFor="Date Created">Date Created: {entry.date_created}</li>
            </ul>
        </div>
      </div>
    )     

}

export default JournalItem
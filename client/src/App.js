import Create  from './Entries';
import Retrieve from './JournalEntryDisplay'
import DeleteJournalEntry from './DeleteEntry';


function App() {
  return (
    <div className="App">
          <h2>My Online Journal</h2>
      <Create />
      <Retrieve/>
      <DeleteJournalEntry/>
        
    </div>
  );
}

export default App;
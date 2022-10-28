import Create  from './Entries';
import Retrieve from './JournalEntryDisplay'


function App() {
  return (
    <div className="App">
          <h2>My Online Journal</h2>
      <Create />
      <Retrieve/>
        
    </div>
  );
}

export default App;
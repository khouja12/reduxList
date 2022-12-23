import './App.css';
import AddTask from './Component/AddTask/AddTask';
import Edit from './Component/Edit/Edit';
import ListTask from './Component/ListTask/ListTask';
function App() {
  return (
    <div className="App">
    <h1> redux</h1>
      <AddTask/>
      <ListTask/>
    </div>
  );
}

export default App;

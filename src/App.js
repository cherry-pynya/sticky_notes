import React, {useEffect} from 'react';
import './App.css';
import AddButton from './components/AddButton.js';
import Note from './components/Note.js'



function App() {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    fetch('http://localhost:8000/data')
    .then(response => response.json())
    .then(data => {
      setData(data);
    })
  }, [])
  return (
    <div className="App">
      {data.map((i, index)=>{return <Note data={{i, index}} key={i.id} />})}
      <AddButton />
    </div>
  );
}

export default App;

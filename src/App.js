import { useState } from 'react';
import './App.css';
import Tours from './component/Tours';
import data from './data';
function App() {
  const [tours,setTour] = useState(data);
  function removeTour(id){
      const newTour = tours.filter(tour=> (tour.id)!== id);
      setTour(newTour)
  }
  function refreshHandler(){
    setTour(data);
  }
  if(tours.length===0){
    return(
      <div className='noTour'>
        <h2>No Tour Left</h2>
        <button className='btn' onClick={refreshHandler}>Refresh</button>
      </div>
    );
  }
  return (
    <div className="App">
      <Tours tours={tours} removeHandler={removeTour}></Tours>
    </div>
  );
}

export default App;

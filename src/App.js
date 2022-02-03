
import react, { useState } from 'react';
import './App.css';
import ToDo from './ToDo';
function App() {
  const [data, setdata] = useState("")
  const [item, setitem] = useState([])
  const addItem = (e) => {
    setdata(e.target.value)
  }
  function addI() {
    setitem((olditem) => {
      return [...olditem, data]

    });
    setdata("")
  }
  const Delet = (id) => {

    console.log("deleted")
    setitem((olditem) => {
      return olditem.filter((arry, index) => {
        return index != id;
      })
    })
  };
  return (
    
     
   
     
        <div id="in1">
          <div id='h3' >
        <h1>To - Do List </h1>
        </div>
    
      <input id="in2" type="text" onChange={addItem} value={data}></input>
      <button id="in3" onClick={() => addI()}>add</button>
      {
        item.map((items, index) => {
          return <ToDo items={items}
            id={index}
            key={index}
            Delet={Delet}
          />
        })
      }
    </div>
    
  )
}

export default App;

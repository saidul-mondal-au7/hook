import React, { useState } from 'react';

import './App.css';
import Person from './Persons/Person';
function App() {
  const [personState, personFunc] = useState({
    persons : [
      { id:"asdgfd", name:"Saidul", age:32 },
      { id:"achjvhjfw", name:"Sukhia", age:27 },
      { id:"asxgugsiu", name:"Ishrat", age:4 }
    ]
  })

  const [showPerson, showFunc] = useState({
    showComponents : false
  })

  const switchNameHandler = (event, id) => {
    const personIndex = personState.persons.findIndex((p)=>{
      return p.id = id;
    })

    const person = {
      ...personState.persons[personIndex]
    }

    person.name=event.target.value
    const persons = [...personState.persons]
    persons[personIndex] = person

    personFunc({
      persons 
    })
  }

  const toggleHandler = () => {
    const doesShow = showPerson.showComponents;
    showFunc({
      showComponents : !doesShow
    })
  }

  const deletePersonHandler = (personIndex) => {
     const persons = [...personState.persons]
     persons.splice(personIndex, 1)
     personFunc({ persons })
  }

  const style = {
    backgroundColor : "white",
    font : "inherit",
    border : "1px solid blue",
    padding : "8px",
    cursor : "pointer"
  }

  let persons = null;

  if(showPerson.showComponents){
    persons = (
      personState.persons.map((person) => {
        return <Person 
        click = {deletePersonHandler}
        change={(event)=>switchNameHandler(event, person.id)} 
        key={person.id} 
        name={person.name} 
        age={person.age} 
      />
      })
      
    )
  }

  return (
    <div className="App">
      <h1>This is react hook revision </h1>
      <button style={style} onClick={toggleHandler} >Swtich</button>
       {persons}
    </div>
  );
}

export default App;

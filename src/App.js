import logo from './logo.svg';
import './App.css';
import db from './firebase'
import { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";

function App() {

  const [people, setPeople] = useState();

  async function getPeople() {
    try {
      const querySnapshot = await getDocs(collection(db, "people"));
      setPeople(querySnapshot)
      querySnapshot.forEach((doc) => {
        console.log(doc)
        console.log(`${doc.id} => ${doc.data().name}`);
      });
    } catch (error) {
      console.log(error)
    }
  }

useEffect(() => {
  console.log('hello')
  getPeople();
}, [])


  return (
    <div className="App">
      <header className="App-header">
        <h1>People</h1>
        {people?.docs.map((person) => <p>{person.data().name}</p>)}
      </header>
    </div>
  );
}

export default App;

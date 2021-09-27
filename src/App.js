import React from 'react'
import {useState} from 'react'
import ClassCounter from './components/ClassCounter'
import Counter from './components/Counter'

function App() {
  const [value,setValue] = useState('Текст в Инпуте')
 
  return (
    <div className="App">
    <ClassCounter/>
    </div>
  );
}

export default App;

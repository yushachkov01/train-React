import React from 'react'
import { useState } from 'react'
import ClassCounter from './components/ClassCounter'
import Counter from './components/Counter'
import './styles/App.css'
import PostItem from './components/PostItem';


function App() {
  const [value, setValue] = useState('Текст в Инпуте')

  return (
    <div className="App">
      <PostItem post={{id:1, title: 'JavaScript', body: 'Description'}}/>
    </div>
  );
}

export default App;

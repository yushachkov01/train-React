import React from 'react'
import { useState } from 'react'
import ClassCounter from './components/ClassCounter'
import Counter from './components/Counter'
import './styles/App.css'
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput'

function App() {
  const [posts, setPost] = useState([
    {id:1, title: 'JavaScript', body: 'Description'},
    {id:2, title: 'JavaScript', body: 'Description'},
    {id:3, title: 'JavaScript', body: 'Description'},


  ])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  
  function addNewPost(e){
    e.preventDefault()
    const newPost ={
      id: Date.now(),
      title,
      body
    }
    setPost([...posts,newPost])
    setTitle('')
    setBody('')
  }
  return (
    <div className="App">
    <form>
    {/* Управляемый компонент */}
      <MyInput 
      value={title}
      onChange={e => setTitle(e.target.value)} 
      type="text"
       placeholder='Название поста'/>
      
       {/* не управляемый компонент или не контролируемый */}
      <MyInput 
      value={body}
      onChange={e => setBody(e.target.value)} 
      type="text" 
      placeholder='Описание поста'/>
      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
      <PostList posts={posts} title='Список постов:'/>
    </div>
  );
}

export default App;

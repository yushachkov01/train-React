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
  const [title, setTitle] = useState('ew')
  function addNewPost(e){
    e.preventDefault()
    console.log(title);

  }
  return (
    <div className="App">
    <form>
    {/* Управляемый компонент */}
      <MyInput value={title}
      onChange={e => setTitle(e.target.value)} 
            // {/* Проверяем как пользователь из этого поля что-то вводит.  Из евента в поле таргет достаем поле value и помещаем его в состояние (Т.е можем писать в инпуте что-угодно ) */}
      type="text"
       placeholder='Название поста'/>
      <MyInput type="text" placeholder='Описание поста'/>
      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
      <PostList posts={posts} title='Список постов:'/>
    </div>
  );
}

export default App;

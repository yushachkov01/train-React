import React from 'react'
import { useState } from 'react'
import ClassCounter from './components/ClassCounter'
import Counter from './components/Counter'
import './styles/App.css'
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput'
import PostForm from './components/PostForm'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Description' },
    { id: 2, title: 'JavaScript', body: 'Description' },
    { id: 3, title: 'JavaScript', body: 'Description' },

  ])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')


  function createPost(newPost) {
    setPosts([...posts, newPost])
  }

  //Получаем пост из дочернего компонента
  function removePost(post) {
    setPosts(posts.filter(p => p.id !== post.id))

  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostList remove={removePost} posts={posts} title='Список постов:' />
    </div>
  );
}

export default App;

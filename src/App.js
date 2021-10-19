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
import MySelect from './components/select/MySelect.jsx'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'аа', body: 'бб' },
    { id: 2, title: 'гг', body: 'аа' },
    { id: 3, title: 'вв', body: 'яя' },
  ])

  const [selectedSort,setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  function getSortedPosts(){
    console.log('ОТРАБОТАЛА ФУНКЦИЯ СОРТЕД ПОСТС');
    if(selectedSort){
      return [...posts].sort((a,b)=> a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts
  }

  const sortedPost = getSortedPosts();
  
  function createPost(newPost) {
    setPosts([...posts, newPost])
  }

  //Получаем пост из дочернего компонента
  function removePost(post) {
    setPosts(posts.filter(p => p.id !== post.id))

  }
  const sortPosts = (sort) => {
    setSelectedSort(sort)
    // localeCompare -  функция для сравнения строк
  }
  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{margin: "15px 0"}}></hr>
      <div>
        <MyInput value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        placeholder="Поиск..."

        />
        <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue = {"Сортировка"}
        options = {[
          {
          value: "title",
          name: "По Названию"
        },
        {
          value: "body",
          name: "По Описанию"
        }
        ]}
        />
      </div>
      {posts.length !== 0 
      ?  <PostList remove={removePost} posts={sortedPost} title='Список постов:' />
      : <h1 style={{textAlign: 'center'}}>
      Посты не найдены!
      </h1>
      }
    </div>
  );
}

export default App;

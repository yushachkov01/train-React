import react from 'react';

const PostItem = (props) => {
  return (  
        <div className="post">
  <div className="post__content">
    <strong>1. JavaScript</strong>
    <div>
      JavaScript- Язык программирования
    </div>
  </div>
  <div className="post__btns">
    <button> Удалить </button>
  </div>
</div>
)
};
export default PostItem;
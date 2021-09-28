import React from 'react';
import classes from './MyButton.module.css'

const MyButton = ({children, ...props}) => {
  return (
    <button {...props}className={classes.myBtn}>
    {children} 
{/* children нужен для того, чтобы в место для компонента вставлять вложенные компоненты */}
    </button>
  )
};
export default MyButton;
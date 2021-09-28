import React from 'react';
import classes from './MyInput.module.css'

const myInput = (props) => {
  return (
    <input className= {classes.myInput} {...props}/>
  )
};
export default myInput;
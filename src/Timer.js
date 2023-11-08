import React, {useState, useEffect} from 'react'

function Timer() {
    const [message, setMessage]= useState("Hi there, How are you?");

useEffect (()=>{
    console.log("use Effect hook is triggered")


    setTimeout(()=>{
        setMessage("Hi, I'm fine thanks for asking");
    }, 100);
});

  return (
    <h1> {message} </h1>
  )
}

export default Timer
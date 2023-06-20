import logo from './logo.svg';
import './App.css';
import Content from './Content.js'
import Countdown from './Countdown.js';
import PreviewAvatar from './PreviewAvatar.js';
import UseCallBack from './UseCallBack.js';
import {useState,useEffect, useCallback, useReducer, useRef} from 'react'
import Todo from './Todo'
import UseContext from './UseContext';

// const gifts = [
//   'iphone14',
//   'airpod',
//   'premium'
// ]

// function App() {
//     const [gift,setGift] = useState('')
//     const handleSubmit = () =>{
//     var index = Math.floor(Math.random() * gifts.length);
//     setGift(gifts[index])
//   }
//   return (
//     <div className="App">
//       <h1 style={{color: 'green'}}>{gift || "Hello World"}</h1>
//       <button onClick={handleSubmit}>Get gift</button>
//     </div>
//   );
// }

import { useStore, actions } from './store';

function App(){

  const [state,dispatch] = useStore();

  console.log(state.todos);

  const handleAdd = () => {
    dispatch(actions.addTodo(state.todo))
  }

  return (
    <div>
      <input 
        value={state.todo}
        placeholder='Enter todo...'
        onChange={e => {
          dispatch(actions.setTodoInput(e.target.value))
        }}
      ></input>
      <button onClick={handleAdd}>Add</button>

      <ul>
        {state.todos.map((todo,index) => {
          console.log(todo);
          return <li key={index}>{todo}</li>
        })}
      </ul>
    </div>
  )
}


export default App;


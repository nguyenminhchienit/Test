import {useReducer, useRef} from 'react'
import {setJob,addJob,deleteJob} from './action.js'
import reducer,{initState} from './reducer.js';
 
  
  function App(){
      const [state,dispatch] = useReducer(reducer,initState);
  
      const {job,jobs} = state;
  
      const inputRef = useRef();
  
      const handleSubmit = () => {
        dispatch(addJob(job))
        dispatch(setJob(''));
  
        inputRef.current.focus();
      }
   
    return (
  
      <div  className="App">
        <input
          ref={inputRef}
          value={job}
          placeholder='Enter job.....'
          onChange={e => {dispatch(setJob(e.target.value))}}
        >
        </input>
        <button onClick={handleSubmit}>Add</button>
  
        {jobs.map((job,index) => {
          return <li key={index}>{job} 
            <span style={{cursor: 'pointer'}} onClick={() => {
                dispatch(deleteJob(index))
              }}>&times;
            </span>
          </li>
        })}
      </div>
  
    )
  }
  
  
  export default App;
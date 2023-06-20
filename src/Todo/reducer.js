import {SET_JOB, ADD_JOB, DELETE_JOB} from './constant.js'

//1. Initial state
export var initState = {
    job: '',
    jobs: []
  }
  
//3. reducer
const reducer = (state,action) => {
    console.log('action: ',action);
    console.log('PrevState: ',state);
    let newState
    switch(action.type){
      case SET_JOB: 
        newState = {
          ...state,
          job: action.payload
        }
        break;
      case ADD_JOB: 
        newState = {
          ...state,
          jobs: [...state.jobs,action.payload]
        }
        break;
      case DELETE_JOB: 
        const newJobs = [...state.jobs]
  
        newJobs.splice(action.payload,1);
  
        newState = {
          ...state,
          jobs: newJobs
        }
        break;
    }
    console.log('NewState: ',newState);
    return newState;
}

export default reducer;

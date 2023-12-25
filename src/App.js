
import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add  , check, update} from './redux/slices/todoSlice';


function App() {
  const dispatch = useDispatch()
  const [desc , setdesc]=useState()
  const todos=useSelector(state=>state.todos)
  const [upd,setupad]=useState()
  const [done , setdone]=useState('all')
 
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ color:'revert-layer' }}>MY TASKS</h1>
       <input onChange={(e)=>{setdesc(e.target.value)}} ></input>
       <div className='btn'>
       <button onClick={()=>{dispatch(add(desc))}}>Add</button>
       <button onClick={()=>{setdone('all')}}>all</button>
       <button onClick={()=>{setdone('true')}}>isDone</button>
       <button onClick={()=>{setdone('false')}}>notDone</button>
       </div>
       <div>

        { (done==='true')? todos.filter((el)=>el.isDone===true).map((el) => <div id={el.id}>
        {el.isDone?  <h1 style={{ color:'green' }}>{el.description}</h1>  :  <h1 style={{ color:'red' }}>{el.description}</h1>}
               <div>
                <input type='checkbox' onClick={()=>{dispatch(check(el.id))}} ></input>
                <input type='text' onChange={(e)=>{setupad(e.target.value)}} ></input>
                <button onClick={()=>{dispatch(update({id:el.id , upd:upd}))}} >edit</button>
                </div>
            </div>) : (done==='false')? todos.filter((el)=>el.isDone===false).map((el) => <div id={el.id}>
        {el.isDone?  <h1 style={{ color:'green' }}>{el.description}</h1>  :  <h1 style={{ color:'red' }}>{el.description}</h1>}
               <div>
                <input type='checkbox' onClick={()=>{dispatch(check(el.id))}} ></input>
                <input type='text' onChange={(e)=>{setupad(e.target.value)}} ></input>
                <button onClick={()=>{dispatch(update({id:el.id , upd:upd}))}} >edit</button>
                </div>
            </div>)  :todos.map((el) => <div id={el.id}>
        {el.isDone?  <h1 style={{ color:'green' }}>{el.description}</h1>  :  <h1 style={{ color:'red' }}>{el.description}</h1>}
               <div>
                <input type='checkbox' onClick={()=>{dispatch(check(el.id))}} ></input>
                <input type='text' onChange={(e)=>{setupad(e.target.value)}} ></input>
                <button onClick={()=>{dispatch(update({id:el.id , upd:upd}))}} >edit</button>
                </div>
            </div>) }
       
       </div>
      </header>
    </div>
  );
}

export default App;

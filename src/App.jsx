import  Todolist  from "./components/Todolist";
import './App.css';
import {TodosContext}from './context/TodosContext'
import { v4 as idd } from 'uuid';
import { useState } from "react";
const initialTodos =[
  {
    id: idd(),
    title:'Boudia Nadir',
    details:' lonely but talented  ',
    isCompleted:'false',
  },
  
  {
    id: idd(),
    title:' Boumediene Mounira ',
    details:'! she lost everyhthing but she have me  ',
    isCompleted:'false',
  },
  
 
]


function App() {
    const[todos , setTodos]=useState(initialTodos);
return(
  <TodosContext.Provider value={{todos:todos , setTodos:setTodos}}>
 <>
 <div style={{ display:"flex" , justifyContent:"center", background:'#191b1f' , alignItems:'center',height:'100vh', direction:"rtl"}}>
 <Todolist/>
 
 </div>
  
 </>
 </TodosContext.Provider>
)
    

  
}




export default App;

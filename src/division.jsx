import React, {useState} from 'react';
import { useEffect } from 'react';




function ToDoList(){

  const [tasks, setTasks] = useState(()=>{
     const savedTasks = localStorage.getItem("tasks");
     return savedTasks? JSON.parse(savedTasks) : [];
  });
  const [newTask, setNewTask] = useState("");
    
  useEffect(()=>{
       localStorage.setItem("tasks",JSON.stringify(tasks));
  },[tasks]);

    function handleInput (event){
        setNewTask(event.target.value);
    }
    function addTask(){

      if(newTask.trim() !==""){
        setTasks(t=>[...t,newTask]);
        setNewTask("");
      }
    }
    function deleteTask(index){
        const updatedTask = tasks.filter((_,i)=>i !==index);
        setTasks(updatedTask);
    }
    function moveTaskUp(index){

      if(index !== 0 ){
       const updateTask = [...tasks];
       [updateTask[index],updateTask[index-1]]=[updateTask[index-1],updateTask[index]];
       setTasks(updateTask);
      }
    }
    function moveTaskDown(index){

      if(index !== tasks.length -1 ){
      const updateTask = [...tasks];
      [updateTask[index],updateTask[index+1]]=[updateTask[index+1],updateTask[index]];
      setTasks(updateTask);
      }
    }



  return(
    <>
    <div className="container">
      <h1>Here you can edit your tasks trajectory</h1>
    </div>

    <div className="inputDiv">
      <input type="text" className="inputContainer"  value={newTask} placeholder="Add a new task..."
       onChange={handleInput}
      ></input>
      <button className="addTask" onClick={addTask}>Add task</button>

    </div>

    <ol> 
      {tasks.map((tasks,index)=><li key={index}>
        <span className="tasks">{tasks}</span>
        <button className="delete-button" onClick={()=>deleteTask(index)}> Delete</button>
        <button className="move-up" onClick={()=>moveTaskUp(index)}>🆙</button>
        <button className="move-down" onClick={()=>moveTaskDown(index)}>⬇️</button>


      </li>)
       
     
      }
      </ol>
    </>
  )
}
export default ToDoList;
import React,{useState,useEffect} from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About';
import {BrowserRouter as Router,Route} from 'react-router-dom';

const App = () =>{

  const [showAddTask,setShowAddTask] = useState(false)

  const [tasks,setTasks] = useState([]);

  useEffect(()=>{
    const getTasks = async() =>{
      const tasksFromServer = await fetchTask();
      setTasks(tasksFromServer)
    }
    
    getTasks()
  },[])


  // fetching the data
  const fetchTask = async() =>{
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();
    return data;
  }


  // fetching the single data
  const fetchSingleTask = async(id) =>{
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  }


// adding the task
  const addTask = async(task) =>{

    const res =  await fetch('http://localhost:5000/tasks',
    {
      method:'POST',
      headers:{
        'Content-type':'application/json',
      },
      body:JSON.stringify(task)
  })

    const data = await res.json();

    setTasks([...tasks,data])


    // const id  = Math.floor(Math.random() * 10000) + 1;
    // const newTask = {id,text,day,reminder}
    // setTasks([...tasks,newTask])
  }

// deleting the tasks
  const deleteTask = async(id) =>{

    await fetch(`http://localhost:5000/tasks/${id}`,{
      method:'DELETE'
    })

    setTasks(tasks.filter((task)=> task.id !== id));
  }

  // updating the task
  const toggleReminder = async(id) =>{

    const taskToToggle = await fetchSingleTask(id);

    const updTask = {...taskToToggle,reminder:!taskToToggle.reminder};

    const res = await fetch(`http://localhost:5000/tasks/${id}`,
    {
      method:'PUT',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(updTask)
    })

    const data = await res.json();

    setTasks(tasks.map((task)=> task.id === id ? {...task,reminder:data.reminder}:task))
  }


  return(
    <Router>
    <div className='container'>
      {/* header section */}
      <Header title = "Task Manager" onAdd={()=>setShowAddTask(!showAddTask)}
        showAddTask={showAddTask}
      />
      {/* add task section */}
      {showAddTask && <AddTask onAdd={addTask}/>}

      

      <Route path="/" exact render={(props)=>(
        <>
          {/* show list of the tasks section */}
          { tasks.length > 0 ?
          (<Tasks tasks = {tasks} onDelete = {deleteTask} onToggle = {toggleReminder} />):('No Tasks to show')
          }
        </>
      )} 
      />

      <Route path="/about" component={About}/>
      <Footer/>
    </div>
    </Router>
  )
}



export default App;

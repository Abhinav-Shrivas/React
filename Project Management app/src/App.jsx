import CreateProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";
import Project from "./components/Project";
import { useState,useRef } from "react";
function App() {
  const[projectState,setProjectState] = useState({
    projectSelected : undefined,
    projectList:[],
    task : []
  });
  function handleDeleteTask(id){
      setProjectState(prev => 
      {return{
       ...prev,
       task : prev.task.filter(p => p.taskId !== id)
      }}
    )
  }
  function handleProjectState(){
    setProjectState(prev => 
      {return{
       ...prev,
       projectSelected : null
      }}
    )
  }
  function handleSave(project){
    setProjectState(prev => {
      return{
        ...prev,
        projectSelected : undefined,
        projectList : [...prev.projectList,project]
      }
    })
  }
  function handleCancel(){
    setProjectState(prev => 
      {return{
       ...prev,
       projectSelected : undefined
      }}
    )
  }
  function handleSelectedProject(id){
     setProjectState(prev => 
      {return{
       ...prev,
       projectSelected : id
      }}
    )
  }
  function handleDelete(){
      setProjectState(prev => 
      {return{
       ...prev,
       projectSelected : undefined,
       projectList : prev.projectList.filter(p => p.id !== prev.projectSelected)
      }}
    )
  }
  function handleAddTask(t){
    setProjectState(prev => {const newTask = {
      text : t,
      taskId : Math.random(),
      projectId : prev.projectSelected
    }
    return{
       ...prev,
       task : [newTask,...prev.task]   
  }
}
  )
  }
  const selectedProject = projectState.projectList.find(p => p.id === projectState.projectSelected);
  let content = <Project project = {selectedProject} onDelete = {handleDelete} onAdd = {handleAddTask} tasks = {projectState.task} onDeleteTask ={handleDeleteTask}></Project>;
  if(projectState.projectSelected === undefined){
    content = <NoProjectSelected onSelect={handleProjectState}/>
  }
  else if(projectState.projectSelected === null){
    content = <CreateProject onSelect={handleSave} onCancel = {handleCancel}></CreateProject>
  }
return (
    <main className="h-screen my-8 flex gap-20">
      <Sidebar onSelect = {handleProjectState} projects = {projectState.projectList} onSelectProject = {handleSelectedProject} selectedId={projectState.projectSelected} ></Sidebar>
      <dialog ><p>Fill out the fields</p>
      <form method="dialog">
        <button>Close</button>
        </form>
      </dialog>
      {content}
    </main>
  );
}


export default App;

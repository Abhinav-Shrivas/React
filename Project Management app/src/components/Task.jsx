import { useState } from "react"
export default function Tasks({tasks,onAdd,onDeleteTask,projectId}){
    const[addedTask, setAddTask] = useState('');
    const filterTasks = tasks.filter(p => p.projectId == projectId)
    console.log(projectId);
    console.log(tasks);
    console.log(filterTasks);
    function handleClick(){
        onAdd(addedTask);
        setAddTask('');
    }
    function handleDeleteTask(taskid){
        onDeleteTask(taskid);
    }
    return(
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">TASKS</h2>
            <div className="flex items-center gap-4">
                <input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" onChange={e => setAddTask(e.target.value)} value={addedTask}/>
                <button className="text-stone-700 hover:text-stone-950" onClick={handleClick}>Add task</button>
            </div>
            {filterTasks.length ===0 && <p className="text-stone-800 my-4">No tasks yet!</p>}
            {filterTasks.length > 0 && <ul className="p-4 mt-8 rounded-md bg-stone-100">
                {filterTasks.map(t => <li className="flex justify-between my-4" key={t.taskId}>
                    <span>{t.text}</span>
                    <button className="text-stone-700 hover:text-stone-950" onClick={()=>handleDeleteTask(t.taskId)}>Delete</button>
                </li>)}
            </ul>}
        </section>
    )
}
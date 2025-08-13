export default function Sidebar({onSelect,projects,onSelectProject,selectedId}){
    return(
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">YOUR PROJECTS</h2>
            <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={onSelect}>+ Add Project</button>
            <ul className="mt-8">
                {
                    projects.map(p =>{
                          let cssClass = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";
                          if(p.id === selectedId)cssClass += " bg-stone-800 text-stone-200";
                          else cssClass += " text-stone-400"
                          return(  <li key = {p.id}>
                              <button className={cssClass} onClick={() => onSelectProject(p.id)}>{p.title}</button>
                            </li>   )}
                    )
                }
            </ul>
        </aside>
    )
}
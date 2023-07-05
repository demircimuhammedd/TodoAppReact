import AddTask from "./AddTask";

function Header({tasks,setTasks}) {
    return (
        <header className="header">
            <h1>todos</h1>
            <AddTask tasks={tasks} setTasks={setTasks}/>
        </header>
    );
}

export default Header;
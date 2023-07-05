function Task({tasks, setTasks}) {

    function Mark(e) {
        const updated = tasks.map(c => parseInt(e.target.id) === c.id ? {...c, isCompleted: !c.isCompleted} : c);
        setTasks(updated);
    }

    function Destroy(id) {
        const deleted = tasks.filter(c => id !== c.id);
        setTasks(deleted);
    }

    function AllMark() {
        const marked = tasks.map(c => {
                return {...c, isCompleted: !c.isCompleted}
            }
        );
        setTasks(marked);
    }

    return (
        <section className="main">
            <input className="toggle-all" type="checkbox" onChange={AllMark}/>
            <label htmlFor="toggle-all">
                Mark all as complete
            </label>

            <ul className="todo-list">
                {
                    tasks.map((item) => (
                        <li key={item.id} className={item.isCompleted ? "completed" : ""}>
                            <div className="view">
                                <input id={item.id} className="toggle" type="checkbox"
                                       value={item.isCompleted}
                                       checked={item.isCompleted}
                                       onChange={Mark}/>
                                <label>{item.name}</label>
                                <button className="destroy" onClick={() => Destroy(item.id)}></button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default Task;
function Footer({tasks, setTasks}) {
    const taskCount = tasks.filter(c => !c.isCompleted).length;

    function ClearCompleted() {
        const cleared = tasks.map(c => {
                return {...c, isCompleted: false}
            }
        );
        setTasks(cleared);
    }

    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{taskCount}</strong>&nbsp;
                items left
            </span>

            <ul className="filters">
                <li>
                    <a href="#/" className="selected">All</a>
                </li>
                <li>
                    <a href="#/">Active</a>
                </li>
                <li>
                    <a href="#/">Completed</a>
                </li>
            </ul>

            <button className="clear-completed" onClick={() => ClearCompleted()}>
                Clear completed
            </button>
        </footer>
    )
}

export default Footer;
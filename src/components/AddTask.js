function AddTask({tasks, setTasks}) {

    function Add(e) {

        if (e.key === 'Enter') {

            e.preventDefault();
            if (e.target.value === "") return;

            const id = tasks.sort(function (x, y) {
                return x.id - y.id;
            })[tasks.length - 1].id + 1;

            const temps = [
                ...tasks,
                {
                    id: id,
                    name: e.target.value,
                    isCompleted: false
                }
            ];

            setTasks(temps);
            e.target.value = "";
        }


    }

    return (
        <form>
            <input onKeyDown={Add}
                   className="new-todo"
                   placeholder="What needs to be done?"
                   autoFocus/>
        </form>
    )
}

export default AddTask;
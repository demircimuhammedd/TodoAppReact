import "./App.css"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Task from "./components/Task";
import {useState} from "react";

function App() {

    const [tasks, setTasks] = useState([
        {id: 1, name: "Learn JavaScript", isCompleted: true},
        {id: 2, name: "Learn React", isCompleted: false},
        {id: 3, name: "Have a life!", isCompleted: false},
        {id: 4, name: "MDemirci", isCompleted: true}
    ]);

    return (<>
        <section className="todoapp">
            <Header tasks={tasks} setTasks={setTasks}/>
            <Task tasks={tasks} setTasks={setTasks}/>
            <Footer tasks={tasks} setTasks={setTasks}/>
        </section>
    </>);
}

export default App;
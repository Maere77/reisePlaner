import Form from "../components/form.tsx";
import Todo from "../components/todo.tsx";
import {Info} from "../Info.tsx";
import "../App.css"
import {useState} from "react";

export default function Reise() {
    const [macher, setMacher] = useState<Info>()
    const [active, setActive] = useState<boolean>()
    const onSave = (info: Info) => {
        console.log(info)
        setActive(true)
        setMacher(info)
    }

    return(
        <div className="container">
            <div className="form-container">
                <Form onSave={onSave}/>
            </div>
            <div className="todo-container">
                <Todo recieve={macher} active={active}/>
            </div>
        </div>
    )
}
import React, {Component} from "react"
import TodoItem from "./components/TodoItem"
import todosData from "./components/todosData"

import "./App.css"

class App extends Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
    }

    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}/>)

        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )
    }
}

export default App

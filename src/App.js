import React, {Component} from "react"
import TodoItem from "./components/TodoItem"
import todosData from "./components/todosData"

import "./App.css"

class App extends  Component {

    render() {

    const todoItems = todosData.map(item => <TodoItem key={item.id} item={item}/>)

    return (
        <div className="todo-list">
            {todoItems}
        </div>
    )
  }
}

export default App

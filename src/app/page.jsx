'use client'

import { useSelector } from "react-redux";
import Input from "./components/input/Input";
import Todolist from "./components/TodoList/Todolist"

export default function Home() {
  const todolist = useSelector((state) => state.todos.todoList)
  console.log(todolist)
  return (
    <main >
      <h1>hellooooo</h1>
      <div>

        {todolist.map((todo) => (
          <Todolist
            key={todo.id}
            title={todo.title}
            done={todo.done}
            id={todo.id} />
        ))}

      </div>
      <Input />
    </main>
  );
}

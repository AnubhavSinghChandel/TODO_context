import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: 'TODO',
            completed: false
        }
    ],
    addTodo: (todo) => { },
    deleteTodo: (id) => { },
    updateTodo: (id, todo) => { },
    todoComplete: (id) => { }

})

export const useTodo = (() => useContext(TodoContext))

export const TodoContextProcider = TodoContext.Provider
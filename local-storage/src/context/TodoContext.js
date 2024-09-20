import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id: 1,
            todo: "This is a basic Todo message !",
            completed: false,
        }
    ],

    addTodo: (todo) =>{},
    updatedTodo : (id, todo) => {},
    deleteTodo : (id) =>{},
    toggleTodo : (id) => {}
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const Todoprovider = TodoContext.Provider;

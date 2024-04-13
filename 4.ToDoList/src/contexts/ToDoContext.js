import { createContext, useContext } from "react";

export const ToDoContext = createContext({
  todos: [
    {
      id: Date.now(),
      todo: "Todo Title",
      checked: false,
    },
  ],
  updateToDo: (id, todo) => {},
  addToDo: (todo) => {},
  addToDo: (id) => {},
  toggleComplete: (id) => {},
});

export const useToDo = () => {
  return useContext(ToDoContext);
};

export const ToDoProvider = ToDoContext.Provider;

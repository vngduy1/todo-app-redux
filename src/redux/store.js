import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "../components/Filters/filtersSlice";
import todoList from "../components/TodoList/todosSlice";

const store = configureStore({
  reducer: {
    filters: filterSlice.reducer,
    todoList: todoList.reducer,
  },
});

export default store;

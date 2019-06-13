import "@babel/polyfill";

import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";

import { TodoServiceProvider } from "./components/todo-service-context";
import TodoService from "./services/todo-service";

const todoService = new TodoService();

import store from "./store";

import App from "./app";

ReactDOM.render(
  <Provider store={store}>
    <TodoServiceProvider value={todoService}>
      <App />
    </TodoServiceProvider>
  </Provider>,
  document.getElementById("root")
);

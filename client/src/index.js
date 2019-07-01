import "@babel/polyfill";

import {BrowserRouter} from "react-router-dom";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";

import { TodoServiceProvider } from "./components/todo-service-context";
import App from './app';
import TodoService from "./services/todo-service";

const todoService = new TodoService();

import store from "./store";



ReactDOM.render(
  <Provider store={store}>
    <TodoServiceProvider value={todoService}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TodoServiceProvider>
  </Provider>,
  document.getElementById("root")
);

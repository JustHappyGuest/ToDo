import React from 'react';

import { TodoServiceConsumer } from '../components/todo-service-context';

export const withTodoService = (Wrapped) => (props) => {
  return (
    <TodoServiceConsumer>
      {
        (todoService) => {
          return <Wrapped {...props} todoService = {todoService} />
        }
      }
    </TodoServiceConsumer>
  );
};

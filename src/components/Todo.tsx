import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

interface ITodoProps {
  id: string;
  completed: boolean;
  text: string;
}

const TOGGLE_TODO = gql`
  mutation ToggleTodo($id: Int!) {
    toggleTodo(id: $id) @client
  }
`;

const Todo = ({ id, completed, text }: ITodoProps) => (
  <Mutation mutation={TOGGLE_TODO} variables={{ id }}>
    {(toggleTodo: () => void) => (
      <li
        onClick={toggleTodo}
        style={{
          textDecoration: completed ? 'line-through' : 'none',
        }}
      >
        {text}
      </li>
    )}
  </Mutation>
);

export default Todo;

import gql from 'graphql-tag';
let nextTodoId = 0;

const query = gql`
  query GetTodos {
    todos @client {
      id
      text
      completed
    }
  }
`;

const fragment = gql`
  fragment completeTodo on TodoItem {
    completed
  }
`;

export const resolvers = {
  Mutation: {
    addTodo: (_: any, { text }: any, { cache }: any) => {
      const previous = cache.readQuery({ query });

      const newTodo = {
        id: nextTodoId++,
        text,
        completed: false,
        __typename: 'TodoItem',
      };

      const data = { todos: previous.todos.concat([newTodo]) };

      cache.writeDate({ data });

      return newTodo;
    },

    toggleTodo: (_: any, { variables }: any, { cache }: any) => {
      const id = `TodoItem:${variables.id}`;
      const todo = cache.readFragment({ fragment, id });
      const data = { ...todo, completed: !todo.completed };

      cache.writeData({ id, data });

      return null;
    },
  },
};

import React from 'react';
import { render } from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { withClientState } from 'apollo-link-state';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

const App = () => <div>Hello world</div>;

render(<App />, document.getElementById('root') as HTMLElement);

import React, { ReactNode } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Link from './Link';

interface IFilterLinkProps {
  filter: string;
  children: ReactNode;
}

const GET_VISIBILITY_FILTER = gql`
  query {
    visibilityFilter @client
  }
`;

const FilterLink = ({ filter, children }: IFilterLinkProps) => (
  <Query query={GET_VISIBILITY_FILTER}>
    {({ data, client }) => (
      <Link
        onClick={() => client.writeData({ data: { visibilityFilter: filter } })}
        active={data.visibilityFilter === filter}
      >
        {children}
      </Link>
    )}
  </Query>
);

const Footer = () => (
  <p>
    Show: <FilterLink filter="SHOW_ALL">All</FilterLink>
    {', '}
    <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
    {', '}
    <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
  </p>
);

export default Footer;

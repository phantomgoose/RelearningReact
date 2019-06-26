import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_CURRENT_USER = gql`
  {
    viewer {
      login
      name
    }
  }
`;

const Profile = () => (
  <Query query={GET_CURRENT_USER}>
    {({ data }) => {
      const { viewer } = data;
      if (!viewer) return <p>Loading GitHub profile...</p>;
      return <div>My name is {viewer.name.split(' ')[0]} and my login is {viewer.login}</div>;
    }}
  </Query>
);

export default Profile;
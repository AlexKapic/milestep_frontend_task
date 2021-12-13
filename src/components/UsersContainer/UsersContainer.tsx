import React from 'react';
import { Container } from 'react-bootstrap';
import { UserCard } from './UserCard';

export const UsersContainer: React.FC = () => (
  <Container>
    <UserCard />
  </Container>
);

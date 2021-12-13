import React from 'react';
import { Card } from 'react-bootstrap';

export const UserCard: React.FC = () => (
  <Card style={{ width: '18rem' }}>
    <Card.Img
      variant="top"
      src="https://randomuser.me/api/portraits/women/55.jpg"
    />
    <Card.Body>
      <Card.Title>Fatima Aguilar</Card.Title>
      <Card.Text>female</Card.Text>
      <Card.Text>1973-06-30T13:07:11.119Z</Card.Text>
      <Card.Text>ES</Card.Text>
    </Card.Body>
  </Card>
);

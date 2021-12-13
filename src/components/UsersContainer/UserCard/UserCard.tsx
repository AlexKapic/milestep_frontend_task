import React from 'react';
import { Card } from 'react-bootstrap';
import { IUser } from '../../../common/interfaces';

type Props = {
  user: IUser;
};

export const UserCard: React.FC<Props> = ({ user }) => (
  <Card>
    <Card.Img variant="top" src={user.picture.large} />
    <Card.Body>
      <Card.Title>
        {user.name.first}
        &nbsp;
        {user.name.first}
      </Card.Title>
      <Card.Text>{user.gender}</Card.Text>
      <Card.Text>{user.dob.date}</Card.Text>
      <Card.Text>{user.nat}</Card.Text>
    </Card.Body>
  </Card>
);

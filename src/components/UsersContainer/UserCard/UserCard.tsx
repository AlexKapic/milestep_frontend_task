import React from 'react';
import moment from 'moment';
import ReactCountryFlag from 'react-country-flag';
import { Card } from 'react-bootstrap';
import { IUser } from '../../../common/interfaces';

type Props = {
  user: IUser;
};

export const UserCard: React.FC<Props> = ({ user }) => (
  <Card className="mb-4">
    <Card.Img variant="top" src={user.picture.large} />
    <Card.Body>
      <Card.Title>
        {user.name.first}
        &nbsp;
        {user.name.last}
      </Card.Title>
      <Card.Text>{user.gender}</Card.Text>
      <Card.Text>{moment(user.dob.date).format('YYYY-MM-DD')}</Card.Text>
      <Card.Text>
        {user.nat}
        <ReactCountryFlag
          countryCode={user.nat}
          svg
          style={{
            width: '18px',
            height: '18px',
            margin: '0 0 2px 10px',
          }}
        />
      </Card.Text>
    </Card.Body>
  </Card>
);

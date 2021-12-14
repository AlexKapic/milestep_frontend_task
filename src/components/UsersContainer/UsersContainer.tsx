import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { IUser } from '../../common/interfaces';
import { UserCard } from './UserCard';

type Props = {
  users: IUser[] | undefined;
};

export const UsersContainer: React.FC<Props> = ({ users }) => (
  <Container className="mt-4">
    <Row>
      {/* if need 5 columns in row -- use "<Col key={idx} style={{ 'flex': '1 0 20%' }}>" */}
      {users &&
        users.map((user, idx) => (
          // eslint-disable-next-line
          <Col key={idx} lg={3} md={4} sm={6}>
            <UserCard user={user} />
          </Col>
        ))}
    </Row>
  </Container>
);

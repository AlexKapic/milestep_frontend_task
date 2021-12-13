import React, { useEffect, useState } from 'react';
import { IUser } from '../../common/interfaces';
import { usersApi } from '../../services';
import { UsersContainer } from '../UsersContainer';

export const Main: React.FC = () => {
  const [results, setResults] = useState<IUser[] | undefined>();

  useEffect(() => {
    usersApi.getUsers().then((res) => setResults(res.results));
  }, []);

  return <UsersContainer users={results} />;
};

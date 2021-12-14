import React, { useEffect, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { IUser } from '../../common/interfaces';
import { SelectFormValues } from '../../common/types/selectForm';
import { usersApi } from '../../services';
import { FilterContainer } from '../FilterContainer';
import { UsersContainer } from '../UsersContainer';

export const Main: React.FC = () => {
  const [results, setResults] = useState<IUser[] | undefined>();

  const applyFilter: SubmitHandler<SelectFormValues> = (data): void => {
    const gender = data.gender.value;
    const nationality = data.nationality.map((el) => el.value).join(',');
    localStorage.setItem('SelectedOptions', JSON.stringify(data));
    usersApi
      .getUsers(gender, nationality)
      .then((res) => setResults(res.results));
  };

  useEffect(() => {
    const filters =
      localStorage.getItem('SelectedOptions') &&
      JSON.parse(localStorage.getItem('SelectedOptions') as string);
    if (filters) {
      applyFilter(filters);
    } else {
      usersApi.getUsers().then((res) => setResults(res.results));
    }
  }, []);

  return (
    <>
      <FilterContainer applyFilter={applyFilter} />
      <UsersContainer users={results} />
    </>
  );
};

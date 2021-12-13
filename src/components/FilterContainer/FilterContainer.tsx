import React from 'react';
import { Container } from 'react-bootstrap';
import { SelectFormValues } from '../../common/types/selectForm';
import { FilterForm } from './FilterForm';

type Props = {
  applyFilter: (values: SelectFormValues) => void;
};

export const FilterContainer: React.FC<Props> = ({ applyFilter }) => (
  <Container>
    <FilterForm applyFilter={applyFilter} />
  </Container>
);

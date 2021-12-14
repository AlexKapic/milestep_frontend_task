import React, { ReactElement } from 'react';
import Select from 'react-select';
import { useForm, Controller } from 'react-hook-form';
import { Button, Col, Form, Row } from 'react-bootstrap';
import {
  USER_GENDER_OPTIONS,
  USER_NATIONALITY_OPTIONS,
} from '../../../common/constants/user';
import { SelectFormValues } from '../../../common/types/selectForm';

type Props = {
  applyFilter: (values: SelectFormValues) => void;
};

export const FilterForm: React.FC<Props> = ({ applyFilter }) => {
  const filters =
    localStorage.getItem('SelectedOptions') &&
    JSON.parse(localStorage.getItem('SelectedOptions') as string);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      gender: filters?.gender,
      nationality: filters?.nationality,
    },
    mode: 'onChange',
  });

  return (
    <Form onSubmit={handleSubmit(applyFilter)}>
      <Row>
        <Form.Group as={Col} controlId="formGender" className="col-lg-5">
          <Form.Label>Gender</Form.Label>
          <Controller
            control={control}
            name="gender"
            render={({ field: { onChange, value, ref } }): ReactElement => (
              <Select
                ref={ref}
                options={USER_GENDER_OPTIONS}
                onChange={onChange}
                value={value}
              />
            )}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formNationality" className="col-lg-5">
          <Form.Label>Nationality</Form.Label>
          <Controller
            control={control}
            name="nationality"
            render={({ field: { onChange, value, ref } }): ReactElement => (
              <Select
                ref={ref}
                isMulti
                options={USER_NATIONALITY_OPTIONS}
                onChange={onChange}
                value={value}
              />
            )}
          />
        </Form.Group>
        <Col lg={2}>
          <Button type="submit">Apply filter</Button>
        </Col>
      </Row>
    </Form>
  );
};

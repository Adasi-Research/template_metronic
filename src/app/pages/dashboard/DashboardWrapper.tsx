/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react';
import {useIntl} from 'react-intl';
import {PageTitle, useLayout} from '../../../config/layout/core';
import {useAppDispatch, useAppSelector} from '../../../config/hooks/useRedux';
import {Button} from 'react-bootstrap';
import {
  decrement,
  increment,
  incrementByAmount,
} from '../../../config/store/dashboard/counterSlice';

import DataTable, {TableColumn} from 'react-data-table-component';

interface DataRow {
  title: string;
  director: string;
  year: string;
}

const DashboardWrapper: FC = () => {
  const intl = useIntl();

  const {config} = useLayout();

  console.log(config);

  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const daterangepickerButtonClass = config.app?.toolbar?.fixed?.desktop
    ? 'btn-danger'
    : 'bg-body btn-color-gray-700 btn-active-color-primary';

  const data: DataRow[] = [
    {
      title: 'Oi',
      director: 'Amigo',
      year: '2022',
    },
    {
      title: 'Oi',
      director: 'Amigo',
      year: '2022',
    },
    {
      title: 'Oi',
      director: 'Amigo',
      year: '2022',
    },
    {
      title: 'Oi',
      director: 'Amigo',
      year: '2022',
    },
    {
      title: 'Oi',
      director: 'Amigo',
      year: '2022',
    },
    {
      title: 'Oi',
      director: 'Amigo',
      year: '2022',
    },
    {
      title: 'Oi',
      director: 'Amigo',
      year: '2022',
    },
  ];

  const columns: TableColumn<DataRow>[] = [
    {
      name: 'Title',
      selector: (row) => row.title,
    },
    {
      name: 'Director',
      selector: (row) => row.director,
    },
    {
      name: 'Year',
      selector: (row) => row.year,
    },
  ];

  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      <Button onClick={() => dispatch(incrementByAmount(25))}>{count}</Button>
      <Button onClick={() => dispatch(increment())}>{count}</Button>
      <Button onClick={() => dispatch(decrement())}>{count}</Button>
      <DataTable
        columns={columns}
        data={data}
        customStyles={{
          rows: {
            style: {
              minHeight: '72px',
              backgroundColor: 'transparent !important',
            },
          },
          headCells: {
            style: {
              paddingLeft: '8px', // override the cell padding for head cells
              paddingRight: '8px',
              background: 'transparent !important',
            },
          },
          table: {
            style: {
              paddingLeft: '8px', // override the cell padding for head cells
              paddingRight: '8px',
              background: config.app?.toolbar?.fixed?.desktop ? 'transparent !important' : 'red',
            },
          },
          cells: {
            style: {
              paddingLeft: '8px', // override the cell padding for data cells
              paddingRight: '8px',
              background: 'transparent !important',
            },
          },
        }}
      />
    </>
  );
};

export {DashboardWrapper};

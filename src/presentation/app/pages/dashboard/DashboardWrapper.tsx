/* eslint-disable jsx-a11y/anchor-is-valid */
import { type FC } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../config/layout/core'
import { useAppDispatch, useAppSelector } from '../../../config/hooks/useRedux'
import { Button } from 'react-bootstrap'
import {
  decrement,
  increment,
  incrementByAmount
} from '../../../config/store/dashboard/counterSlice'

const DashboardWrapper: FC = () => {
  const intl = useIntl()

  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'MENU.DASHBOARD' })}</PageTitle>
      <Button onClick={() => dispatch(incrementByAmount(25))}>{count}</Button>
      <Button onClick={() => dispatch(increment())}>{count}</Button>
      <Button onClick={() => dispatch(decrement())}>{count}</Button>
    </>
  )
}

export { DashboardWrapper }

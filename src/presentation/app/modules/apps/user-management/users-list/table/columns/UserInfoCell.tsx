/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {FC} from 'react'
import {toAbsoluteUrl} from '../../../../../../../config/helpers'
import {User} from '../../core/_models'

type Props = {
  user: User
}

const UserInfoCell: FC<Props> = ({user}) => (
  <div className='d-flex align-items-center'>
    {/* begin:: Avatar */}
    <div className='symbol symbol-circle symbol-50px overflow-hidden me-3'>
      <a href='src/presentation/app/modules/apps/user-management/users-list/table/columns#'>
        {user.avatar ? (
          <div className='symbol-label'>
            <img src={toAbsoluteUrl(`/media/${user.avatar}`)} alt={user.name} className='w-100' />
          </div>
        ) : (
          <div
            className={clsx(
              'symbol-label fs-3',
              `bg-light-${user.initials?.state}`,
              `text-${user.initials?.state}`
            )}
          >
            {user.initials?.label}
          </div>
        )}
      </a>
    </div>
    <div className='d-flex flex-column'>
      <a href='src/presentation/app/modules/apps/user-management/users-list/table/columns#' className='text-gray-800 text-hover-primary mb-1'>
        {user.name}
      </a>
      <span>{user.email}</span>
    </div>
  </div>
)

export {UserInfoCell}

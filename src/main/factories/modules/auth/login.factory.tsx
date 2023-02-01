import React from 'react'
import { Login } from '@/presentation/app/modules/auth/components/Login'
import { makeRemoteAuthentication } from '@/main/factories/usecases/authentication/remote-authentication-factory'

export const makeLogin: React.FC = () => {
  return <Login authentication={makeRemoteAuthentication()} />
}

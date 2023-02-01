import React from 'react'
import { Login } from '@/presentation/app/modules/auth/components/Login'
import { RemoteAuthentication } from '@/data/usecases/authentication/remote-authentication'
import { AxiosHttpClient } from '@/infra/http/axios-http-client/axios-http-client'

export const makeLogin: React.FC = () => {
  const url = 'https://www.teste.com'
  const axiosHttpClient = new AxiosHttpClient()
  const remoteAuthentication = new RemoteAuthentication(url, axiosHttpClient)
  return <Login authentication={remoteAuthentication} validation={null} />
}

import React from 'react'
import { createRoot } from 'react-dom/client'
// Axios
import axios from 'axios'
import { Chart, registerables } from 'chart.js'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
// Apps
import { MetronicI18nProvider } from '../presentation/config/i18n/Metronici18n'
/**
 * TIP: Replace this style import with rtl styles to enable rtl mode
 *
 * import './config/assets/css/style.rtl.css'
 **/
import '../presentation/config/assets/sass/style.scss'
import '../presentation/config/assets/sass/plugins.scss'
import '../presentation/config/assets/sass/style.react.scss'
import { AuthProvider, setupAxios } from '../presentation/app/modules/auth'
import { Provider } from 'react-redux'
import { store } from '../presentation/config/store'
import { makeLogin } from '@/main/factories/modules/auth/login.factory'
import { Router } from '@/presentation/app/routing'
/**
 * Creates `axios-mock-adapter` instance for provided `axios` instance, add
 * basic Metronic mocks and returns it.
 *
 * @see https://github.com/ctimmerm/axios-mock-adapter
 */
/**
 * Inject Metronic interceptors for axios.
 *
 * @see https://github.com/axios/axios#interceptors
 */
setupAxios(axios)
Chart.register(...registerables)

const queryClient = new QueryClient()
const container = document.getElementById('main')
if (container) {
  createRoot(container).render(
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <MetronicI18nProvider>
          <AuthProvider>
            <Router />
          </AuthProvider>
        </MetronicI18nProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </Provider>
    </QueryClientProvider>
  )
}

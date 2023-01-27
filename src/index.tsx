import {createRoot} from 'react-dom/client';
// Axios
import axios from 'axios';
import {Chart, registerables} from 'chart.js';
import {QueryClient, QueryClientProvider} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';
// Apps
import {MetronicI18nProvider} from './config/i18n/Metronici18n';
/**
 * TIP: Replace this style import with rtl styles to enable rtl mode
 *
 * import './config/assets/css/style.rtl.css'
 **/
import './config/assets/sass/style.scss';
import './config/assets/sass/plugins.scss';
import './config/assets/sass/style.react.scss';
import {AppRoutes} from './app/routing/AppRoutes';
import {AuthProvider, setupAxios} from './app/modules/authExample';
import {Provider} from 'react-redux';
import {store} from './config/store';
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
setupAxios(axios);
Chart.register(...registerables);

const queryClient = new QueryClient();
const container = document.getElementById('root');
if (container) {
  createRoot(container).render(
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <MetronicI18nProvider>
          <AuthProvider>
            <AppRoutes />
          </AuthProvider>
        </MetronicI18nProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </Provider>
    </QueryClientProvider>
  );
}

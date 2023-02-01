import React, {type FC, Suspense} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {MasterLayout} from '../../config/layout/MasterLayout';
import TopBarProgress from 'react-topbar-progress-indicator';
import {getCSSVariableValue} from '../../config/assets/ts/_utils';
import {type WithChildren} from '../../config/helpers';
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper';

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        {/* Pages */}
        <Route path='dashboard' element={<DashboardWrapper />} />
        {/* Lazy Modules */}

        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  );
};

const SuspensedView: FC<WithChildren> = ({children}) => {
  const baseColor = getCSSVariableValue('--bs-primary');
  TopBarProgress.config({
    barColors: {
      0: baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  });
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>;
};

export {PrivateRoutes};

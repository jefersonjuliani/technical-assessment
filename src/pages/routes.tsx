import { Loading } from '@components/molecules/loading';
import { useHealthStatus } from '@hooks/queries_hooks/use_health_status';
import React from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

const RetryPage = React.lazy(() => import('@pages/retry_page'));

const QuestionsPage = React.lazy(() => import('@pages/questions_page'));

export const AppRouter = () => {
  const { data, isLoading } = useHealthStatus();

  return (
    <Router>
      <Routes>
        <Route
          index
          element={
            <React.Suspense fallback={<Loading />}>
              {isLoading ? (
                <Loading />
              ) : data?.status === 'OK' ? (
                <Navigate to="/questions?filter=FILTER" />
              ) : (
                <RetryPage />
              )}
            </React.Suspense>
          }
        />
        <Route
          path="questions"
          element={
            <React.Suspense fallback={<Loading />}>
              <QuestionsPage />
            </React.Suspense>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;

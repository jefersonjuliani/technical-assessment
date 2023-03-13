import { Box } from '@components/atoms/containers/box';
import React from 'react';
import { MemoryRouter, useLocation } from 'react-router-dom';

const ReactRouterInfo = (): React.ReactElement => {
  const location = useLocation();

  return (
    <Box id="reactRouterInfo">
      <Box data-testid="routerLocationPath">{location.pathname}</Box>
      <Box data-testid="routerLocationSearch">{location.search}</Box>
    </Box>
  );
};

export const WrapperProviderRouter = ({
  children,
  initialEntries,
}: {
  children: React.ReactNode;
  initialEntries?: string[];
}): React.ReactElement => (
  <MemoryRouter initialEntries={initialEntries}>
    {children}

    <ReactRouterInfo />
  </MemoryRouter>
);

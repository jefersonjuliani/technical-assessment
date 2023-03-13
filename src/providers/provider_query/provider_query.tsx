import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export const ProviderQuery = ({
  children,
}: {
  children: React.ReactElement;
}): React.ReactElement => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

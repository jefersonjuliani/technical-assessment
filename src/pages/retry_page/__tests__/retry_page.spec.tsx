import { fireEvent, render, screen } from '@testing-library/react';
import { WrapperProviderQuery } from '@utils/tests/wrappers/wrapper_provider_query';
import { describe, it, vi } from 'vitest';
import RetryPage from '../index';

const mockInvalidateQueries = vi.fn();

vi.mock('react-query', async () => {
  const actual: { [key: string]: unknown } = await vi.importActual(
    'react-query',
  );

  return {
    ...actual,
    useQueryClient: () => ({
      invalidateQueries: mockInvalidateQueries,
    }),
  };
});

describe('RetryPage', () => {
  it('must render the error mensage', () => {
    render(
      <WrapperProviderQuery>
        <RetryPage />
      </WrapperProviderQuery>,
    );

    expect(
      screen.getByText('Error retrieving health status'),
    ).toBeInTheDocument();
  });

  it('must retry the connection on click button', () => {
    render(
      <WrapperProviderQuery>
        <RetryPage />
      </WrapperProviderQuery>,
    );

    fireEvent.click(
      screen.getByRole('button', { name: 'Retry the connection ...' }),
    );

    expect(mockInvalidateQueries).toHaveBeenCalledWith('health');
  });
});

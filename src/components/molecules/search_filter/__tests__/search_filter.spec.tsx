import { act, fireEvent, render, screen } from '@testing-library/react';
import { WrapperProviderRouter } from '@utils/tests/wrappers/wrapper_provider_router';
import { describe, it, vi } from 'vitest';
import { SearchFilter } from '../search_filter';

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.clearAllTimers();
});

describe('QuestionsList', () => {
  const onChange = vi.fn();

  const debouceDelay = 500;

  it('must calls onChange when input value is changed', async () => {
    render(
      <WrapperProviderRouter>
        <SearchFilter onChange={onChange} />
      </WrapperProviderRouter>,
    );

    fireEvent.change(screen.getByPlaceholderText('Search...'), {
      target: { value: 'React' },
    });

    act(() => {
      vi.advanceTimersByTime(debouceDelay);
    });

    await act(async () => {
      await Promise.resolve();

      expect(onChange).toHaveBeenCalledWith('React');
    });
  });

  it('must clears input value when clear button is clicked', async () => {
    render(
      <WrapperProviderRouter>
        <SearchFilter onChange={onChange} />
      </WrapperProviderRouter>,
    );

    fireEvent.change(screen.getByPlaceholderText('Search...'), {
      target: { value: 'React' },
    });

    act(() => {
      vi.advanceTimersByTime(debouceDelay);
    });

    fireEvent.click(screen.getByRole('button', { name: 'Clear' }));

    await act(async () => {
      await Promise.resolve();

      expect(screen.getByPlaceholderText('Search...')).toHaveValue('');
    });
  });

  it('must navigates with filter parameter when input value is changed', async () => {
    render(
      <WrapperProviderRouter>
        <SearchFilter onChange={onChange} />
      </WrapperProviderRouter>,
    );

    fireEvent.change(screen.getByPlaceholderText('Search...'), {
      target: { value: 'React' },
    });

    act(() => {
      vi.advanceTimersByTime(debouceDelay);
    });

    await act(async () => {
      await Promise.resolve();

      expect(screen.getByText('?filter=React')).toBeInTheDocument();
    });
  });
});

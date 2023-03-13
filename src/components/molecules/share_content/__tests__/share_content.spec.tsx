import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import { ShareContent } from '../share_content';

describe('ShareContent', () => {
  const mockOnShareContent = vi.fn();

  it('must disable the share button when email is not valid', async () => {
    render(<ShareContent onShareContent={mockOnShareContent} />);

    fireEvent.change(screen.getByPlaceholderText('Email...'), {
      target: { value: 'teste@' },
    });

    expect(screen.getByRole('button', { name: 'Share link' })).toBeDisabled();
  });

  it('must trigger the action when email is valid on click', async () => {
    render(<ShareContent onShareContent={mockOnShareContent} />);

    fireEvent.change(screen.getByPlaceholderText('Email...'), {
      target: { value: 'teste@teste.com' },
    });

    fireEvent.click(screen.getByRole('button', { name: 'Share link' }));

    expect(mockOnShareContent).toHaveBeenCalledWith('teste@teste.com');
  });
});

import { fireEvent, render, screen } from '@testing-library/react';
import { choiceFactory } from '@utils/tests/factories/choice.factorie';
import { describe, it, vi } from 'vitest';
import { ChoicesView } from '../choices_view';

describe('ChoicesView', () => {
  const choices = [
    choiceFactory({
      choice: 'Swift',
      votes: 2048,
    }),
    choiceFactory({
      choice: 'Python',
      votes: 1024,
    }),
    choiceFactory({
      choice: 'Objective-C',
      votes: 512,
    }),
  ];

  const mockOnVote = vi.fn();

  it('must render all the choices', () => {
    render(
      <ChoicesView
        choices={choices}
        onVote={mockOnVote}
      />,
    );

    expect(screen.getByText('Swift')).toBeInTheDocument();
    expect(screen.getByText('Python')).toBeInTheDocument();
    expect(screen.getByText('Objective-C')).toBeInTheDocument();
  });

  it('must trigger the action on click on vote', () => {
    render(
      <ChoicesView
        choices={choices}
        onVote={mockOnVote}
      />,
    );

    fireEvent.click(screen.getAllByRole('button', { name: 'Vote' })[0]);

    expect(mockOnVote).toBeCalled();
  });
});

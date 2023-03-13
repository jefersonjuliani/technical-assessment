import { fireEvent, render, screen } from '@testing-library/react';
import { questionFactory } from '@utils/tests/factories';
import { WrapperProviderRouter } from '@utils/tests/wrappers/wrapper_provider_router';
import { describe, it, vi } from 'vitest';
import { QuestionsList } from '../questions_list';

const mockUseNavigate = vi.fn();

vi.mock('react-router-dom', async () => {
  const actual: { [key: string]: unknown } = await vi.importActual(
    'react-router-dom',
  );

  return {
    ...actual,
    useNavigate: () => mockUseNavigate,
  };
});

describe('QuestionsList', () => {
  const questions = [
    questionFactory({ id: 1, question: 'question title 1' }),
    questionFactory({ id: 2, question: 'question title 2' }),
    questionFactory({ id: 3, question: 'question title 3' }),
  ];

  it('must render all the questions', () => {
    render(
      <WrapperProviderRouter>
        <QuestionsList questions={questions} />
      </WrapperProviderRouter>,
    );

    expect(screen.getByText('question title 1')).toBeInTheDocument();
    expect(screen.getByText('question title 2')).toBeInTheDocument();
    expect(screen.getByText('question title 3')).toBeInTheDocument();
  });

  it('must navigate to question page on click detail', () => {
    render(
      <WrapperProviderRouter>
        <QuestionsList questions={questions} />
      </WrapperProviderRouter>,
    );

    fireEvent.click(
      screen.getAllByRole('button', { name: 'Detail Screen' })[0],
    );

    expect(mockUseNavigate).toBeCalledWith(questions[0].resourceUrl);
  });
});

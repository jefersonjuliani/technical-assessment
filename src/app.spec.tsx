import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import App from './app';

describe('App', () => {
  it('Renders hello world', () => {
    render(<App />);

    expect(screen.getByText('Heloooo')).toBeInTheDocument();
  });
});

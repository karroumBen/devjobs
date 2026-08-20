jest.mock('./features/jobPostingList', () => () => <div>Job list</div>);

import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { GlobalContext, useAppContext } from './context';
import App from './features/app';

test('renders the home page heading', () => {
  render(
    <GlobalContext>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </GlobalContext>
  );

  expect(screen.getByText(/dev jobs/i)).toBeInTheDocument();
});

const ContextReader = () => {
  const { user } = useAppContext();
  return <div>{user.name}</div>;
};

test('initializes a guest user when localStorage is empty', () => {
  localStorage.clear();

  render(
    <GlobalContext>
      <ContextReader />
    </GlobalContext>
  );

  expect(screen.getByText('Guest')).toBeInTheDocument();
  expect(localStorage.getItem('user')).toBe(JSON.stringify({ name: 'Guest' }));
});

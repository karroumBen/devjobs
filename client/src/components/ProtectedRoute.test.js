import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { GlobalContext } from '../context';
import ProtectedRoute from './ProtectedRoute';

const renderProtectedRoute = () => {
  render(
    <GlobalContext>
      <MemoryRouter initialEntries={['/profile']}>
        <Routes>
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <div>Profile page</div>
              </ProtectedRoute>
            }
          />
          <Route path="/user/login" element={<div>Login page</div>} />
        </Routes>
      </MemoryRouter>
    </GlobalContext>
  );
};

describe('ProtectedRoute', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('redirects unauthenticated users to login', () => {
    renderProtectedRoute();
    expect(screen.getByText(/login page/i)).toBeInTheDocument();
  });

  test('renders protected content when authenticated', () => {
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('user', JSON.stringify({ name: 'Test User', id: '1' }));

    renderProtectedRoute();
    expect(screen.getByText(/profile page/i)).toBeInTheDocument();
  });
});

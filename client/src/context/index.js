import React, { useContext, useState } from "react";

const AppContext = React.createContext();
const AppContextUpdater = React.createContext();

export const useAppContext = () => {
  return useContext(AppContext);
}

export const useAppContextUpdater = () => {
  return useContext(AppContextUpdater);
}

export function GlobalContext({ children}) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuthenticated') === 'true'
  );
  const item = localStorage.getItem('user');
  if(!item) {
    localStorage.setItem('user', JSON.stringify({ name: 'Guest'}))
  }

  const [user, setUser] = useState(JSON.parse(item));

  return (
    <AppContext.Provider value={{ isAuthenticated, user }}>
      <AppContextUpdater.Provider value={{setIsAuthenticated, setUser}}>
        {children}
      </AppContextUpdater.Provider>
    </AppContext.Provider>
  )
}

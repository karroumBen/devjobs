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
  const [user, setUser] = useState({ name: 'Guest Role'});

  return (
    <AppContext.Provider value={{ isAuthenticated, user }}>
      <AppContextUpdater.Provider value={{setIsAuthenticated, setUser}}>
        {children}
      </AppContextUpdater.Provider>
    </AppContext.Provider>
  )
}

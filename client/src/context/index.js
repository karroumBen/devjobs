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
  return (
    <AppContext.Provider value={{ isAuthenticated }}>
      <AppContextUpdater.Provider value={{setIsAuthenticated}}>
        {children}
      </AppContextUpdater.Provider>
    </AppContext.Provider>
  )
}

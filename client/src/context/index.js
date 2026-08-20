import React, { useContext, useState } from "react";

const GUEST_USER = { name: "Guest" };

const getInitialUser = () => {
  const item = localStorage.getItem("user");
  if (!item) {
    localStorage.setItem("user", JSON.stringify(GUEST_USER));
    return GUEST_USER;
  }

  try {
    return JSON.parse(item);
  } catch {
    localStorage.setItem("user", JSON.stringify(GUEST_USER));
    return GUEST_USER;
  }
};

const AppContext = React.createContext();
const AppContextUpdater = React.createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const useAppContextUpdater = () => {
  return useContext(AppContextUpdater);
};

export function GlobalContext({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => localStorage.getItem("isAuthenticated") === "true"
  );
  const [user, setUser] = useState(getInitialUser);

  return (
    <AppContext.Provider value={{ isAuthenticated, user }}>
      <AppContextUpdater.Provider value={{ setIsAuthenticated, setUser }}>
        {children}
      </AppContextUpdater.Provider>
    </AppContext.Provider>
  );
}

export { GUEST_USER };

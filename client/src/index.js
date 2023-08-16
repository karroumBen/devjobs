import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from "react-router-dom";
import router from './router';
import axios from 'axios';
import './utils/requestInterceptor';
import { GlobalContext } from './context';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalContext>
      <RouterProvider router={router} />
    </GlobalContext>
  </React.StrictMode>
);

reportWebVitals();

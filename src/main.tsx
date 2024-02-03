import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import { ThemeProvider } from './components/theme-provider.tsx';

import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
    <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)

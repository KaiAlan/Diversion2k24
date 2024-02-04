import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import { ThemeProvider } from './components/theme-provider.tsx';

import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router.tsx';
import { SupplyChainProvider } from './Context/SupplyChainContext.tsx';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Auth0Provider 
    domain="dev-fnrc23jocna28zi4.us.auth0.com"
    clientId="LARZmmcAAHpJwkFpkLmWS6AWw4KGWWya"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <SupplyChainProvider>
    <RouterProvider router={router} />
    </SupplyChainProvider>
    </ThemeProvider>
  </Auth0Provider>,
)

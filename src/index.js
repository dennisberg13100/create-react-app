import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'

const container = document.getElementById('root');
const root = createRoot(container)
root.render(
  <BrowserRouter>
   <Auth0Provider
      domain="dev-kb35fzti.us.auth0.com"
      clientId="azs6YETpLqiwDdhg6mun8Levnoj3IB3r"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </BrowserRouter>
);


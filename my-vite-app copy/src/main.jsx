import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Router from './Router.jsx';
import Home from './Home.jsx';
import PrivacyPolicy from './PrivacyPolicy.jsx';
import DeleteAccount from './DeleteAccount.jsx';

const routes = [
  { path: '/', element: Home },
  { path: '/mandal-portal', element: App },
  { path: '/privacy-policy', element: PrivacyPolicy },
  // { path: '/delete-account', element: DeleteAccount },
  { path: '*', element: Home },
];

createRoot(document.getElementById('root')).render(
  <StrictMode><Router routes={routes} /></StrictMode>,
);

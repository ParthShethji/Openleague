import React from 'react';

import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { TonConnectUIProvider } from '@tonconnect/ui-react'
const maifesturl ="https://raw.githubusercontent.com/markokhman/func-course-chapter-5-code/master/public/manifest.json"


ReactDOM.createRoot(document.getElementById('root')).render(
  <TonConnectUIProvider manifestUrl={maifesturl}>
    <App />
    </TonConnectUIProvider>
);

import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './pages/Layout/Layout.tsx'
import { GlobalStateProvider } from './Shared/Providers/GlobalStateProvider.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStateProvider>
      <Layout />
    </GlobalStateProvider>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Router/Router.jsx'
import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './AuthProvider/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={Router}></RouterProvider>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,

)

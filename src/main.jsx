import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'react-day-picker/dist/style.css';
import AuthProvider from './contexts/AuthProvider.jsx';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <QueryClientProvider client={queryClient}>
  <AuthProvider>
    <App />
    </AuthProvider>
  </QueryClientProvider>
  </React.StrictMode>,
)

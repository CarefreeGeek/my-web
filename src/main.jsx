
import { createRoot } from 'react-dom/client'
import './style.css'
import App from './App.jsx'
import { AuthProvider } from "./Components/auth/AuthProvider.jsx";

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <App />
  </AuthProvider>,
)

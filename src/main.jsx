import React from 'react'
import ReactDOM from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import App from './App'
import './assets/css/main.css'
//TODO: Envolverlo con React.StrictMode
ReactDOM.createRoot(document.getElementById('root')).render(
    <NextUIProvider>
      {/* dark text-foreground bg-[#2c3e50]  */}
      <main className="dark text-foreground  bg-[#222831]">
        <App />
      </main>
    </NextUIProvider>
)

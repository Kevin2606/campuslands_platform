import React from 'react'
import ReactDOM from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <main className="dark text-foreground bg-[#2c3e50] ">
        <h1>Hola mundo</h1>
      </main>
    </NextUIProvider>
  </React.StrictMode>,
)

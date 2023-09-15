import React from 'react'
import ReactDOM from 'react-dom/client'
import RouteFile from './Routes'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from "next-themes";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="light">
   
        <RouteFile />

      </NextThemesProvider>
    </NextUIProvider>
  </React.StrictMode>
)

import React from 'react'
import ReactDOM, { Root } from 'react-dom/client'
import {
  BrowserRouter,
} from "react-router-dom";
import App from './App'
import './index.css'
import './public-path'


declare global {
  interface Window {
    microApp: any
    __MICRO_APP_NAME__: string
    __MICRO_APP_ENVIRONMENT__: string
    __MICRO_APP_BASE_ROUTE__: string
  }
}


function render() {
  const app: Element = document.getElementById("app") as Element
  const root: Root = ReactDOM.createRoot(app)
    
  root.render(
    <React.StrictMode>
      <BrowserRouter basename={window.__MICRO_APP_BASE_ROUTE__ || '/'}>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  )
}

render();

// 子应用卸载
window.addEventListener('unmount', function () {
  // 执行卸载相关操作
})


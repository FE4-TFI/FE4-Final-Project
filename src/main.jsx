import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { ArtikelApi } from './redux/reducer.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ApiProvider api={ArtikelApi}>
      <BrowserRouter>
      {/* <React.StrictMode> */}
        <App />
      {/* </React.StrictMode> */}
      </BrowserRouter>
    </ApiProvider>
  </Provider>,
)

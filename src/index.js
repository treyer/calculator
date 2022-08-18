import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { MainLayout } from '@layouts/MainLayout'

import { store } from '@store'
import GlobalStyles from './globalStyles'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <MainLayout />
      <GlobalStyles />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
)

import React from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import { indexPage } from './core/routes'

import MainPage from './pages/MainPage';

import {store} from './core/store';

import { GlobalStyles } from './assets/styles/global'

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter basename={process.env.APP_BASE_URL as string}>
                <Routes>
                    <Route path={indexPage} element={<MainPage />} />
                </Routes>
            </BrowserRouter>
            <GlobalStyles />
        </Provider>
    
    );
}

export default App;
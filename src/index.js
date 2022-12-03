import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthorContextProvider } from './contexts/AuthorContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <AuthorContextProvider>
        <App/>
    </AuthorContextProvider>
)
reportWebVitals();
 
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './HelloWorldApp'
import './styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App name="Fernando" age={ 24 }/>
    </React.StrictMode>
)
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './pages/App';
import { ViewBreed } from './pages/ViewBreed';
import './styles/index.css';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/breeds/:breedId" element={<ViewBreed />}></Route>
                <Route path="/" element={<App />}></Route>
            </Routes>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

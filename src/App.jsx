import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import MainContent from "./components/mainContent";
import Header from './components/header';


function App() {
    return (
        <div className="container">
            <Header />
            <MainContent />
        </div>
    );
}

export default App;

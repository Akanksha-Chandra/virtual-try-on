import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import MainContent from "./components/mainContent";
import UploadPage from './UploadPage';
import Header from './components/header';


function App() {
  return (
    <Router>
    <div className="container">
      <Header></Header>
      <MainContent>
      
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/UploadPage">Upload</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Route path="/" component={MainContent} />
        <Route path="/UploadPage" component={UploadPage} />
      </div>
    </MainContent>
    </div>
    </Router>
  );
}

export default App;
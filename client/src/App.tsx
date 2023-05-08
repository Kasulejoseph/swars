import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { ListPeople } from './pages/ListPeople';
import { Container } from 'react-bootstrap';
import { PersonsDetails } from './pages/PersonsDetails';

function App() {
  return (
    <Router>
      <Container>
      <Routes>
        <Route path="/" Component={ListPeople}/>
        <Route path="/person" Component={PersonsDetails} />
      </Routes>
      </Container>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { ListPeople } from "./pages/ListPeople";
import { Container } from "react-bootstrap";
import { PersonsDetails } from "./pages/PersonsDetails";
import { PageProvider } from "./context";

function App() {
  return (
    <PageProvider>
      <Router>
        <Container>
          <Routes>
            <Route path="/" Component={ListPeople} />
            <Route path="/person" Component={PersonsDetails} />
          </Routes>
        </Container>
      </Router>
    </PageProvider>
  );
}

export default App;

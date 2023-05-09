import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { ListPeople } from "./pages/ListPeople";
import { PersonsDetails } from "./pages/PersonsDetails";
import { PageProvider } from "./context";
import { PageContainer } from "./components/PageContainer";

function App() {
  return (
    <PageProvider>
      <Router>
        <PageContainer>
          <Routes>
            <Route path="/" Component={ListPeople} />
            <Route path="/person" Component={PersonsDetails} />
          </Routes>
        </PageContainer>
      </Router>
    </PageProvider>
  );
}

export default App;

import React from 'react';
import EmployeeTable from "./EmployeeTable";
import './App.css';
import {Container} from "react-bootstrap";

function App() {
  return (
    <div className="App">
        <Container fluid={true}>
            <EmployeeTable/>
        </Container>
    </div>
  );
}

export default App;

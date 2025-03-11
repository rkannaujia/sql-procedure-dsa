import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Employee from '../src/employeepages/Employee';
import AddEmployee from '../src/employeepages/AddEmployee';
import Add from "./pages/Add";
import UpdateEmployee from '../src/employeepages/UpdateEmployee';
import "./style.css"

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
        <Router>
          <Routes>
            <Route path="/" element={<Employee />} />
            <Route path="/add-employee" element={<AddEmployee />} />
            <Route path="/add" element={<Add />} />
            <Route path="/update/:id" element={<UpdateEmployee />} />
          </Routes>
        </Router>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;

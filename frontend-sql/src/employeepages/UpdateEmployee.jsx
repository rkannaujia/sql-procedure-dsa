import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Notification,
  useToaster,
} from "rsuite";

const UpdateEmployee = () => {
  const toaster = useToaster();
  const navigate = useNavigate();
  const location = useLocation();
  const employeeId = location.pathname.split('/')[2];

  const [emp, setEmp] = useState({
    name: '',
    surname: '',
    gender: '',
    department: '',
    designation: '',
    salary: '',
    age: '',
    contact: '',
    address: ''
  });

  useEffect(() => {
    const fetchAllEmpData = async () => {
      try {
        const resultfromApi = await axios.get(`http://localhost:9026/api/books-i/getEmployeeById/${employeeId}`);
        const result = resultfromApi.data.result[0];
        setEmp(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllEmpData();
  }, [employeeId]);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const updateEmpRes = await axios.post(`http://localhost:9026/api/books-i/updateEmployee/${employeeId}`, emp);
      console.log('>>>>', updateEmpRes.data);
      if (updateEmpRes.status !== 200) {
        throw new Error("Submission failed");
      }
      toaster.push(
        <Notification type="success" header="Success">
           Employee  updated successfully!
        </Notification>,
        { duration: 5000 }
      );
      navigate('/');
    } catch (error) {
      toaster.push(
        <Notification type="error" header="Error">
          Update failed. Please try again.
        </Notification>,
        { duration: 5000 }
      );
    }
  };

  const handleChange = (e) => {
    setEmp((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div >
      <form className='Empform'>
        <table>
          <tbody>
            <tr>
              <td><label htmlFor="name">Employee Name</label></td>
              <td><input type="text" placeholder='Employee Name' onChange={handleChange} name='name' value={emp.name} /></td>
            </tr>
            <tr>
              <td><label htmlFor="surname">Employee Surname</label></td>
              <td><input type="text" placeholder='Employee Surname' onChange={handleChange} name='surname' value={emp.surname} /></td>
            </tr>
            <tr>
              <td><label htmlFor="gender">Employee Gender</label></td>
              <td><input type="text" placeholder='Gender' onChange={handleChange} name='gender' value={emp.gender} /></td>
            </tr>
            <tr>
              <td><label htmlFor="department">Employee Department</label></td>
              <td><input type="text" placeholder='Department' onChange={handleChange} name='department' value={emp.department} /></td>
            </tr>
            <tr>
              <td><label htmlFor="designation">Employee designation</label></td>
              <td><input type="text" placeholder='designation' onChange={handleChange} name='designation' value={emp.designation} /></td>
            </tr>
            <tr>
              <td><label htmlFor="salary">Employee Salary</label></td>
              <td><input type="text" placeholder='Salary' onChange={handleChange} name='salary' value={emp.salary} /></td>
            </tr>
            <tr>
              <td><label htmlFor="age">Employee Age</label></td>
              <td><input type="text" placeholder='Age' onChange={handleChange} name='age' value={emp.age} /></td>
            </tr>
            <tr>
              <td><label htmlFor="contact">Employee Contact</label></td>
              <td><input type="text" placeholder='Contact' onChange={handleChange} name='contact' value={emp.contact} /></td>
            </tr>
            <tr>
              <td><label htmlFor="address">Employee Address</label></td>
              <td><input type="text" placeholder='Address' onChange={handleChange} name='address' value={emp.address} /></td>
            </tr>
            <tr>
              <td colSpan="2" style={{ textAlign: 'center' }}>
                <button onClick={handleClick}>Update</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default UpdateEmployee;

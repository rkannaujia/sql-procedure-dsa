import React, { useState } from 'react';
import "./style.css";
import {
    Notification,
    useToaster,
  } from "rsuite";

  import axios from "axios";
  import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {
    const [formData, setFormData] = useState({
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
    const toaster = useToaster();
    const navigate =useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async () => {
        if (
          !formData.name ||
          !formData.surname ||
          !formData.gender ||
          !formData.department ||
          !formData.designation ||
          !formData.salary ||
          !formData.age ||
          !formData.contact ||
          !formData.address
        ) {
          toaster.push(
            <Notification type="error" header="Error">
              Please fill in all required fields.
            </Notification>,
            { duration: 5000 }
          );
        } else {
          try {
            console.log(formData);
            navigate("/")  
            const response = await axios.post('http://localhost:9026/api/books-i/addEmployee',formData,
              { headers: { 'Content-Type': 'application/json' } }
            );
            if (response.status !== 200) {
              throw new Error("Submission failed");
            }
            toaster.push(
              <Notification type="success" header="Success">
               Employee <span>{response.data.result.insertId}</span> added successfully!
              </Notification>,
              { duration: 5000 }
            );
            window.location.reload();
            navigate("/") 
            setFormData({
              name: "",
              surname: "",
              gender: "",
              department: "",
              designation: "",
              salary: "",
              age: "",
              contact: "",
              address: "",
            });
          } catch (error) {
            toaster.push(
              <Notification type="error" header="Error">
                Submission failed. Please try again.
              </Notification>,
              { duration: 5000 }
            );
          }
        }
      };

    return (
        <form onSubmit={handleSubmit} style={{ marginTop: '20px', padding: '20px', border: '1px solid #ccc' }}>
            <h2>Add Employee</h2>
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div>
                <label>Surname:</label>
                <input type="text" name="surname" value={formData.surname} onChange={handleChange} required />
            </div>
            <div>
                <label>Gender:</label>
                <select name="gender" value={formData.gender} onChange={handleChange} required>
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>
            <div>
                <label>Department:</label>
                <input type="text" name="department" value={formData.department} onChange={handleChange} required />
            </div>
            <div>
                <label>Designation:</label>
                <input type="text" name="designation" value={formData.designation} onChange={handleChange} required />
            </div>
            <div>
                <label>Salary:</label>
                <input type="number" name="salary" value={formData.salary} onChange={handleChange} required />
            </div>
            <div>
                <label>Age:</label>
                <input type="number" name="age" value={formData.age} onChange={handleChange} required />
            </div>
            <div>
                <label>Contact:</label>
                <input type="text" name="contact" value={formData.contact} onChange={handleChange} required />
            </div>
            <div>
                <label>Address:</label>
                <input type="text" name="address" value={formData.address} onChange={handleChange} required />
            </div>
            <button type="submit" style={{ marginTop: '10px' }}>Add Employee</button>
        </form>
    );
};

export default AddEmployee;

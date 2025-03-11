import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import './employee.css';
import {
    Notification,
    useToaster,
  } from "rsuite";

const Employee = () => {
    const [emp, setEmp] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [page, setPage] = useState(1);
    const [limit] = useState(8);
    const toaster = useToaster();
    const navigate =useNavigate()

    useEffect(() => {
        const fetchAllEmpData = async () => {
            try {
                const res = await axios.get("http://localhost:9026/api/books-i/getEmpDetails");
                console.log(res);
                setEmp(res.data.result);
            } catch (error) {
                console.log(error);
            }
        }
        fetchAllEmpData();
    }, []);

    const filteredEmp = emp.filter((e) =>
        e.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        e.empcode.toString().includes(searchTerm)
    );

    const indexOfLastItem = page * limit;
    const indexOfFirstItem = indexOfLastItem - limit;
    const currentItems = filteredEmp.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredEmp.length / limit);

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setPage(1);
    };
    //handle delete
    const handleDelete = async (id) => {
        try {
         const response = await axios.delete("http://localhost:9026/api/books-i/deleteEmployee/" + id)
            if (response.status !== 200) {
                throw new Error("Submission failed");
              }
              toaster.push(
                <Notification type="success" header="Success">
                 Employee  Deleted successfully!
                </Notification>,
                { duration: 5000 }
              );
              window.location.reload();
        } catch (error) {
            toaster.push(
                <Notification type="error" header="Error">
                  Deletion failed. Please try again.
                </Notification>,
                { duration: 5000 }
              );
        }
    };

    const downloadData = () => {
        const csvContent = emp.map((row) => Object.values(row).join(',')).join('\n');
        const blob = new Blob([csvContent], { type: 'text/csv' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'emp.csv';
        link.click();
    };


    return (
        <div>
            <h1>Employee List</h1>
            <input
                type="text"
                placeholder="Search by name or empcode"
                value={searchTerm}
                onChange={handleSearchChange}
                style={{ marginBottom: 20, padding: 8, width: '50%' }}
            />

            <button
                onClick={() => navigate('/add-employee')}
                style={{ marginLeft: '20px', padding: '8px 16px' }}
            >
                Add Employee
            </button>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Gender</th>
                        <th>Department</th>
                        <th>Salary</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((e) => (
                        <tr key={e.empcode}>
                            <td>{e.empcode}</td>
                            <td>{e.name}</td>
                            <td>{e.surname}</td>
                            <td>{e.gender}</td>
                            <td>{e.department}</td>
                            <td>{e.salary}</td>
                            <td>{e.age}</td>
                            <td><button className='td_Button u_button' ><Link to={`/update/${e.empcode}`}>U</Link></button></td>
                            <td><button className='td_Button x_button' onClick={() => handleDelete(e.empcode)}>X</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div style={{ marginTop: '20px' }}>
                <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
                    Previous
                </button>
                <span style={{ margin: '0 10px' }}>Page {page} of {totalPages}</span>
                <button onClick={() => handlePageChange(page + 1)} disabled={page === totalPages}>
                    Next
                </button>
                <button onClick={downloadData} disabled={emp.length === 0}>Download Data</button>
            </div>
        </div>
    );
}

export default Employee;

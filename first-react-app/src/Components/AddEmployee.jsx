import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getEmployeeById, insertEmployee, updateEmployee } from '../Services/EmployeeService';

function AddEmployee() {
   
    const [eid,setEid] = useState();
    const [ename,setEname] = useState();
    const [age,setAge] = useState();
    const [mono,setMono] = useState();
    const [salary,setSalary] = useState();

    const {id} = useParams();

    const navigator = useNavigate();

    useEffect(() => {
        handleEmployee();
    }, []);

    const handleEmployee = () =>{
        getEmployeeById(id).then((response) =>{
            setEid(response.data.eid);
            setEname(response.data.ename);
            setAge(response.data.age);
            setMono(response.data.mono);
            setSalary(response.data.salary);
        }).catch((error) => {
            console.log(error);
        })
        }

    function saveOrUpdateEmployee()
    {
        const employee = {eid,ename,age,mono,salary};

        if(id){
            updateEmployee(employee);

        }
        else{
            insertEmployee(employee);
            
        }
        navigator("/");
    
    }

    function pageTitle(){
        if(id){
            return <h2 className='text-center display-6 mb-3'>Update Employee</h2>

        }
        else {
            <h2 className='text-center display-6 mb-3'>Add Employee</h2>

        }
    }

  return (
    <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-5 border shadow p-3 mt-5'>
                    {pageTitle}
                    <input type='text' className='form-control mb-2' placeholder='Enter Employee Id'
                        value={eid} onChange={(e) => { setEid(e.target.value) }} />

                    <input type='text' className='form-control mb-2' placeholder='Enter Employee Name'
                        value={ename} onChange={(e) => { setEname(e.target.value) }} />

                    <input type='text' className='form-control mb-2' placeholder='Enter Age'
                        value={age} onChange={(e) => { setAge(e.target.value) }} />

                    <input type='text' className='form-control mb-2' placeholder='Enter Mobile Number'
                        value={mono} onChange={(e) => { setMono(e.target.value) }} />

                    <input type='text' className='form-control mb-2' placeholder='Enter Salary'
                        value={salary} onChange={(e) => { setSalary(e.target.value) }} />

                    <button onClick={saveOrUpdateEmployee} type='submit' className='btn btn-info w-100'>Submit</button>
                </div>
            </div>
        </div>
  )
}

export default AddEmployee
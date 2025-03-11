import axios from "axios";

const BASE_REST_API = "http://localhost:8081/emp-service/"; 

export const fetchEmployees = ()=> axios.get(BASE_REST_API).then(res=>res.data);

export const insertEmployee = (employee)=> axios.post(BASE_REST_API, employee);

export const deleteEmployee = (eid)=> axios.delete(`${BASE_REST_API}${eid}`);

export const getEmployeeById = (eid) => axios.get(`${BASE_REST_API}${eid}`);

export const updateEmployee = (employee) => axios.put(BASE_REST_API, employee);

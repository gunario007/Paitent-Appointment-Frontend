import React from 'react'
import axios from 'axios';
import { useState } from 'react';

const Appointment = () => {


    const [user, setUser] = useState({
        patientName : "",
        doctorName : "",
        date : ""
       
      });
     
    
      const { patientName,doctorName,date} = user;
    
      const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };
    
    
      const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/api/appointment/create", user);
       
      };
  return (
    <div>
    <h6><center>Appointment</center></h6>
    
    <form onSubmit={(e) => onSubmit(e)}>

        
<div className="mb-3">
  <label htmlFor="PatientName" className="form-label">
    PatientName
  </label>
  <input
    type={"text"}
    className="form-control"
    placeholder="Enter your from destination"
    name="patientName"
    value={patientName}
    onChange={(e) => onInputChange(e)}
  />
</div>
<div className="mb-3">
  <label htmlFor="DoctorName" className="form-label">
    Doctor name
  </label>
  <input
    type={"text"}
    className="form-control"
    placeholder="Enter your to destination"
    name="doctorName"
    value={doctorName}
    onChange={(e) => onInputChange(e)}
  />
</div>
<div className="mb-3">
  <label htmlFor="Date" className="form-label">
    Date
  </label>
  <input
    type={"date"}
    className="form-control"
    placeholder="Enter your date"
    name="date"
    value={date}
    onChange={(e) => onInputChange(e)}
  />
</div>


<button 
type="submit" className="btn btn-outline-primary" >Book Appointment</button>


</form>
      
    </div>
  )
}

export default Appointment

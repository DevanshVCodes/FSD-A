import React from 'react';
import './App.css';


const App = ({Name,Mail, Phone}) => {
  return (
    <div id="disp">
      <h1>Student Details</h1>
      <h2>Name : {Name}</h2>
      <h2>Email id : {Mail}</h2>
      <h2>Mobile Number : {Phone}</h2>
    </div>
  );
};

export default App

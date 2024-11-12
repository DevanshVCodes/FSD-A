import React from 'react'

const DisplayMarks = () => {
    const students = [
        {m1:81, m2:85, m3:82},
        {m1:27, m2:89, m3:33},
        {m1:57, m2:77, m3:35},
        {m1:67, m2:37, m3:85},
    ];
  return (
    <>
    {students.map((student,index)=>(
        <Marks key={index} m1={student.m1} m2={student.m2} m3={student.m3}/>
    ))}
  </>
  );
};

export default DisplayMarks
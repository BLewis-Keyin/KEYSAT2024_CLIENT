// import React from "react";
// import Header from "../components/Header";
// import Navbar from "../components/Navbar";
// import { Link } from "react-router-dom";
// import { useAuth } from "../auth/auth";

// function AdminAddRemoveUsers() {
//     const username = localStorage.getItem("username");
//     return (
//         <div>
//             <Header></Header>

//             <div className="addremove-container">

//                 <Navbar>
//                     <Link to="/admin-dashboard" className="nav-link">
//                         Admin Dashboard
//                     </Link>
//                     <Link to="/courses" className="nav-link">
//                         Courses
//                     </Link>
//                     <Link to="/admin-add-remove-users" className="nav-link">
//                         Students and Instructors
//                     </Link>
//                 </Navbar>

//                 <div className="student-section">
//                 <h2>Add/Remove Instructors and Students</h2>

//                 <div className="student-form">

//                     <label htmlFor="studentName">Student Name:</label>
//                         <input type="text" id="studentName" />
//                         <label htmlFor="group">Student Group:</label>
//                         <input type="text" id="group" />
//                         <label htmlFor="studentEmail">Student Email:</label>
//                         <input type="email" id="studentEmail" />
//                         <button type="submit">Add Student</button>
//                     </div>

                    
//                 <div className="instructor-section">
    
//                     <div className="instructor-form">

//                         <label htmlFor="instructorName">Instructor Name:</label>
//                         <input type="text" id="instructorName" />
//                         <label htmlFor="instructorEmail">Instructor Email:</label>
//                         <input type="email" id="instructorEmail" />
//                         <button type="submit">Add Instructor</button>
//                     </div>
//                 </div>

//                 <div className="table-container">
//                     <table>
//                         <thead>
//                             <tr>
//                                 <th>Student Name</th>
//                                 <th>Group</th>
//                                 <th>Email</th>
//                                 <th>Edit/Delete</th>
//                                 <th>Instructor Name</th>
//                                 <th>Email</th>
//                                 <th>Edit/Delete</th>
//                             </tr>
//                         </thead>

//                         <tbody>
//                             <tr>
//                                 <td>John Doe</td>
//                                 <td>Group A</td>
//                                 <td>john.doe@example.com</td>
//                                 <td>
//                                     <button>Edit</button>
//                                     <button>Delete</button>
//                                 </td>
//                                 <td>Jane Smith</td>
//                                 <td>jane.smith@example.com</td>
//                                 <td><button>Edit</button>
//                                     <button>Delete</button></td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 </div>


//                 </div>
//             </div>
  
//         </div>
//     );
// }

// export default AdminAddRemoveUsers;
import React, { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/auth";

function StudentTable({ students, handleEditStudent, handleDeleteStudent }) {
    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Group</th>
                        <th>Email</th>
                        <th>Edit/Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={index}>
                            <td>{student.name}</td>
                            <td>{student.group}</td>
                            <td>{student.email}</td>
                            <td>
                                <button onClick={() => handleEditStudent(index)}>Edit</button>
                                <button onClick={() => handleDeleteStudent(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function InstructorTable({ instructors, handleEditInstructor, handleDeleteInstructor }) {
    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Instructor Name</th>
                        <th>Email</th>
                        <th>Edit/Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {instructors.map((instructor, index) => (
                        <tr key={index}>
                            <td>{instructor.name}</td>
                            <td>{instructor.email}</td>
                            <td>
                                <button onClick={() => handleEditInstructor(index)}>Edit</button>
                                <button onClick={() => handleDeleteInstructor(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function AdminAddRemoveUsers() {
    const username = localStorage.getItem("username");
    const [students, setStudents] = useState([]);
    const [instructors, setInstructors] = useState([]);

    const [studentName, setStudentName] = useState("");
    const [studentGroup, setStudentGroup] = useState("");
    const [studentEmail, setStudentEmail] = useState("");

    const [instructorName, setInstructorName] = useState("");
    const [instructorEmail, setInstructorEmail] = useState("");

    const handleEditStudent = (index) => {
        const newStudents = [...students];
        newStudents[index].name = studentName;
        newStudents[index].group = studentGroup;
        newStudents[index].email = studentEmail;
        setStudents(newStudents);

    }

    const handleDeleteStudent = (index) => {
        const newStudents = [...students];
        newStudents.splice(index, 1);
        setStudents(newStudents);

    }

    const handleEditInstructor = (index) => {
        const newInstructors = [...instructors];
        newInstructors[index].name = instructorName;
        newInstructors[index].email = instructorEmail;
        setInstructors(newInstructors);

    }

    const handleDeleteInstructor = (index) => {
        const newInstructors = [...instructors];
        newInstructors.splice(index, 1);
        setInstructors(newInstructors);

    }

    const handleAddStudent = () => {
        const newStudent = {
            name: studentName,
            group: studentGroup,
            email: studentEmail
        };
        setStudents([...students, newStudent]);
        setStudentName("");
        setStudentGroup("");
        setStudentEmail("");
    };

    const handleAddInstructor = () => {
        const newInstructor = {
            name: instructorName,
            email: instructorEmail
        };
        setInstructors([...instructors, newInstructor]);
        setInstructorName(""); // Clear instructor name field
        setInstructorEmail(""); // Clear instructor email field
    };

    return (
        <div>
            <Header></Header>

            <div className="addremove-container">

                <Navbar>
                    <Link to="/admin-dashboard" className="nav-link">
                        Admin Dashboard
                    </Link>
                    <Link to="/courses" className="nav-link">
                    Courses
                    </Link>
                    <Link to="/admin-add-remove-users" className="nav-link">
                        Students and Instructors
                    </Link>
                </Navbar>

                <div className="student-section">
                    <h1>Add/Remove Students and Instructors</h1>
                    <div className="forms-container">
                    
                    <div className="student-form">
                    <h2>Add/Remove Students</h2>
                        <label htmlFor="studentName">Student Name:</label>
                        <input type="text" id="studentName" value={studentName} onChange={(e) => setStudentName(e.target.value)} />
                        
                        <label htmlFor="group">Student Group:</label>
                        <input type="text" id="group" value={studentGroup} onChange={(e) => setStudentGroup(e.target.value)} />
                        
                        <label htmlFor="studentEmail">Student Email:</label>
                        <input type="email" id="studentEmail" value={studentEmail} onChange={(e) => setStudentEmail(e.target.value)} />

                        <button type="button" onClick={handleAddStudent}>Add Student</button>
                    </div>

                    <StudentTable 
                    students={students}
                    handleEditStudent={handleEditStudent}
                    handleDeleteStudent={handleDeleteStudent} />
                </div>

                <div className="instructor-section">
                    
                    <div className="instructor-form">
                        <h2>Add/Remove Instructors</h2>
                        <label htmlFor="instructorName">Instructor Name:</label>
                        <input type="text" id="instructorName" value={instructorName} onChange={(e) => setInstructorName(e.target.value)} />
                        
                        <label htmlFor="instructorEmail">Instructor Email:</label>
                        <input type="email" id="instructorEmail" value={instructorEmail} onChange={(e) => setInstructorEmail(e.target.value)} />

                        <button type="button" onClick={handleAddInstructor}>Add Instructor</button>
                    </div>

                    <InstructorTable 
                    instructors={instructors}
                    handleEditInstructor={handleEditInstructor}
                    handleDeleteInstructor={handleDeleteInstructor} 
                     />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminAddRemoveUsers;
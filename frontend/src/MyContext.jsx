import React, { createContext, useEffect, useState } from "react";
import { Button } from "@mui/material";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [openStudent, setOpenStudent] = useState(false);
  const [institutes, setInstitutes] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    let i = 1;
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5000/institute/get");
        const data = await res.json();
        setInstitutes(
          data.institutes.map((institute) => ({
            id: institute._id,
            idi: i++,
            institution: institute.institution,
            address: institute.address,
            contact: institute.contact,
          }))
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [open]);

  useEffect(() => {
    let i = 1;
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5000/student/get");
        const data = await res.json();
        setStudents(
          data.map((student) => ({
            id: student._id,
            idi: i++,
            batch: student.batch,
            course: student.course,
            semester: student.semester,
            university: student.university,
            contact: student.contact,
          }))
          
        );
        console.log(students);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [openStudent]);

  const deleteInstitute = (id) => async () => {
    let i = 1;
    try {
      await fetch(`http://localhost:5000/institute/delete/${id}`, {
        method: "DELETE",
      });
      const res = await fetch("http://localhost:5000/institute/get");
      const data = await res.json();
      setInstitutes(
        data.institutes.map((institute) => ({
          id: institute._id,
          idi: i++,
          institution: institute.institution,
          address: institute.address,
          contact: institute.contact,
        }))
      );
    } catch (error) {
      console.error("Error deleting institute:", error);
    }
  };

  const deleteStudent = (id) => async () => {
    let i = 1;
    try {
      await fetch(`http://localhost:5000/student/delete/${id}`, {
        method: "DELETE",
      });
      const res = await fetch("http://localhost:5000/student/get");
      const data = await res.json();
      setStudents(
        data.map((student) => ({
          id: student._id,
          idi: i++,
          batch: student.batch,
          course: student.course,
          semester: student.semester,
          university: student.university,
          contact: student.contact,
        }))
      );
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  const columns = [
    { field: "idi", headerName: "ID", width: 50 },
    {
      field: "institution",
      headerName: "Institution",
      width: 390,
      editable: true,
    },
    {
      field: "address",
      headerName: "Address",
      width: 150,
      editable: true,
    },
    {
      field: "contact",
      headerName: "Contact",
      width: 170,
      editable: true,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => (
        <strong>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "red",
              ":hover": { backgroundColor: "#8A0000" },
            }}
            onClick={deleteInstitute(params.row.id)}
          >
            Delete
          </Button>
        </strong>
      ),
    },
  ];

  const studentColumns = [
    { field: "idi", headerName: "ID", width: 50 },
    {
      field: "batch",
      headerName: "Batch",
      width: 150,
      editable: true,
    },
    {
      field: "course",
      headerName: "Course",
      width: 250,
      editable: true,
    },
    {
      field: "semester",
      headerName: "Semester",
      width: 130,
      editable: true,
    },
    {
      field: "university",
      headerName: "University",
      width: 200,
      editable: true,
    },
    {
      field: "contact",
      headerName: "Contact",
      width: 170,
      editable: true,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => (
        <strong>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "red",
              ":hover": { backgroundColor: "#8A0000" },
            }}
            onClick={deleteStudent(params.row.id)}
          >
            Delete
          </Button>
        </strong>
      ),
    },
  ];

  return (
    <MyContext.Provider
      value={{
        open,
        setOpen,
        rows: institutes, // Use institutes as the rows data
        columns,
        institutes,
        setInstitutes,
        students,
        studentColumns,
        openStudent,
        setOpenStudent,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

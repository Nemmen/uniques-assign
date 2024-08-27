import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { MyContext } from "../MyContext";
import Search from "../components/Search";
import { useLocation, useNavigate } from "react-router-dom";
import { Select, MenuItem, Button } from "@mui/material";
import Intitue from "../components/Intitue";
import StudentFormModal from "../components/StudentFormModal";

const Students = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { students, studentColumns, openStudent, setOpenStudent } =
    useContext(MyContext);
  const [insti, setInsti] = useState("");
  const [allInsti, setAllInsti] = useState([]);
  const [filteredStudentss, setFilteredStudents] = useState("");
  useEffect(() => {
    setFilteredStudents(students);
  }, [students]);

  useEffect(() => {
    const fetchInstitutions = async () => {
      try {
        const response = await fetch("http://localhost:5000/institute/get");
        const data = await response.json();
        setAllInsti(data.institutes.map((insti) => insti.institution));
      } catch (error) {
        console.log(error);
      }
    };

    fetchInstitutions();
  }, []);

  const universityName = decodeURIComponent(
    location.pathname.split("/")[2] || ""
  );

  const filteredStudents = students.filter(
    (student) => student.university === universityName
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    if (insti) navigate(`/students/${insti}`);
  };

  return (
    <div>
      <Navbar />
      <StudentFormModal
        open={openStudent}
        setOpen={setOpenStudent}
        university={universityName}
      />
      <Hero header="Student" />
      <div className="mt-[-23px] mb-5">
        {location.pathname !== "/students" && (
          <Search
            data={students}
            setFilteredData={setFilteredStudents}
            forr="students"
          />
        )}
      </div>
      {location.pathname === "/students" && (
        <div className="flex justify-center items-center xl:mt-[-20%] md:mt-[-15%] mt-[20%] px-[20px]">
          <div>
            <form
              onSubmit={handleSubmit}
              className="flex justify-center md:flex-nowrap flex-wrap items-center gap-[20px]"
            >
              <Select
                value={insti}
                onChange={(event) => setInsti(event.target.value)}
                sx={{
                  width: { xs: "100%", sm: 400, md: 400, xl: 400 },
                  bgcolor: "white",
                }}
                displayEmpty
                fullWidth
              >
                <MenuItem value="" disabled>
                  Select Institution
                </MenuItem>
                {allInsti.map((insti, index) => (
                  <MenuItem key={index} value={insti}>
                    {insti}
                  </MenuItem>
                ))}
              </Select>
              <Button
                sx={{
                  width: { xs: "100%", sm: 100, md: 100, xl: 100 },
                  height: 50,
                }}
                variant="contained"
                type="submit"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      )}
      {location.pathname !== "/students" && (
        <div className={`text-center w-[100%] `}>
          <Intitue
            rows={filteredStudentss}
            columns={studentColumns}
            setOpen={setOpenStudent}
          />
        </div>
      )}
    </div>
  );
};

export default Students;

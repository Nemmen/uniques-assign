import React, { useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Intitue from "../components/Intitue";
import edu from "../assets/education.jpg";
import Search from "../components/Search";
import InstitutionFormModal from "../components/InstitutionFormModal";
import { MyContext } from "../MyContext";
import { useState } from "react";

const Home = () => {
  const { rows, columns, setOpen, open } = useContext(MyContext);
  const [filteredInstitutes, setFilteredInstitutes] = useState("");
  useEffect(() => {
    setFilteredInstitutes(rows);
  }, [rows]);

  return (
    <div>
      <Navbar />
      <Hero header="Insti" />
      <div className="mt-[-23px] mb-5">
        <Search
          data={rows}
          setFilteredData={setFilteredInstitutes}
          forr="Intitutes"
        />
        <InstitutionFormModal open={open} setOpen={setOpen} />
      </div>
      <div className={`text-center w-[100%] `}>
        <Intitue
          rows={filteredInstitutes}
          columns={columns}
          setOpen={setOpen}
        />
      </div>
    </div>
  );
};

export default Home;

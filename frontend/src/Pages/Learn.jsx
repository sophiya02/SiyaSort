// import { Accordion } from "@mui/material";
import React from "react";
import AccordionComp from "./AccordionComp";
import "./Learn.css";

import { dataStructures, searching, sorting, greedy } from "./TableData.js";

function Learn() {
  return (
    <>
    <div className="accordion">
      <h1 className="heading">Explore the Topics</h1>      
      <AccordionComp name={"Data Structure"} data={dataStructures} />
      <AccordionComp name={"Searching"} data={searching} />
      <AccordionComp name={"Sorting"} data={sorting} />
      <AccordionComp name={"Greedy"} data={greedy} />
      </div>
    </>
  );
}

export default Learn;

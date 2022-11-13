import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
  } from "@mui/material";
  import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper,
  } from "@mui/material";
  import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
  import './AccordionComp.css'
  
  import React from "react";
  
  function AccordionComp(props) {
    const tableData = props.data;
  
    return (
      <>
      <div className="accordionContainer">       
      <Accordion className="accordion">
        <AccordionSummary
          id="dataStructuresHeader"
          aria-controls="dataStructuresContent"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>{props.name}</Typography>{" "}
        </AccordionSummary>
        <AccordionDetails>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Visualiser</TableCell>
                  <TableCell>Blogs</TableCell>
                  <TableCell>Videos</TableCell>
                  <TableCell>Questions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableData.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{row.name}</TableCell>
                    <TableCell><a href={row.visualiser__link}>Visualise the concept</a></TableCell>
                    <TableCell><a href={row.blog__link}>Read an Article</a></TableCell>
                    <TableCell><a href={row.video__link}>Watch a video</a></TableCell>
                    <TableCell><a href={row.questions__link}>Solve problems</a></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>
      </div>
      </>
    );
  }
  
  export default AccordionComp;
  
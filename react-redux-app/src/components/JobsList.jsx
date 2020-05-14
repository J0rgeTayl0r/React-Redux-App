import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getJobs } from "../actions";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const JobsList = () => {

  const dispatch = useDispatch();


  const [searchTerm, setSearchTerm] = useState("");

  
  const searchJobs = (event) => {
    event.preventDefault();
    dispatch(getJobs(searchTerm));
    setSearchTerm("");
  };

  
  useEffect(() => {
    dispatch(getJobs(""));
  }, [dispatch]);

 
  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="searchForm">
      <TextField
        placeholder="Any search term here..."
        variant="outlined"
        type="text"
        value={searchTerm}
        onChange={(event) => handleSearchTermChange(event)}
      />
      <br />
      <Button
        variant="contained"
        color="secondary"
        onClick={(event) => searchJobs(event)}
      >
        Search
      </Button>
    </div>
  );
};



export default JobsList;

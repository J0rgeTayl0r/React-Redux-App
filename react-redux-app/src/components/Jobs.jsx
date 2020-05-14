import React from "react";
import { useSelector } from "react-redux";

import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "30vw",
    height: 300,
    margin: "1% 1%",
    padding: 12,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    lineHeight: 0,
  },
});

const Jobs = () => {
  const classes = useStyles();
  const state = useSelector((state) => state);
  console.log(state);
  const { jobs, error, isFetching } = state;

  const openInNewTab = (e, url) => {
    e.preventDefault();
    var win = window.open(url, "_blank");
    win.focus();
  };
  return (
    <div>
      <div className="jobList">
        {error !== "" ? (
          <p>{error.message}</p>
        ) : isFetching === true ? (
          <p>Loading...</p>
        ) : jobs.length === 0 ? (
          <p>Sorry no jobs found...</p>
        ) : (
          jobs.map((job) => {
            return (
              <Card
                key={job.id}
                className={classes.root}
                variant="outlined"
                style={{ maxHeight: "100%", maxWidth: "100%", margin: "auto" }}
              >
                {
                  <img
                    style={{ maxWidth: "50%", maxHeight: "50%" }}
                    alt={`${job.company} logo`}
                    src={job.company_logo}
                  />
                }
                <h2>{job.company}</h2>
                <p>{job.title}</p>
                <h2>{job.location}</h2>
                <h3>{job.type}</h3>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={(e) => openInNewTab(e, job.url)}
                >
                  Apply
                </Button>
              </Card>
            );
          })
        )}
      </div>
    </div>
  );
};


export default Jobs;

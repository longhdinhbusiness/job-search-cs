import React, { useState } from 'react';
import BasicCard from './BasicCard';
import Grid from '@mui/material/Grid2';
import jobsList from '../jobs.json';
import Pagination from '@mui/material/Pagination';

const DisplayJobs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 5;
  const totalPages = Math.ceil(jobsList.length / jobsPerPage);

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;

  const handleChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Grid justifyContent="center" container spacing={2} marginTop={2}>
        {jobsList.slice(indexOfFirstJob, indexOfLastJob).map((job) => (
          <Grid item xs={12} sm={6} md={3} key={job.id}>
            <BasicCard job={job} />
          </Grid>
        ))}
      </Grid>
      <Pagination
        sx={{ display: 'flex', justifyContent: 'center', margin: 1 }}
        count={totalPages}
        page={currentPage}
        onChange={handleChange}
        color="primary"
      />
    </>
  );
};

export default DisplayJobs;

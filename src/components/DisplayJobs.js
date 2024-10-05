import React, { useState, useEffect } from 'react';
import BasicCard from './BasicCard';
import Grid from '@mui/material/Grid2';
import Pagination from '@mui/material/Pagination';
import axios from 'axios';
import { Box } from '@mui/material';

const jobsListUrl = 'http://localhost:3000/jobs';

const DisplayJobs = ({
  setLoginOpen,
  isLogin,
  setCardOpen,
  setSelectedJob,
  setLoginSource,
  searchQuery,
}) => {
  const [jobsData, setJobsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 5;

  const handleChange = (event, page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const getJobsData = async () => {
      try {
        const response = await axios.get(jobsListUrl);
        setJobsData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };
    getJobsData();
  }, []);

  const searchedJobs = searchQuery
    ? jobsData.filter((job) => {
        return (
          job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.skills
            .join(' ')
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          job.city.toLowerCase().includes(searchQuery.toLowerCase())
        );
      })
    : jobsData;

  const totalPages = Math.ceil(searchedJobs.length / jobsPerPage);
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;

  return (
    <>
      {searchedJobs.length === 0 ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 10,
            color: 'floralwhite',
            fontSize: 24,
          }}
        >
          <div>No Matches Found</div>
        </Box>
      ) : (
        <>
          <Grid justifyContent="center" container spacing={2} marginTop={2}>
            {searchedJobs.slice(indexOfFirstJob, indexOfLastJob).map((job) => (
              <Grid item xs={12} sm={6} md={3} key={job.id}>
                <BasicCard
                  job={job}
                  setLoginOpen={setLoginOpen}
                  isLogin={isLogin}
                  setCardOpen={setCardOpen}
                  setSelectedJob={setSelectedJob}
                  setLoginSource={setLoginSource}
                />
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
      )}
    </>
  );
};

export default DisplayJobs;

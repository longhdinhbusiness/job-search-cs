import React from 'react';
import {
  Button,
  Modal,
  Box,
  Card,
  CardContent,
  Typography,
} from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'fit-content',
  minWidth: '500',
  minHeight: '500',
  bgColor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const CenteredCard = ({ cardOpen, setCardOpen, selectedJob }) => {
  const handleClose = () => setCardOpen(false);

  if (!selectedJob) {
    return null;
  }

  return (
    <div>
      <Modal
        open={cardOpen}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          <Card>
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <Typography variant="h5" component="div">
                Job Title:
              </Typography>
              <Typography variant="h5" component="div">
                {selectedJob.title}
              </Typography>
              <Typography variant="h6">Description:</Typography>
              <Typography
                variant="body2"
                sx={{ fontStyle: 'italic', fontSize: 12 }}
              >
                {selectedJob.description}
              </Typography>
              <Typography variant="h6">Skills:</Typography>
              <Typography variant="body2" sx={{ fontSize: 12 }}>
                {selectedJob.skills.map((skill) => `[${skill}] `)}
              </Typography>
              <Typography variant="h6">City:</Typography>
              <Typography variant="body2">{selectedJob.city}</Typography>
              <Button
                color="inherit"
                variant="contained"
                sx={{ margin: 1 }}
                onClick={handleClose}
              >
                Close
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Modal>
    </div>
  );
};

export default CenteredCard;

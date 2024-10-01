import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BasicCard({ job }) {
  return (
    <Card
      sx={{
        minWidth: 275,
        maxWidth: 250,
        minHeight: 330,
        maxHeight: 330,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: 2,
      }}
      marginBottom={2}
    >
      <CardContent>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
          {job.skills.slice(0, 4).map((skill) => (
            <Typography
              key={skill}
              gutterBottom
              sx={{ color: 'text.secondary', fontSize: 12 }}
            >
              {skill}
            </Typography>
          ))}
        </Box>

        <Box>
          <Typography
            variant="h5"
            component="h2"
            sx={{ fontSize: 20, fontWeight: 'bold' }}
          >
            {job.title}
          </Typography>
        </Box>

        <Box marginBottom={2}>
          <Typography
            sx={{ color: 'text.secondary', fontSize: 12 }}
            component={'p'}
          >
            Remote: {job.remote ? 'YES' : 'No'}
          </Typography>
        </Box>

        <Box>
          <Typography
            variant="body2"
            sx={{ fontStyle: 'italic', fontSize: 14, marginBottom: 1 }}
          >
            {job.description}
          </Typography>
        </Box>

        <Box>
          <Typography variant="body2" sx={{ fontSize: 12 }}>
            Salary: {job.salaryLow} - {job.salaryHigh}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button marginBottom={1} variant="contained" size="small">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

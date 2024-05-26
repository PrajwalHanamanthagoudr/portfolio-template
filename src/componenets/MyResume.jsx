import React from 'react';
import { Box, Grid, Typography, Card, CardContent, Stack, Button } from '@mui/material';

const timelineData = [
  {
    type: 'Education',
    items: [
      {
        date: '2014 - 2016',
        title: 'Oxford University',
        description: 'I use animation as a third dimension by which to simplify experiences and kuiding',
      },
      {
        date: '2010 - 2014',
        title: 'Higher School Graduation',
        description: 'I use animation as a third dimension by which to simplify experiences and kuiding',
      },
    ],
  },
  {
    type: 'Experience',
    items: [
      {
        date: '2017 - Now',
        title: 'Web Designer - Envato',
        description: 'I use animation as a third dimension by which to simplify experiences and kuiding',
      },
      {
        date: '2015 - 2017',
        title: 'Developer - Zhinc Studio',
        description: 'I use animation as a third dimension by which to simplify experiences and kuiding',
      },
    ],
  },
];

const TimelineItem = ({ date, title, description }) => {
    const isHighlightDate = date !== '2010 - 2014' && date !== '2015 - 2017';
    
    return (
      <Box sx={{ pl: 3, mb: 4, position: 'relative', display: 'flex' }}>
        <Stack direction="row" spacing={2}>
          <Box>
            <Button
              variant="outlined"
              size="large"
              sx={{
                fontFamily: 'Poppins, sans-serif',
                color: 'white',
                bgcolor: '#9148dc',
                '@media (max-width: 768px)': {
                    width: '1px'
                },
                width: '200px',
                textTransform: 'capitalize',
                '&:hover': {
                  color: '#9148dc',
                  bgcolor: 'white',
                },
              }}
            >
              {date}
            </Button>
          </Box>
          <Box sx={{ position: 'relative', height: '200px', display: 'flex', alignItems: 'center' }}>
            <Box sx={{
              width: '16px',
              height: '16px',
              bgcolor: isHighlightDate ? '#9148dc' : 'white',
              border: '2px solid gray',
              borderRadius: '50%',
              position: 'absolute',
              top: 0,
              left: '-8px',
            }} />
            <Box sx={{
              width: '1px',
              height: '240px',
              bgcolor: 'gray',
              position: 'absolute',
              top: '16px',
              left: '0px'
            }} />
          </Box>
          <Card
            variant='outlined'
            sx={{
              p: 2,
              boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
              borderRadius: '10px',
              flexGrow: 1,
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }} fontFamily={'Poppins, sans-serif'}>
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary" fontFamily={'Poppins, sans-serif'}>
                {description}
              </Typography>
            </CardContent>
          </Card>
        </Stack>
      </Box>
    );
  };
  

const ResumeSection = () => {
  return (
    <Box sx={{ p: { xs: 2, md: 7 } }}>
      <Typography variant="h6" fontWeight={600} fontFamily={'Poppins, sans-serif'} gutterBottom>
        What my clients think about me
      </Typography>
      <Typography variant="h2" fontWeight={999} fontFamily={'Poppins, sans-serif'} gutterBottom>
        My <span
          style={{
            background: 'linear-gradient(90deg, rgba(145,72,220,1) 0%, rgba(199,73,200,1) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >CV Resume</span>
      </Typography>
      <Grid container spacing={4}>
        {timelineData.map((section) => (
          <Grid item xs={12} md={6} key={section.type}>
            <Typography variant="h4" fontWeight={700} mb={3} fontFamily={'Poppins, sans-serif'}>
              {section.type}
            </Typography>
            <Stack spacing={4}>
              {section.items.map((item, index) => (
                <TimelineItem key={index} date={item.date} title={item.title} description={item.description} />
              ))}
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ResumeSection;

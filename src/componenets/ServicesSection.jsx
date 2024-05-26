import { Box, Button, Card, CardContent, Typography, Grid } from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

const services = [
  {
    category: 'Web Development',
    title: 'Web Design & Logo',
    description: 'I use animation as a third dimension by which to simplify experiences and building thro each and every interaction.',
    variant: 'contained',
    boxShadow: '0px 20px 30px 4px rgba(0, 0, 0, 0.1)',
    bgColor: 'white',
    textColor: 'black',
    hoverColor: '#9148dc'
  },
  {
    category: 'Apps Development',
    title: 'iOS & Android',
    description: 'I use animation as a third dimension by which to simplify experiences and building thro each and every interaction.',
    variant: 'contained',
    boxShadow: '0px 20px 30px 4px #e9e9e9',
    bgColor: 'white',
    textColor: 'black',
    hoverColor: '#9148dc'
  },
  {
    category: 'Game Development',
    title: 'Unity & Unreal Engine',
    description: 'I use animation as a third dimension by which to simplify experiences and building thro each and every interaction.',
    variant: 'outlined',
    boxShadow: 'none',
    bgColor: '#9148dc',
    textColor: 'white',
    hoverColor: '#9148dc'
  }
];

const ServiceCard = ({ service }) => (
  <Card variant={service.variant}
    sx={{
      p: 2,
      boxShadow: service.boxShadow,
      borderRadius: '15px',
      bgcolor: service.bgColor,
    }}
  >
    <CardContent>
      <Typography variant='body1' color={service.textColor} fontWeight={200} fontFamily={'Poppins, sans-serif'}>
        {service.category}
      </Typography>
      <Typography variant="h5" component="div" mt={2} color={service.textColor} fontWeight={600} fontFamily={'Poppins, sans-serif'}>
        {service.title}
      </Typography><br />
      <Typography variant="body2" color={service.textColor} fontFamily={'Poppins, sans-serif'}>
        {service.description}
      </Typography>
    </CardContent>
    <Box ml={1}  >
      <Button variant="text"
        endIcon={<ArrowForwardRoundedIcon />}
        size="large"
        sx={{
          fontFamily: 'Poppins, sans-serif', color: service.textColor, textTransform: 'capitalize', mt: 2,
          '&:hover': {
            color: service.hoverColor,
            bgcolor: service.textColor === 'white' ? 'white' : 'inherit'
          }
        }}
      >See Pricing</Button>
    </Box>
  </Card>
);

const Dot = () => (
  <span
    style={{
      height: '8px',
      width: '8px',
      margin: '0 6px',
      backgroundColor: '#9148dc',
      borderRadius: '50%',
      display: 'inline-block',
      cursor: 'pointer',
    }}
  />
);

const ServicesSection = () => {
  return (
    <Box sx={{ p: { xs: 2, md: 7 } }}>
      <Typography variant="h6" fontWeight={600} fontFamily={'Poppins, sans-serif'} gutterBottom>
        Services | Offer to my clients
      </Typography>
      <Typography variant="h2" fontWeight={999} fontFamily={'Poppins, sans-serif'} gutterBottom >
        My Best <span
          style={{
            background: 'linear-gradient(90deg, rgba(145,72,220,1) 0%, rgba(199,73,200,1) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >Services</span>
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} md={4} key={index}>
            <ServiceCard service={service} />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 8 }}>
        <span
          style={{
            height: '10px',
            width: '10px',
            margin: '0 6px',
            backgroundColor: '#fff',
            borderRadius: '50%',
            border: '1px solid #c4c4c4',
            display: 'inline-block',
            cursor: 'pointer',
          }}
        />
        <Dot />
        <Dot />
        <Dot />

      </Box>;
    </Box>
  );
}

export default ServicesSection;

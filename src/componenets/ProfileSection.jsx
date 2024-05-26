import { Box, Typography, Grid, Button } from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

const ProfileSection = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-around',
        p: 7,
        mt: 8,
        bgcolor: '#f4f3f8'
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: { xs: '60%', md: '25%' },
          height: 0,
          paddingBottom: '30%',
          backgroundColor: '#d9d9d9',
          borderRadius: '5%',

        }}
      >

      </Box>
      <Box
        sx={{
          width: { xs: '100%', md: '60%' },
          p: 2
        }}
      >
        <Typography variant="h6" fontWeight={600} fontFamily={'Poppins, sans-serif'} gutterBottom>
          Services | Offer to my clients
        </Typography>
        <Typography variant="h2" fontWeight={999} fontFamily={'Poppins, sans-serif'} gutterBottom >
          Kayrenn <span
            style={{
              background: 'linear-gradient(90deg, rgba(145,72,220,1) 0%, rgba(199,73,200,1) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >Smetha</span>
        </Typography>
        <Typography variant="body1" fontFamily={'Poppins, sans-serif'} paragraph>
          Hello! I'm Kayreen Smetha. Web Developer with over 8 years of experience. Experienced with all stages of the development cycle for dynamic web projects. Having an in-depth knowledge including advanced HTML5, CSS3, JavaScript, jQuery, Angular JS. Strong background in management and leadership.
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="body2" fontFamily={'Poppins, sans-serif'}><strong>Birthday:</strong> 01-07-1998</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" fontFamily={'Poppins, sans-serif'}><strong>Email:</strong> mail@address.com</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" fontFamily={'Poppins, sans-serif'}><strong>Age:</strong> 24 Years</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" fontFamily={'Poppins, sans-serif'}><strong>Whatsapp:</strong> +77 022 123 456</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" fontFamily={'Poppins, sans-serif'}><strong>Address:</strong> Ave 11, New York</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" fontFamily={'Poppins, sans-serif'}><strong>Freelance:</strong> Available</Typography>
          </Grid>
        </Grid>
        <Button

          endIcon={<ArrowForwardRoundedIcon />}
          variant="outlined"
          size="large"
          sx={{
            fontFamily: 'Poppins, sans-serif', color: 'white', bgcolor: '#9148dc', textTransform: 'capitalize',mt:2,
            '&:hover': {
              color: '#9148dc'
            }
          }}
        >
          My Portfolio
        </Button>
      </Box>
    </Box>
  );
};

export default ProfileSection;

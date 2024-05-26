import { Box, Typography, Grid, Link, IconButton } from '@mui/material';
import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
const Footer = () => {
    return (
        <Box sx={{ bgcolor: '#9148dc', color: 'white',p: { xs: 2, md: 7 }, }}>
            <Grid container spacing={4} justifyContent="center" >
                <Grid item xs={12} md={3}>
                    <Typography variant="h6" sx={{ mb: 2 }} fontWeight={600} fontFamily={'Poppins, sans-serif'}>
                        ABOUT US
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2 }}  fontFamily={'Poppins, sans-serif'}>
                        Lorem ipsum dolor sit amet, consectetur. Nullam ultricies justo sit amet odio facilisis tincidunt.
                    </Typography>
                    <Box>
                        <IconButton sx={{ color: 'white' }} aria-label="facebook">
                            <Facebook />
                        </IconButton>
                        <IconButton sx={{ color: 'white' }} aria-label="instagram">
                            <Instagram />
                        </IconButton>
                        <IconButton sx={{ color: 'white' }} aria-label="twitter">
                            <Twitter />
                        </IconButton>
                        <IconButton sx={{ color: 'white' }} aria-label="youtube">
                            <YouTube />
                        </IconButton>
                    </Box>
                </Grid>
                <Grid item xs={12} md={2}>
                    <Typography variant="h6" sx={{ mb: 2 }} fontWeight={600} fontFamily={'Poppins, sans-serif'}>
                        PROGRAMS
                    </Typography>
                    <Typography variant="body2">
                        <Link href="#" color="inherit" underline="none" display="block" mb={1}  fontFamily={'Poppins, sans-serif'}>
                           + Buy A Property
                        </Link>
                        <Link href="#" color="inherit" underline="none" display="block" mb={1}  fontFamily={'Poppins, sans-serif'}>
                           + Calculate your Property
                        </Link>
                        <Link href="#" color="inherit" underline="none" display="block" mb={1}  fontFamily={'Poppins, sans-serif'}>
                           + Rent a Property
                        </Link>
                        <Link href="#" color="inherit" underline="none" display="block" fontFamily={'Poppins, sans-serif'}>
                           + Our Terms and Conditions
                        </Link>
                    </Typography>
                </Grid>
                <Grid item xs={12} md={2}>
                    <Typography variant="h6" sx={{ mb: 2 }} fontWeight={600} fontFamily={'Poppins, sans-serif'}>
                        SUPPORT
                    </Typography>
                    <Typography variant="body2">
                        <Link href="#" color="inherit" underline="none" display="block" mb={1}  fontFamily={'Poppins, sans-serif'}>
                            About us
                        </Link>
                        <Link href="#" color="inherit" underline="none" display="block" mb={1} fontFamily={'Poppins, sans-serif'}>
                            Terms & Conditions
                        </Link>
                        <Link href="#" color="inherit" underline="none" display="block" mb={1} fontFamily={'Poppins, sans-serif'}>
                            Forums
                        </Link>
                        <Link href="#" color="inherit" underline="none" display="block" fontFamily={'Poppins, sans-serif'}>
                            Become a Teacher
                        </Link>
                    </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography variant="h6" sx={{ mb: 2 }} fontWeight={600} fontFamily={'Poppins, sans-serif'}>
                        CONTACT US
                    </Typography>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'start'}>
                    <LocationOnRoundedIcon /> 
                    <Typography variant="body2" sx={{ ml: 2 }} fontFamily={'Poppins, sans-serif'}>
                      301 Surryberry Street, Entatoniply 20200
                    </Typography>
                    </Box>
                   
                    <Typography variant="body2" sx={{ ml: 5 }} fontFamily={'Poppins, sans-serif'}>
                        Sri Lanka
                    </Typography>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'start'}>
                    <LocalPhoneRoundedIcon /> 
                    <Typography variant="body2" sx={{ ml: 2 }} fontFamily={'Poppins, sans-serif'}>
                    +94 123 4567
                    </Typography>
                    </Box>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'start'}>
                    <EmailRoundedIcon /> 
                    <Typography variant="body2" sx={{ ml: 2 }} fontFamily={'Poppins, sans-serif'}>
                    support@example.com
                    </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;

import { Grid, Box, Typography, Button, Stack } from '@mui/material';
import { GitHub, Twitter, LinkedIn, Facebook } from '@mui/icons-material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import Figma from '../assets/figma.png';

const Hero = () => {

    const links = [
        { id: 1, icon: <Facebook />, color: "#3b5998" },
        { id: 2, icon: <Twitter />, color: "#1DA1F2" },
        { id: 3, icon: <LinkedIn />, color: "#0077B5" }
    ];

    const skills = [
        { id: 1, icon: <GitHub />, color: "#181717" },
        { id: 2, icon: <img src={Figma} alt="Figma" style={{ width: 20, height: 24 }} />, color: "#F24E1E" },
    ];

    return (
        <>
            <Grid container spacing={4} alignItems="center" mt={6}>
                <Grid item xs={12} md={4.6} sx={{ m: { xs: 2, md: 8 } }}>
                    <Typography variant="h5" color={'#302e2b'} fontWeight={900} fontFamily={'Poppins, sans-serif'} gutterBottom>
                        Hi, I'm Kayreen Smeshko
                    </Typography>
                    <Typography variant="h2" component="h2" color="#18191b" gutterBottom fontWeight={999} fontFamily={'Poppins, sans-serif'}>
                        I'm <span style={{
                            background: 'linear-gradient(90deg, rgba(145,72,220,1) 0%, rgba(199,73,200,1) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>Proffesional</span> Expert Developer.
                    </Typography>
                    <Typography variant="body1" paragraph fontFamily={'Poppins, sans-serif'} color={'#949494'}>
                        I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more &amp; more interactive with web animations.
                    </Typography>
                    <Stack direction={'row'} spacing={2}>
                        <Button

                            endIcon={<ArrowForwardRoundedIcon />}
                            variant="outlined"
                            size="large"
                            sx={{
                                fontFamily: 'Poppins, sans-serif', color: 'white', bgcolor: '#9148dc', textTransform: 'capitalize',
                                '&:hover': {
                                    color: '#9148dc'
                                }
                            }}
                        >
                            My Portfolio
                        </Button>
                        <Button
                            variant="outlined"
                            size="large"
                            sx={{
                                fontFamily: 'Poppins, sans-serif', color: '#7e7d7b', bgcolor: '#fff', textTransform: 'capitalize', border: '1px solid gray'
                            }}
                        >
                            Download CV
                        </Button>
                    </Stack>
                    <Stack mt={4} direction={'row'} spacing={8} >
                        <Box>
                            <Typography variant="h6" gutterBottom color={'#5b5c5f'} fontFamily={'Poppins, sans-serif'}>
                                Find With Me
                            </Typography>
                            {links.map((link) => (
                                <Button
                                    size='small'
                                    key={link.id}
                                    sx={{ color: link.color, mr: 1, bgcolor: '#f5eff3' }}
                                >
                                    {link.icon}
                                </Button>
                            ))}
                        </Box>
                        <Box>
                            <Typography variant="h6" gutterBottom color={'#5b5c5f'} fontFamily={'Poppins, sans-serif'}>
                                Best Skill On
                            </Typography>
                            {skills.map((skill) => (
                                <Button
                                    size='small'
                                    key={skill.id}
                                    sx={{ color: skill.color, mr: 1, bgcolor: '#f5eff3' }}
                                >
                                    {skill.icon}
                                </Button>
                            ))}
                        </Box>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            position: 'relative',
                            width: '80%', // Adjust width as needed for responsiveness
                            height: 0,
                            paddingBottom: '80%', // Reduced size of the main circle
                            backgroundColor: '#d9d9d9',
                            borderRadius: '50%',
                            margin: '0 auto', // Center the main circle horizontally
                            '&::after': {
                                content: '""', // Empty quotes for the content property
                                width: '100%',
                                height: '100%',
                                bgcolor:'#fff',
                                border:'2px  solid #9148dc',
                                borderRadius:'50%',
                                top: '-16.2px',
                                left: '5px',
                                zIndex: '-1',
                                position: 'absolute' // You need to add the position property for ::after
                              }
                        }}
                    >
                        {/* Second Circle */}
                        <Box
                            sx={{
                                position: 'absolute',
                                width: '25%', // Adjust the size as needed
                                height: '25%',
                                backgroundColor: '#9148dc', // Adjust color as needed
                                borderRadius: '50%',
                                bottom: '-1%', // Positioning the smaller circle half inside and half outside
                                left: '-3%',   // Adjust these values to fine-tune the position
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: 'white',
                                fontFamily: 'Poppins, sans-serif',
                                fontWeight: 600,
                                textAlign: 'center',
                                padding: '10px',
                            }}
                        >
                            <Typography variant="h6" gutterBottom fontFamily={'Poppins, sans-serif'} sx={{
                                '@media (max-width: 768px)': {
                                    fontSize: '15px', // Adjusted font size for smaller screens
                                },
                            }}>
                                Expert Developer
                            </Typography>
                        </Box>

                        {/* Another Card Design */}
                        <Box
                            sx={{
                                position: 'absolute',
                                top: '40%', // Adjust position as needed
                                left: '0%', // Adjust position as needed
                                transform: 'translate(-50%, -50%)', // Center horizontally
                                width: '150px', // Adjust width as needed
                                height: '50px', // Adjust height as needed
                                backgroundColor: '#ffffff', // Adjust color as needed
                                borderRadius: '10px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: 'white',
                                fontFamily: 'Poppins, sans-serif',
                                fontWeight: 600,
                                textAlign: 'center',
                                padding: '10px',
                                boxShadow: '0px 22px 22px rgba(0, 0, 0, 0.1)', // Added shadow
                            }}
                        >
                            <Typography variant="h6" color={'#9148dc'} gutterBottom fontFamily={'Poppins, sans-serif'} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                <Typography variant='h5' fontWeight={999}>12+</Typography>
                                <span style={{fontSize:'15px'}}>
                                    Year Of Experience
                                </span>
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                position: 'absolute',
                                top: '65%', // Adjust position as needed
                                left: '95%', // Adjust position as needed
                                transform: 'translate(-50%, -50%)', // Center horizontally
                                width: '150px', // Adjust width as needed
                                height: '50px', // Adjust height as needed
                                backgroundColor: '#ffffff', // Adjust color as needed
                                borderRadius: '10px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: 'white',
                                fontFamily: 'Poppins, sans-serif',
                                fontWeight: 600,
                                textAlign: 'center',
                                padding: '10px',
                                boxShadow: '0px 22px 22px rgba(0, 0, 0, 0.1)', // Added shadow
                            }}
                        >
                            <Typography variant="h6" color={'#9148dc'} gutterBottom fontFamily={'Poppins, sans-serif'} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                <Typography variant='h5' fontWeight={999}>330</Typography>
                                <span style={{fontSize:'15px'}}>
                                    Completed Project
                                </span>
                            </Typography>
                        </Box>
                    </Box>

                </Grid>

            </Grid>
        </>
    );
}

export default Hero;

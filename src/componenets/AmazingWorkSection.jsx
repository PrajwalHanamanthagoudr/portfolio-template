import { Box, Button, Card, CardContent, Typography, Grid, CardActionArea, Stack } from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';


const AmazingWorkSection = () => {
    return (
        <Box sx={{ p: { xs: 2, md: 7 }, bgcolor: '#f4f3f8' }}>
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
            <Grid container spacing={5} justifyContent="center">

                <Grid item xs={12} md={4}>
                    <Card
                        sx={{
                            p: 3,
                            boxShadow: '0px 20px 30px 4px rgba(0, 0, 0, 0.1)',
                            borderRadius: '15px',
                        }}
                    >
                        <CardActionArea >
                            <Box width={'100%'} height={200} bgcolor={'#d9d9d9'} sx={{ borderRadius: '20px' }}>

                            </Box>
                            <CardContent>
                                <Typography variant="h5" component="div" mt={2} fontWeight={600} fontFamily={'Poppins, sans-serif'}>
                                    The Service Provide For The Design Project
                                </Typography><br />
                                <Typography variant="body2" fontFamily={'Poppins, sans-serif'}>
                                    I use animation as a third dimension by which to simplify experiences and guiding.
                                </Typography>
                            </CardContent>
                            <Box ml={1}  >
                                <Button variant="text"
                                    endIcon={<ArrowForwardRoundedIcon />}
                                    size="large"
                                    sx={{
                                        fontFamily: 'Poppins, sans-serif', textTransform: 'capitalize', mt: 2, color: 'black',
                                        '&:hover': {
                                            color: "#9148dc",
                                        }
                                    }}
                                >Learn More</Button>
                            </Box>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction={'column'} spacing={5}>
                        <Card
                            sx={{
                                p: 2,
                                boxShadow: '0px 20px 30px 4px rgba(0, 0, 0, 0.1)',
                                borderRadius: '15px',
                            }}
                        >
                            <CardContent>
                                <Typography variant="h5" component="div" fontWeight={600} fontFamily={'Poppins, sans-serif'}>
                                    Mobile App Landing
                                </Typography><br />
                                <Typography variant="body2" fontFamily={'Poppins, sans-serif'}>
                                    I use animation as a third dimension by which to simplify experiences and kuiding
                                </Typography>
                            </CardContent>
                            <Box ml={1}  >
                                <Button variant="text"
                                    endIcon={<ArrowForwardRoundedIcon />}
                                    size="large"
                                    sx={{
                                        fontFamily: 'Poppins, sans-serif', color: "black", textTransform: 'capitalize', mt: 2,
                                        '&:hover': {
                                            color: '#9148dc',
                                        }
                                    }}
                                >Button</Button>
                            </Box>
                        </Card>
                        <Card
                            sx={{
                                p: 2,
                                boxShadow: '0px 20px 30px 4px rgba(0, 0, 0, 0.1)',
                                borderRadius: '15px',
                            }}
                        >
                            <CardContent>
                                <Typography variant="h5" component="div" fontWeight={600} fontFamily={'Poppins, sans-serif'}>
                                    Gym website
                                </Typography><br />
                                <Typography variant="body2" fontFamily={'Poppins, sans-serif'}>
                                    I use animation as a third dimension by which to simplify experiences and kuiding
                                </Typography>
                            </CardContent>
                            <Box ml={1}  >
                                <Button variant="text"
                                    endIcon={<ArrowForwardRoundedIcon />}
                                    size="large"
                                    sx={{
                                        fontFamily: 'Poppins, sans-serif', color: "black", textTransform: 'capitalize', mt: 2,
                                        '&:hover': {
                                            color: '#9148dc',
                                        }
                                    }}
                                >Button</Button>
                            </Box>
                        </Card>
                    </Stack>

                </Grid>
                <Grid item xs={12} md={4}>
                    <Box width={'100%'} height={'100%'} bgcolor={'#d9d9d9'} sx={{ borderRadius: '20px' }}>

                    </Box>
                </Grid>

            </Grid>

        </Box>
    );
}

export default AmazingWorkSection;

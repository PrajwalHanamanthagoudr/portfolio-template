import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button, Avatar, Stack, Pagination } from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

const testimonials = [
    {
        name: 'Emma Watson',
        description: 'I use animation as a third dimension by which to simplify experiences and kuiding.',
    },
    {
        name: 'Claire Madisson',
        description: 'I use animation as a third dimension by which to simplify experiences and kuiding.',
    },
];

const TestimonialCard = ({ name, description }) => (
    <Card
        sx={{
            p: 2,
            boxShadow: '0px 20px 30px 4px #e9e9e9',
            borderRadius: '15px',
            mt: 2,
            mx: 'auto',
        }}
    >
        <CardContent>
            <Stack direction="row" spacing={2} >
                <Box flex={1}>
                    <Typography variant="h6" fontWeight={600} fontFamily={'Poppins, sans-serif'}>
                        {name}
                    </Typography>
                    <Typography variant="body2" fontFamily={'Poppins, sans-serif'} mt={1}>
                        {description}
                    </Typography>
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
                <Avatar sx={{ bgcolor: '#d9d9d9', width: { xs: 96, sm: 150 }, height: { xs: 96, sm: 150 } }}>
                    <Typography>

                    </Typography>
                </Avatar>
            </Stack>
        </CardContent>
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

const WhatMyClientsSays = () => {
    return (
        <Box sx={{ p: { xs: 2, md: 7 } }}>
            <Typography variant="h6" fontWeight={600} fontFamily={'Poppins, sans-serif'} gutterBottom>
                What my clients think about me
            </Typography>
            <Typography variant="h2" fontWeight={900} fontFamily={'Poppins, sans-serif'} gutterBottom>
                What My{' '}
                <span
                    style={{
                        background: 'linear-gradient(90deg, rgba(145,72,220,1) 0%, rgba(199,73,200,1) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    Clients Says
                </span>
            </Typography>
            <Grid container spacing={4} justifyContent="space-evenly">
                {testimonials.map((testimonial, index) => (
                    <Grid item key={index} xs={12} sm={6} md={6}>
                        <TestimonialCard name={testimonial.name} description={testimonial.description} />
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
};

export default WhatMyClientsSays;

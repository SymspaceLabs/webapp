import React from 'react';
import { Box, Container, Grid, Typography, Button, Card, CardContent, CardActions } from '@mui/material';

const pricingPlans = [
  {
    title: 'Basic',
    price: '$10',
    description: 'Essential features for personal use.',
    featureTitle: `What you'll get:`,
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4' ],
  },
  {
    title: 'Standard',
    price: '$20',
    description: 'All basic features plus more.',
    featureTitle: `All free features, plus:`,
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4' ],
  },
  {
    title: 'Premium',
    price: '$30',
    description: 'Advanced features for professionals.',
    featureTitle: `All free features, plus:`,
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4' ],
  },
  {
    title: 'Enterprise',
    price: 'Contact Us',
    description: 'Custom solutions for large businesses.',
    featureTitle: `All free features, plus:`,
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4' ],
  },
];

export default function Section9() {
  return (
    <Grid sx={{background:'#212021'}}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography sx={{color:'#fff'}}  variant="h4" component="h2" gutterBottom>
            Our Pricing Plans
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {pricingPlans.map((plan, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card  sx={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '20px 46px', gap: '5px', background: 'rgba(188, 188, 188, 0.1)', borderRadius: '59px', }}>
                  <CardContent>
                    <Typography sx={{color:'#fff'}}  variant="h6" component="h3" gutterBottom>
                      {plan.title}
                    </Typography>
                    <Typography sx={{color:'#fff'}}  variant="h4" component="p" gutterBottom>
                      {plan.price}
                    </Typography>
                    <Typography sx={{color:'#fff'}}  variant="body2" color="textSecondary" paragraph>
                      {plan.description}
                    </Typography>
                    <Button sx={{ background:'#2563EB' }} variant="contained" color="primary" fullWidth>
                      Get started
                    </Button>
                    <Box>
                      <Typography sx={{color:'#fff'}}  variant="body2" color="textSecondary" >
                        {plan.featureTitle}
                      </Typography>
                      {plan.features.map((feature, idx) => (
                        <Typography sx={{color:'#fff'}}  variant="body2" color="textSecondary" key={idx}>
                          {feature}
                        </Typography>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Grid>
  );
}

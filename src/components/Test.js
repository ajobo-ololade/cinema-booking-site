import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material'; 
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

export default function Test() {
  return (
    <>


  {/* const { post } = props; */}

    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url("https://media.istockphoto.com/photos/need-to-think-portrait-of-thoughtful-brunette-man-holding-his-chin-picture-id1198137101?b=1&k=20&m=1198137101&s=170667a&w=0&h=tRz1o6FrHpmMcD9nkzdIOf7B9mGibLI5JGyhitScCWE=")`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src="https://media.istockphoto.com/photos/need-to-think-portrait-of-thoughtful-brunette-man-holding-his-chin-picture-id1198137101?b=1&k=20&m=1198137101&s=170667a&w=0&h=tRz1o6FrHpmMcD9nkzdIOf7B9mGibLI5JGyhitScCWE=" />}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {/* {post.title} */}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {/* {post.description} */}
            </Typography>
            <Link variant="subtitle1" href="#">
              {/* {post.linkText} */}
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
 

{/* MainFeaturedPost.propTypes = {
  post: PropTypes.shape({
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageText: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
}; */}

    </>
  );
}

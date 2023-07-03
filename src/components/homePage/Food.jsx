import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { componentTitle } from '../../helper/style'
import { products } from '../../products/ceramics'
import { useNavigate } from 'react-router-dom';

const titleStyle = {
  fontStyle: "bold",
  fontWeight: "400",
  fontSize: "20px",
  color: '#2A254B',
  fontFamily: 'montserrat',
  
};

const Ceramics = () => {
    const navigator = useNavigate();
  return (
    <Container 
    fixed sx={{ pt: 8, pb: 6 }}>
        
      <Typography sx={componentTitle}>Любимые блюда наших гостей</Typography>

        <Grid container spacing={3} sx={{ mt: 3 }}> 
          {products.map((el, i) => {
            return (
              <Grid 
              item 
              lg={3} 
              md={4} 
              sm={6} 
              xs={12} 
              key={i} 
              onClick={() => navigator(`/product/${el.id}`)}>
                <Stack spacing={1}>
                  <Box sx={{width: '320px', height: '200px'}}>
                    <img src={el.img} alt='soup' />
                  </Box>
                  <Typography sx={titleStyle}>{el.name}</Typography>
                  <Typography sx={titleStyle}>{el.price}</Typography>
                </Stack>
              </Grid>
            );
          })}
      </Grid>

      <Stack justifyContent={"center"} alignItems={"center"} sx={{ mt: 5 }}>
        <Button variant='contained' onClick={() => navigator('/allproduct')}>Показать все блюда</Button>
      </Stack>
  </Container>
  );
};

export default Ceramics;

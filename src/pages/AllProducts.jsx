import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'


const AllProducts = () => {
  return (
    <Stack justifyContent={'center'} alignItems={'center'}>
      <Typography variant='h4'>Мы приготовим для вас:</Typography>
      <Stack>
        <Grid container sx={{ pt: 4 }} spacing={8}>
          <Grid item>
            <Box sx={{width: '200px', height: '200px'}}>
              <img src='./public/images/chicken.png' />
            </Box>
            <Typography variant='h6'>Куриное сотэ</Typography>
            <Typography variant='h6'>30 аманат</Typography>
          </Grid>
          <Grid item>
            <Box sx={{width: '200px', height: '200px'}}>
            <img src='./public/images/steyk.png' />
            </Box>
            <Typography variant='h6'>Стейк Нью Йорк</Typography>
            <Typography variant='h6'>70 манат</Typography>
          </Grid>
          <Grid item>
            <Box sx={{width: '200px', height: '200px'}}>
            <img src='./public/images/kakmach.png' /> 
            </Box>
            <Typography variant='h6'>Какмач с гарниром</Typography>
            <Typography variant='h6'>40 манат</Typography>
          </Grid>
          <Grid item>
            <Box sx={{width: '200px', height: '200px'}}>
            <img src='./public/images/merjimek.png' /> 
            </Box>
            <Typography variant='h6'>Мерджимек</Typography>
            <Typography variant='h6'>30 манат</Typography>
          </Grid>
          <Grid item>
            <Box sx={{width: '200px', height: '200px'}}>
              <img src='./public/images/pizola.png' />  
            </Box>
            <Typography variant='h6'>Пизола</Typography>
            <Typography variant='h6'>40 манат</Typography>
          </Grid>
          <Grid item>
            <Box sx={{width: '200px', height: '200px'}}>
              <img src='./public/images/lahmajun.png' />  
            </Box>
            <Typography variant='h6'>Лахмаджун</Typography>
            <Typography variant='h6'>25 манат</Typography>
          </Grid>
          <Grid item>
          <Box sx={{width: '200px', height: '200px'}}>
              <img src='./public/images/kotleta.png' />  
            </Box>
            <Typography variant='h6'>Котлета с рисом</Typography>
            <Typography variant='h6'>35 манат</Typography>
          </Grid>
          <Grid item>
          <Box sx={{width: '200px', height: '200px'}}>
              <img src='./public/images/salat.png' />  
            </Box>
            <Typography variant='h6'>Салат Нежность</Typography>
            <Typography variant='h6'>35 манат</Typography>
          </Grid>
          <Grid item>
          <Box sx={{width: '200px', height: '200px'}}>
              <img src='./public/images/kebab.png' />  
            </Box>
            <Typography variant='h6'>Бейти Кебаб</Typography>
            <Typography variant='h6'>40 манат</Typography>
          </Grid>
          <Grid item>
          <Box sx={{width: '200px', height: '200px'}}>
              <img src='./public/images/fri_potata.png' />  
            </Box>
            <Typography variant='h6'>Картофель фри</Typography>
            <Typography variant='h6'>20 манат</Typography>
          </Grid>
          <Grid item>
          <Box sx={{width: '200px', height: '200px'}}>
              <img src='./public/images/okroshka.png' />  
            </Box>
            <Typography variant='h6'>Окрошка</Typography>
            <Typography variant='h6'>15 манат</Typography>
          </Grid>
          <Grid item>
            <Box sx={{width: '200px', height: '200px'}}>
            <img src='./public/images/steyk.png' />
            </Box>
            <Typography variant='h6'>Стейк Рибаса</Typography>
            <Typography variant='h6'>70 манат</Typography>
          </Grid>
          <Grid item>
          <Box sx={{width: '200px', height: '200px'}}>
              <img src='./public/images/tepenyaki.png' />  
            </Box>
            <Typography variant='h6'>Тепеняки</Typography>
            <Typography variant='h6'>40 манат</Typography>
          </Grid>
          <Grid item>
            <Box sx={{width: '200px', height: '200px'}}>
            <img src='./public/images/doner_lawash.png' />
            </Box>
            <Typography variant='h6'>Донер с лавашом</Typography>
            <Typography variant='h6'>25 манат</Typography>
          </Grid>
          <Grid item>
            <Box sx={{width: '200px', height: '200px'}}>
            <img src='./public/images/pelmeni.png' />
            </Box>
            <Typography variant='h6'>Пельмени</Typography>
            <Typography variant='h6'>40 манат</Typography>
          </Grid>
          <Grid item>
          <Box sx={{width: '200px', height: '200px'}}>
            <img src='./public/images/fri_chicken.png' />
            </Box>
            <Typography variant='h6'>Фри с крылашками</Typography>
            <Typography variant='h6'>35 манат</Typography>
          </Grid>
          <Grid item>
          <Box sx={{width: '200px', height: '200px'}}>
            <img src='./public/images/tefteli_soup.png' />
            </Box>
            <Typography variant='h6'>Тефтели</Typography>
            <Typography variant='h6'>30 манат</Typography>
          </Grid>
          <Grid item>
          <Box sx={{width: '200px', height: '200px'}}>
            <img src='./public/images/manty.png' />
            </Box>
            <Typography variant='h6'>Манты</Typography>
            <Typography variant='h6'>35 манат</Typography>
          </Grid>
          <Grid item>
          <Box sx={{width: '200px', height: '200px'}}>
            <img src='./public/images/sote.png' />
            </Box>
            <Typography variant='h6'>Сотэ</Typography>
            <Typography variant='h6'>30 манат</Typography>
          </Grid>
          <Grid item>
          <Box sx={{width: '200px', height: '200px'}}>
            <img src='./public/images/tepenyaki.png' />
            </Box>
            <Typography variant='h6'>Тепеняки</Typography>
            <Typography variant='h6'>40 манат</Typography>
          </Grid>
          <Grid item>
          <Box sx={{width: '200px', height: '200px'}}>
            <img src='./public/images/pide.png' />
            </Box>
            <Typography variant='h6'>Пидэ</Typography>
            <Typography variant='h6'>30 манат</Typography>
          </Grid>
          <Grid item>
          <Box sx={{width: '200px', height: '200px'}}>
            <img src='./public/images/kotleta.png' />
            </Box>
            <Typography variant='h6'>Котлета с гарниром</Typography>
            <Typography variant='h6'>35 манат</Typography>
          </Grid>
          <Grid item>
          <Box sx={{width: '200px', height: '200px'}}>
            <img src='./public/images/fri_potata.png' />
            </Box>
            <Typography variant='h6'>Фри с соусом</Typography>
            <Typography variant='h6'>25 манат</Typography>
          </Grid>
          <Grid item>
          <Box sx={{width: '200px', height: '200px'}}>
            <img src='./public/images/kotleta.png' />
            </Box>
            <Typography variant='h6'>Котлета куриная</Typography>
            <Typography variant='h6'>35 манат</Typography>
          </Grid>
          
        </Grid>
      </Stack>
    </Stack>
   
  );
};

export default AllProducts;

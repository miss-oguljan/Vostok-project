import React, { useState } from 'react'
import { products } from '../products/ceramics'
import { useParams } from 'react-router-dom';
import { Box, Button, Stack, Typography, useMediaQuery } from '@mui/material';
import { theme } from '../helper/theme';


const title = {
    fontSize: '32px',
    fontFamily: 'Montserrat',
    color: theme.palette.primary.dark
}



const ProductItself = () => {
    const { id } = useParams();

    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    function getDetail() {
        return products.find(el => el.id == id);
    }

    const [count, setCount] = useState(1);

    function decrease() {
        if (count > 0) {
            setCount(count - 1);
        }
    }

  return (
   <Stack direction={isMobile ? 'column' : 'row'} 
   sx={{height: isMobile ? null : '100vh' }}>

        <Box sx={{width: isMobile ? '100%': '50%', 
        bgcolor: getDetail().bg, 
        height: isMobile ? '500px' : '100%' }}></Box>
        <Box sx={{width: isMobile ? '100%': '50%', pl: 7}}>
            <Stack spacing={1} sx={{ mb: 5 }}>
                <Typography sx={title}>{getDetail().name}</Typography>
                <Typography sx={title}>{getDetail().price}</Typography>
            </Stack>

            <Stack spacing={1} sx={{ mb: 7 }}>
                <Typography sx={title}>{getDetail().desc}</Typography>
                                
            </Stack>

            <Stack direction={'row'} justifyContent={'flex-start'} alignItems={'center'} spacing={2} sx={{ mt: 5 }}>
                <Typography variant='h4' sx={title}>Количество: </Typography>
                <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} spacing={5}>
                    <Button onClick={() => decrease()}>-</Button>
                    <Typography sx={title}>{count}</Typography>
                    <Button onClick={() => setCount( count + 1)}>+</Button>
                    <Button variant='contained'>Добавить в корзину</Button>
                </Stack>
            </Stack>

        </Box>
   </Stack>
  );
};

export default ProductItself;

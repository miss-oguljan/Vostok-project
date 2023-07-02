import { Box, Button, Container, Stack, Typography } from '@mui/material'
import React from 'react'

const ProductSelect = () => {
  return (
    <Container className='section-cart' sx={{ m: 8 }}>
        <Stack className='section-cart-header'>
            <Box className='container'>
                <Typography variant='h1'>Корзина заказа</Typography>
            </Box>
        </Stack>
        <Stack className='section-cart-body'>
            <Stack className='container'>

                <Stack className='cart'>
                    <Stack className='cart-header'>
                        <Box className='cart-header-title'>Наименование</Box>
                        <Box className='cart-header-count'>Количество</Box>
                        <Box className='cart-header-cost'>Стоимость</Box>
                    </Stack>
                    <Stack className='product'>
                        <Box className='product_img'></Box>
                        <Box className='product_title'>Pizza Italian</Box>
                        <Stack className='product_count'>
                            <Box className='count'>
                                <Box className='count_box'>
                                    <input type='number' className='count_input' min={'1'} max={'100'} value={'1'} />
                                </Box>
                                <Box className='count_controls'>
                                    <Button className='count_up'>
                                        <img src='' alt='Increase' />
                                    </Button>
                                    <Button className='count_down'>
                                        <img src='' alt='Decrease' />
                                    </Button>
                                </Box>
                            </Box>
                        </Stack>
                        <Box className='product_price'>16 manat</Box>
                        <Box className='product_controls'>
                            <Button>
                                <img src='' alt='Delete'/>
                            </Button>

                        </Box>
                    </Stack>
                    <Stack className='cart-footer'>
                        <Box className='cart-footer_count'>3 ед.</Box>
                        <Box className='cart-footer_price'>48 manat</Box>
                    </Stack>

                </Stack>
            </Stack>
        </Stack>
        

    </Container>
  );
}

export default ProductSelect;

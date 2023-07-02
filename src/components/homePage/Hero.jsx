import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { theme } from '../../helper/theme'

const titleStyle = {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "28px",
    lineHeight: "140%",
    color: theme.palette.primary.contrastText,
    width: "480px",
    fontFamily: 'montserrat',
};


const Hero = () => {
  return (
    <Stack sx={{ pt: 1, pb: 3 }} fixed>
        <Stack sx={{ height: "763px" }} direction={'row'} >
            <Stack sx={{ width: "65%", height: "100%" }}>
               <img src='./public/images/interyer.jpg'/>
            </Stack>
            <Box sx={{ width: "35%", height: "100%", background: theme.palette.primary.light, }}>
            <Stack justifyContent={'space-between'} sx={{height: "100%", p: 7}}>
                    <Stack alignItems={"flex-start"} spacing={4}>
                        <Typography sx={titleStyle}>
                        Хотите отдохнуть в уютной обстановке и получить удовольствие от восточной кухни и музыки?
                        </Typography>
                        <Typography sx={titleStyle}>
                        Тогда мы ждем Вас.
                        </Typography>
                        <Typography sx={titleStyle}>
                        У нас большой ассортимент блюд, прекрасное обслуживание и доступные цены.
                        </Typography>
                        <Typography sx={titleStyle}>
                        Желаете провести трапезу в домашней обстановке? 
                        </Typography>
                        <Typography sx={titleStyle}>
                        Мы организуем доставку.
                        </Typography>
                   </Stack>
                  
                </Stack>
            </Box>
        </Stack>
    </Stack>

  )
}

export default Hero

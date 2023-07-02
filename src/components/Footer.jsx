import { Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { componentTitle } from '../helper/style'
import { theme } from '../helper/theme'

const titleStyle = {
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "23px",
  lineHeight: "140%",
  color: theme.palette.primary.contrastText,
  fontFamily: 'montserrat',
};

const Footer = () => {
  return (
    <Stack fixed sx={{ mt: "30px", padding: "30px", background: theme.palette.primary.light }}>
    <Stack direction={'row'} alignItems={'center'} spacing={2}>
    <img src="./public/images/logo1.png" />
    <Typography sx={titleStyle}>ВКУС ВОСТОКА</Typography>
    </Stack>
      
        <Stack sx={{ padding: "10px" }} spacing={2}>
          <Grid container direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}>
              <Grid item>
                <Typography sx={titleStyle}>Наши кафе и рестораны</Typography>
                <Typography sx={titleStyle}>Вакансии</Typography>
                <Typography sx={titleStyle}>vkusvostoka@gmail.com</Typography>
              </Grid>
              <Grid item>
                <Typography sx={titleStyle}>Телефоны:</Typography>
                <Typography sx={titleStyle}>+99361 71 71 71</Typography>
                <Typography sx={titleStyle}>+99362 71 71 71</Typography>
              </Grid>
              <Grid item>
                <Typography sx={titleStyle}>Мы работаем:</Typography>
                <Typography sx={titleStyle}>Без выходных</Typography>
                <Typography sx={titleStyle}>с 10.00 до 21.00 часов</Typography>
              </Grid>
          </Grid>
        </Stack>
    </Stack>
  );
};

export default Footer;

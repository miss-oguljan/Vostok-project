import { Button, Stack } from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"center"}
      sx={{ p: 2 }}
      spacing={2}
    >
      <Button variant='contained'>Главная</Button>
      <Button variant='contained'>Наши заведения</Button>
      <Button variant='contained'>Оплата и доставка</Button>
      <Button variant='contained'>Контакты</Button>
      <Button variant='contained'>Отзывы</Button>
    </Stack>
  );
};

export default Navbar;

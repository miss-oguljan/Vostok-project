import { Paper, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Navbar from "./header/Navbar";
import { useNavigate } from "react-router-dom";
import { theme } from "../helper/theme";

const titleStyle = {
  fontStyle: "bold",
  fontWeight: "400,",
  fontSize: "35px",
  lineHeight: "45px",
  color: '#2A254B',
  fontFamily: 'montserrat',
  cursor: 'pointer'
};

const Header = () => {

  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const navigator = useNavigate();
  return (
    <Stack style={{ padding: "20px 0" }}>
      <Paper sx={{ padding: "20px" }}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <SearchTwoToneIcon />
          <Stack direction={'row'} alignItems={'center'} spacing={2}>
              <img src="./public/images/logo1.png" />
              <Typography sx={titleStyle} onClick={() => navigator("/")}>
              ВКУС ВОСТОКА
              </Typography>
          </Stack>
          

          <Stack direction={"row"} spacing={2}>
            <ShoppingCartOutlinedIcon />
            <AccountCircleOutlinedIcon />
          </Stack>
        </Stack>
      </Paper>

      {isMobile ? null : <Navbar />}
    </Stack>
  );
};

export default Header;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./components/MainLayout";
import HomePage from "./pages/HomePage";
import { ThemeProvider } from "@mui/material";
import { theme } from "./helper/theme";
import AllProducts from "./pages/AllProducts";
import ProductItself from "./pages/ProductItself";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/allproduct" element={<AllProducts />} />
            <Route path="/product/:id" element={<ProductItself />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
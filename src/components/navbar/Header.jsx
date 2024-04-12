import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import flower from "./../../images/Слой 0.png";
import basket from "./../../images/Корзина.png";
import serach from "./../../images/Поиск.png";
import user from "./../../images/Пользователь.png";
import { useNavigate } from "react-router-dom";
import CardFlower from "./../card/CardFlower";
import CardProducts from "./../card/CardProducts";
import BouquetFlower from "./../flowers/BouquetFlower";
import CatalogFlowers from "./../flowers/CatalogFlowers";
import ChooseFlower from "./../flowers/ChooseFlower";
import DeliveryFlower from "./../flowers/DeliveryFlower";
import Explanation from "./../flowers/Explanation";
import FloristMan from "./../flowers/FloristMan";
import Footer from "./../footer/Footer";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

const Header = () => {
  const navigate = useNavigate();

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  return (
    <main>
      <div id="header">
        <div className="container">
          <MenuIcon
            style={{
              color: "#eb8671",
              width: "30px",
              height: "30px",
              cursor: "pointer",
            }}
          />
        </div>
        <span style={{ display: "flex", gap: "10px" }}>
          <div>
            <img src={flower} alt="flower" />
          </div>
          <div>
            <h1 style={{ fontSize: "27px", fontWeight: "600" }}>FLORISTMAN</h1>
            <p style={{ fontSize: "12px" }}>Широкий выбор на любой вкус</p>
          </div>
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <img
            onClick={() => navigate("/basket")}
            style={{ cursor: "pointer" }}
            width={30}
            height={30}
            src={basket}
            alt="basket"
          />
          <img
            style={{ cursor: "pointer" }}
            width={30}
            height={30}
            src={user}
            alt="user"
          />
        </div>
      </div>
      <ChooseFlower />
      <CardFlower />
      <Explanation />
      <CatalogFlowers />
      <CardProducts />
      <DeliveryFlower />
      <BouquetFlower />
      <FloristMan />
      <Footer />
    </main>
  );
};

export default Header;

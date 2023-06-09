import * as React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { Link } from "react-router-dom";

const Container = styled.div`
  z-index: 10000;
  position: fixed;
  top: 0px;
  width: 100%;
  height: 60px;
  background-color: white;
  ${mobile({ height: "150px" , backgroundColor:"#fff8f8" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px", flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  color: #959180;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid #959180;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  border-radius: 8px;
  ${mobile({display: "none"})}
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "100px", marginLeft: "40px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  ${mobile({ margin: "10px 0px" })}
`;

const Logo = styled.h1`
  color: #959180;
  font-family: "Delicious Handrawn", cursive;
  font-size: 30px;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center", flexDirection: "column"})}
`;
const Suggestions = styled.div`
  opacity: 0;
  position: absolute;
  top: 100%;
  left: 30%;
  right: 0;

  background-color: white;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 8px #ddd;
  padding: 3px;
  margin-top: 0.5rem;
  max-height: 300px;
  font-family: "Vazir", sans-serif;
  cursor: pointer;
  ${mobile({fontSize: "13px", position: "absolute",right: "10%",left: "17%", fontWeight: "bold"})};
`;
const Suggestion = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #fff8dc;
  }
  ${mobile({marginBottom: "3px"})};
`;
const MenuItems = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;

  ${mobile({ fontSize: "12px", marginLeft: "10px" , marginBottom: "7px" })}
`;
const SearchBar = styled.div`
  &:hover ${Suggestions} {
    opacity: 1;
  }
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Navbar = () => {
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" style={{ borderRadius: "8px" }} />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>koocha website</Logo>
        </Center>
        <Right>
          {/* <Button
            style={{ color: "black" }}
            id="fade-button"
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            Categories
          </Button> */}
          {/* <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={handleClose}>
              <Link
                to={"/categories/" + "مشاغل"}
                style={{ textDecoration: "none", color: "black" }}
              >
                Jobs
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                to={"/categories/" + "جوامع"}
                style={{ textDecoration: "none", color: "black" }}
              >
                Societies
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                to={"/categories/" + "all"}
                style={{ textDecoration: "none", color: "black" }}
              >
                All
              </Link>
            </MenuItem>
          </Menu> */}
          <MenuItems>REGISTER</MenuItems>
          <MenuItems>SIGN IN</MenuItems>
          <SearchBar>
            <MenuItems>CATEGORIES</MenuItems>
            <Suggestions>
              <Suggestion>
                <Link
                  to={"/categories/" + "مشاغل"}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Jobs
                </Link>
              </Suggestion>
              <Suggestion>
                <Link
                  to={"/categories/" + "جوامع"}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Societies
                </Link>
              </Suggestion>
              <Suggestion>
                <Link
                  to={"/units/" + "all"}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  All
                </Link>
              </Suggestion>
            </Suggestions>
          </SearchBar>
          {/* <MenuItems>
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItems> */}
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

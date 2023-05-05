import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
const Container = styled.div`
  z-index: 10000;
  position: fixed;
  top: 0px;
  width: 100%;
  height: 60px;
  background-color: white;
  ${mobile({ height: "150px"})}
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
 
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "100px" , marginLeft: "40px"})}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  ${mobile({  margin: "40px 0px"})}
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
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;

  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
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
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

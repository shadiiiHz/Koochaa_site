import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`

  height: 60px;
  background-color: white;
  color: black;
  display: flex;
  align-items: end;
  padding: 8px;
  justify-content: center;
  font-size: 25px;
  font-weight: 400;
  font-family: Vazirmatn, sans-serif;
  ${mobile({ height: "150px ",fontSize: "20px"})}
`;

const CategoryLable = () => {
  return <Container>جدیدترین دسته بندی های کوچا</Container>;
};

export default CategoryLable;

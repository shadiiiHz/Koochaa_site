import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`

  height: 100px;
  background-color: #A52A2A;
  color: white;
  display: flex;
  align-items: end;
  padding: 8px;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  font-family: Vazirmatn, sans-serif;
  ${mobile({ dsiplay: "none" })}
`;

const Announcement = () => {
  return <Container>دسترسی سریع و آسان با اپلیکیشن کوچا</Container>;
};

export default Announcement;

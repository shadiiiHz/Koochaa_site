import styled from "styled-components";
import { mobile } from "../responsive";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
const Container = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background-color: #eedfae;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-left: 20px;
  cursor: pointer;
  ${mobile({ dsiplay: "none" })}
`;

const BackArrow = ({item}) => {
  return <Link to={item} style={{ textDecoration: "none" , color: "black"}}><Container><ArrowBackIcon/></Container></Link>;
};

export default BackArrow;

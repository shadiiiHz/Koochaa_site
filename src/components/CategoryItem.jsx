// import { Link } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";
import imgRes from "../images/pexels-thuyen-vu-1673876.jpg";
import imgSur from "../images/pexels-anna-shvets-4586989.jpg";
import imgWed from "../images/pexels-agung-pandit-wiguna-2970287.jpg";
import imgCar from "../images/pexels-iva-prime-2052939.jpg";

const Container = styled.div`
  flex: 1;
  margin: 3px 100px 3px;
  height: 20vh;
  width: 20vw;
  border-radius: 50%;
  position: relative;
  ${mobile({
    height: "30vh",
    width: "40vw",
    padding: "10px",
    marginBottom: "30px",
  })}
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  opacity: 80%;

  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;

  &:hover {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }
  ${mobile({ height: "20vh" })}
`;

const Info = styled.div`
  position: absolute;

  left: 0;
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mobile({ height: "33%" })}
`;

const Title = styled.h1`
  color: black;
  margin-bottom: 20px;
  font-size: 20px;
  font-family: Vazirmatn, sans-serif;
`;
const Desc = styled.h1`
  color: black;
  margin: 20px;
  font-size: 20px;
`;
const Button = styled.button`
  border: none;
  padding: 5px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;

const CategoryItem = ({ item }) => {
  // const [readMore, setReadMore] = useState(false);

  return (
    <Container>
      {item.title === "رستوران" && <Image src={imgRes} />}
      {item.title === "جراح کودکان" && <Image src={imgSur} />}
      {item.title === "فروشگاه فرش" && <Image src={imgCar} />}
      {item.title === "تشریفات مجالس" && <Image src={imgWed} />}

      <Info>
        <Title>{item.title}</Title>

        {/* <Link to={`/products/category=${item.title}`}>
          <Button>More information</Button>
        </Link> */}
      </Info>
    </Container>
  );
};

export default CategoryItem;

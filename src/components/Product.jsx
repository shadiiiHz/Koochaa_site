import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FFF8DC;
  position: relative;
  flex-direction: column;
  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
const ProductListImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
`;
const Title = styled.h1`
  color: black;
  margin: 10px 0px 10px;
  font-size: 18px;
  font-family: Vazirmatn, sans-serif;
`;
const Id = styled.h1`
  color: black;
  margin: 10px 0px 10px;
  font-size: 18px;
`;
const Desc = styled.h1`
  color: black;
  margin-bottom: 10px;
  font-size: 15px;
`;
const Location = styled.h2`
  color: black;
  margin-bottom: 10px;
  margin-left: 3px;
  marging-right: 3px;
  font-size: 15px;
`;
const Email = styled.h2`
  color: black;
  margin-bottom: 10px;
  margin-left: 3px;
  marging-right: 3px;
  font-size: 15px;
`;
const CategoryInfo = styled.h2`
  color: black;
  margin-bottom: 10px;
  font-size: 15px;
`;
const WebSite = styled.h2`
  color: black;
  margin-bottom: 10px;
  font-size: 10px;
`;
const Mobile = styled.h2`
  color: black;
  margin-bottom: 10px;
  font-size: 13px;
`;
const Product = ({ item }) => {
  const {
    id,
    title,
    email,
    description,
    web_site,
    logo,
    mobile,
    unit_category,
    city,
    country,
  } = item;

  // const mobileNumber = mobile[0];
  const categoryTitle = unit_category.title;
  const categoryType = unit_category.type;
  return (
    <Container>
      {/* <Circle /> */}
      {/* <Image src={item.img} /> */}
      <Id>{id}</Id>
      {logo ? (
        <ProductListImg
          src={`http://localhost:8000/storage/image/unit/${id}/${logo}`}
          alt=""
        />
      ) : (
        <Avatar sx={{ width: 32, height: 32 }}></Avatar>
      )}
      <Title> {title}</Title>
      <Desc>{description}</Desc>
      <Email><EmailIcon sx={{ width: 17, height: 17 }}/> : {email}</Email>
      <CategoryInfo>{categoryTitle}</CategoryInfo>
      <CategoryInfo>type : {categoryType}</CategoryInfo>
      {/* <Location>city: {city.name && city.name}</Location> */}
      <Location><LocationOnIcon sx={{ width: 17, height: 17 }}/> : {country && country.name}</Location>
      <WebSite><LanguageIcon sx={{ width: 17, height: 17 }}/> : {web_site}</WebSite>
      <Mobile><PhoneIcon sx={{ width: 17, height: 17 }}/> : {mobile && mobile[0]}</Mobile>
      <Info>
        {/* <Icon>
          <ShoppingCartOutlined />
        </Icon> */}
        {/* <Icon>
          <SearchOutlined />
        </Icon> */}
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;

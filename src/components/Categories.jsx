import { useEffect, useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";

import { fetchCategory } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
const Container = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-between;
  margin-bottom: 40px;
  ${mobile({ padding: "0px", flexDirection: "column" , marginTop: "60px" , alignItems: "center"})}
`;

const Categories = () => {
  const [categories, setCategories] = useState([]);

  const categoryId = [58, 41, 40, 39, 15 , 16];
  useEffect(() => {
    categoryId.map((id) => {
      axios
        .get(`http://localhost:8000/api/v1/user/units/a/categories/${id}`)
        .then((response) => {
          setCategories((prevArray) => [...prevArray, response.data.body]);
        })
        .catch((error) => {
          // handle error
        });

      // setCategories((prevArray) => [...prevArray, category]);
    });
  }, []);
  return (

    <Container>
    
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
        // <h1>{item.id}</h1>
      ))}
      {/* <pre>{JSON.stringify(categories)} </pre> */}
    </Container>
  );
};

export default Categories;

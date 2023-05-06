import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
  const [popularUnits, setPopularUnits] = useState();
  useEffect(() => {
    axios
      .get(
        `http://localhost:8000/api/v1/user/units/middle-page/search?per_page=20`
      )
      .then((response) => {
        console.log(response.data.body.data);
        setPopularUnits(response.data.body.data);
      })
      .catch((error) => {
        // handle error
      });

    // setCategories((prevArray) => [...prevArray, category]);
  }, []);
  return (
    <Container>
      {popularUnits && popularUnits.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;

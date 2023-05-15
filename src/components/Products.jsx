import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getTwentyUnits } from "../redux/apiCalls";

import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
  const dispatch = useDispatch();
  const [popularUnits, setPopularUnits] = useState();
  const units = useSelector((state) => state.unit.units);
  useEffect(() => {
    getTwentyUnits(dispatch);
    setPopularUnits(units);
  }, [dispatch]);
  return (
    <Container>
      {popularUnits &&
        popularUnits.map((item) => <Product item={item} key={item.id} />)}
    </Container>
  );
};

export default Products;

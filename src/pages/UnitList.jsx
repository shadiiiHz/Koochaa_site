import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getByTitle, getUnits } from "../redux/apiCalls";
import { mobile } from "../responsive";

import Combobox from "react-widgets/Combobox";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import ReactPaginate from "react-paginate";
import Avatar from "@mui/material/Avatar";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import BackArrow from "../components/BackArrow";
import Swal from "sweetalert2";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
const PaginationStyle = styled.div`
  margin: 20px;
`;
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
`;
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

const ContainerInfo = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  max-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff8dc;
  position: relative;
  flex-direction: column;
  &:hover ${Info} {
    opacity: 1;
  }
`;
const NotFoundContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 50px;
`;
const NotFoundInfo = styled.h1`
  color: black;
  margin: 20px;
  font-size: 18px;
  font-family: Vazirmatn, sans-serif;
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

const Button = styled.button`
  width: 55px;
  height: 55px;
  border: none;
  border-radius: 50%;
  background-color: #eedfae;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-left: 20px;
  cursor: pointer;
`;
const UnitList = () => {
  const location = useLocation();
  const Id = location.pathname.split("/")[2];
  const navigate = useNavigate();
  //   console.log(parseInt("all"));
  //   const ID = parseInt(Id);
  const [pageCount, setpageCount] = useState(0);
  const [pageCount2, setpageCount2] = useState(0);

  const [page, setPage] = useState(1);
  const [page2, setPage2] = useState(1);

  const dispatch = useDispatch();

  const types = useSelector((state) => state.type.types);
  const units = useSelector((state) => state.unit.units);
  const lastPage = useSelector((state) => state.unit.lastPage);
  const lastPage2 = useSelector((state) => state.type.lastPage);
  //search by title
  const [value, setValue] = useState("");

  useEffect(() => {
    if (Id === "all" && !value) {
      setpageCount(lastPage);
      getUnits(dispatch, "", page);
    }
  }, [dispatch, page, lastPage]);
  useEffect(() => {
    if (Id != "all") {
      setpageCount(lastPage);
      getUnits(dispatch, Id, page);
    }
  }, [dispatch, page, lastPage]);
  useEffect(() => {
    if (value) {
      if (typeof value === "object") {
        getByTitle(dispatch, value.title, page2);
        setpageCount2(lastPage2);
      } else {
        getByTitle(dispatch, value, page2);
        setpageCount2(lastPage2);
      }
    }
  }, [dispatch, value, lastPage2, page2]);

  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
    setPage(currentPage);
  };
  const handlePageClick2 = async (data) => {
    let currentPage = data.selected + 1;
    setPage2(currentPage);
  };

  return (
    <>
      {Id === "all" ? (
        <BackArrow item={"/"} />
      ) : (
        <Button
          onClick={() => {
            window.location.href = "/units/all";
          }}
        >
          <ArrowBackIcon />
        </Button>
      )}

      {Id === "all" && (
        <Combobox
          style={{ width: "30%", margin: "auto" }}
          data={types}
          textField="title"
          value={value}
          onChange={(value) => setValue(value)}
          placeholder="Search for a title"
        />
      )}

      <Container>
        {/* <pre>{JSON.stringify(categories)} </pre>  */}
        {/* <pre>{JSON.stringify(value)} </pre>  */}
        {Id === "all" &&
          value &&
          types.map((unit) => {
            return (
              <ContainerInfo>
                <Id>{unit.id}</Id>
                {unit.logo ? (
                  <ProductListImg
                    src={`http://localhost:8000/storage/image/unit/${unit.id}/${unit.logo}`}
                    alt=""
                  />
                ) : (
                  <Avatar sx={{ width: 32, height: 32 }}></Avatar>
                )}
                <Title> {unit.title}</Title>
                <Desc>{unit.description}</Desc>
                <Email>
                  <EmailIcon sx={{ width: 17, height: 17 }} /> :{" "}
                  {unit.email ? unit.email : " _ "}
                </Email>
                <CategoryInfo>
                  {unit.unit_category ? unit.unit_category.title : " _ "}
                </CategoryInfo>
                <CategoryInfo>
                  type : {unit.unit_category ? unit.unit_category.type : " _ "}
                </CategoryInfo>
                {/* <Location>city: {city.name && city.name}</Location> */}
                <Location>
                  <LocationOnIcon sx={{ width: 17, height: 17 }} /> :{" "}
                  {unit.country ? unit.country.name : " _ "}
                </Location>
                <WebSite>
                  <LanguageIcon sx={{ width: 17, height: 17 }} /> :{" "}
                  {unit.web_site ? unit.web_site : " _ "}
                </WebSite>
                <Mobile>
                  <PhoneIcon sx={{ width: 17, height: 17 }} /> :{" "}
                  {unit.mobile ? unit.mobile[0] : " _ "}
                </Mobile>
                <Info>
                  <Icon>
                    <FavoriteBorderOutlined />
                  </Icon>
                </Info>
              </ContainerInfo>
            );
          })}
      </Container>
      {Id === "all" && value && (
        <PaginationStyle>
          <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            pageCount={pageCount2}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick2}
            containerClassName={"pagination justify-content-center"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
          />
        </PaginationStyle>
      )}

      <Container>
        {/* <pre>{JSON.stringify(categories)} </pre>  */}
        {/* <pre>{JSON.stringify(value)} </pre>  */}
        {Id === "all" &&
          !value &&
          units.map((unit) => {
            return (
              <ContainerInfo>
                <Id>{unit.id}</Id>
                {unit.logo ? (
                  <ProductListImg
                    src={`http://localhost:8000/storage/image/unit/${unit.id}/${unit.logo}`}
                    alt=""
                  />
                ) : (
                  <Avatar sx={{ width: 32, height: 32 }}></Avatar>
                )}
                <Title> {unit.title}</Title>
                <Desc>{unit.description}</Desc>
                <Email>
                  <EmailIcon sx={{ width: 17, height: 17 }} /> : {unit.email}
                </Email>
                <CategoryInfo>{unit.unit_category.title}</CategoryInfo>
                <CategoryInfo>type : {unit.unit_category.type}</CategoryInfo>
                {/* <Location>city: {city.name && city.name}</Location> */}
                <Location>
                  <LocationOnIcon sx={{ width: 17, height: 17 }} /> :{" "}
                  {unit.country && unit.country.name}
                </Location>
                <WebSite>
                  <LanguageIcon sx={{ width: 17, height: 17 }} /> :{" "}
                  {unit.web_site}
                </WebSite>
                <Mobile>
                  <PhoneIcon sx={{ width: 17, height: 17 }} /> :{" "}
                  {unit.mobile && unit.mobile[0]}
                </Mobile>
                <Info>
                  <Icon>
                    <FavoriteBorderOutlined />
                  </Icon>
                </Info>
              </ContainerInfo>
            );
          })}
      </Container>
      {Id === "all" && !value && (
        <PaginationStyle>
          <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={"pagination justify-content-center"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
          />
        </PaginationStyle>
      )}
      <Container style={{ justifyContent: "center" }}>
        {/* <pre>{JSON.stringify(categories)} </pre>  */}
        {/* <pre>{JSON.stringify(value)} </pre>  */}
        {Id !== "all" && units.length !== 0 && !value
          ? units.map((unit) => {
              return (
                <ContainerInfo>
                  {/* <Id>{unit.id}</Id> */}
                  {unit.logo ? (
                    <ProductListImg
                      src={`http://localhost:8000/storage/image/unit/${unit.id}/${unit.logo}`}
                      alt=""
                    />
                  ) : (
                    <Avatar sx={{ width: 32, height: 32 }}></Avatar>
                  )}
                  <Title> {unit.title}</Title>
                  <Desc>{unit.description}</Desc>
                  <Email>
                    <EmailIcon sx={{ width: 17, height: 17 }} /> : {unit.email}
                  </Email>
                  <CategoryInfo>{unit.unit_category.title}</CategoryInfo>
                  <CategoryInfo>type : {unit.unit_category.type}</CategoryInfo>
                  {/* <Location>city: {city.name && city.name}</Location> */}
                  <Location>
                    <LocationOnIcon sx={{ width: 17, height: 17 }} /> :{" "}
                    {unit.country && unit.country.name}
                  </Location>
                  <WebSite>
                    <LanguageIcon sx={{ width: 17, height: 17 }} /> :{" "}
                    {unit.web_site}
                  </WebSite>
                  <Mobile>
                    <PhoneIcon sx={{ width: 17, height: 17 }} /> :{" "}
                    {unit.mobile && unit.mobile[0]}
                  </Mobile>
                  <Info>
                    <Icon>
                      <FavoriteBorderOutlined />
                    </Icon>
                  </Info>
                </ContainerInfo>
              );
            })
          : ""}
      </Container>

      {Id !== "all" && units.length === 0 && !value ? (
        <NotFoundContainer>
          <ErrorOutlineIcon
            sx={{ width: "40px", height: "40px", color: "red" }}
          />
          <NotFoundInfo>واحدی یافت نشد</NotFoundInfo>
        </NotFoundContainer>
      ) : (
        ""
      )}
      {Id !== "all" && units.length !== 0 && !value ? (
        <PaginationStyle>
          <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={"pagination justify-content-center"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
          />
        </PaginationStyle>
      ) : (
        ""
      )}

      <Footer />
    </>
  );
};

export default UnitList;

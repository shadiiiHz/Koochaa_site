import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest, publicRequest2, userRequest } from "../requestMethods";
import {
  getContinentFailure,
  getContinentStart,
  getContinentSuccess,
  updateContinentStart,
  updateContinentSuccess,
  updateContinentFailure,
  getIdStart,
  getIdFailure,
  getIdSuccess,
} from "./continentRedux";
import {
  getCountryFailure,
  getCountryStart,
  getCountrySuccess,
  deleteCountryFailure,
  deleteCountryStart,
  deleteCountrySuccess,
  getCountryIdStart,
  getCountryIdSuccess,
  getCountryIdFailure,
  updateCountryStart,
  updateCountrySuccess,
  updateCountryFailure,
  getPage,
} from "./countryRedux";
import {
  getCityFailure,
  getCityStart,
  getCitySuccess,
  deleteCityFailure,
  deleteCityStart,
  deleteCitySuccess,
  addCityFailure,
  addCityStart,
  addCitySuccess,
  updateCityStart,
  updateCitySuccess,
  updateCityFailure,
  getPageCity,
} from "./cityRedux";
import {
  getCategoryFailure,
  getCategoryStart,
  getCategorySuccess,
  deleteCategoryFailure,
  deleteCategoryStart,
  deleteCategorySuccess,
  activeCategoryFailure,
  activeCategoryStart,
  activeCategorySuccess,
  updateCategoryStart,
  updateCategorySuccess,
  updateCategoryFailure,
  getPageCategory,
  deactiveCategorySuccess,
  deactiveCategoryFailure,
  deactiveCategoryStart,
} from "./categoryRedux";
import {
  getTypeFailure,
  getTypeStart,
  getTypeSuccess,
  getPageType,
  clear,
} from "./typesRedux";
import {
  getUnitFailure,
  getUnitStart,
  getUnitSuccess,
  deleteUnitFailure,
  deleteUnitStart,
  deleteUnitSuccess,
  activeUnitFailure,
  activeUnitStart,
  activeUnitSuccess,
  updateUnitStart,
  updateUnitSuccess,
  updateUnitFailure,
  getPageUnit,
  deactiveUnitSuccess,
  deactiveUnitFailure,
  deactiveUnitStart,
} from "./unitRedux";

import {
  getUserListFailure,
  getUserListStart,
  getUserListSuccess,
  deleteUserListFailure,
  deleteUserListStart,
  deleteUserListSuccess,
  activeUserListFailure,
  activeUserListStart,
  activeUserListSuccess,
  updateUserListStart,
  updateUserListSuccess,
  updateUserListFailure,
  getPageUserList,
  deactiveUserListSuccess,
  deactiveUserListFailure,
  deactiveUserListStart,
  activeUserStart,
  activeUserSuccess,
  activeUserFailure,
  deactiveUserFailure,
  deactiveUserSuccess,
  deactiveUserStart,
  deleteUserOfListFailure,
  deleteUserOfListSuccess,
  deleteUserOfListStart,
} from "./userListRedux";

import axios from "axios";
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/signin", user);
    // console.log(res.data.body.access_token);
    dispatch(loginSuccess(res.data.body.access_token));
  } catch (err) {
    dispatch(loginFailure());
  }
};
///////////////////////////////Continent///////////////////////////////////////////
export const getContinents = async (dispatch, configuration, page) => {
  dispatch(getContinentStart());
  try {
    const res = await publicRequest2.get(
      `/locations/continents?page=${page}`,
      configuration
    );
    // console.log(res.data.data);
    dispatch(getContinentSuccess(res.data.data));
  } catch (err) {
    dispatch(getContinentFailure());
  }
};
export const getContinentIdByName = async (dispatch, configuration, name) => {
  dispatch(getIdStart());
  try {
    const res = await publicRequest2.get(
      `/locations/continents?name=${name}`,
      configuration
    );
    // console.log(res.data.data[0].id);
    dispatch(getIdSuccess(res.data.data[0].id));
  } catch (err) {
    dispatch(getIdFailure());
  }
};

/////////////////////////country//////////////////////////////////////
export const getCountries = async (dispatch, configuration, page) => {
  dispatch(getCountryStart());
  try {
    const res = await publicRequest2.get(
      `/locations/countries?page=${page}`,
      configuration
    );
    // console.log(res.data.body.data);
    dispatch(getCountrySuccess(res.data.body.data));
    dispatch(getPage(res.data.body.last_page));
  } catch (err) {
    dispatch(getCountryFailure());
  }
};
export const getCountriesByName = async (dispatch, configuration, name) => {
  dispatch(getCountryStart());
  try {
    const res = await publicRequest2.get(
      `/locations/countries?page=1&name=${name}`,
      configuration
    );
    console.log(res.data.body.data);
    dispatch(getCountrySuccess(res.data.body.data));
    dispatch(getPage(res.data.body.last_page));
  } catch (err) {
    dispatch(getCountryFailure());
  }
};

// export const getCountryIdByName = async (dispatch, configuration, name) => {
//   dispatch(getCountryIdStart());
//   try {
//     const res = await publicRequest2.get(
//       `/locations/countries?name=${name}`,
//       configuration
//     );
//     // console.log(res.data.body.data[0].id);
//     dispatch(getCountryIdSuccess(res.data.body.data[0].id));
//   } catch (err) {
//     dispatch(getCountryIdFailure());
//   }
// };
///////////////////////city//////////////////////////
export const getCities = async (dispatch, configuration, page) => {
  dispatch(getCityStart());
  try {
    const res = await publicRequest2.get(
      `/locations/cities?page=${page}`,
      configuration
    );
    // console.log(res.data.body.data);
    dispatch(getCitySuccess(res.data.body.data));
    dispatch(getPageCity(res.data.body.last_page));
  } catch (err) {
    dispatch(getCityFailure());
  }
};

export const getCitiesByCountryId = async (dispatch, configuration, id) => {
  dispatch(getCityStart());
  try {
    const res = await publicRequest2.get(
      `/locations/cities?country_id=${id}`,
      configuration
    );
    // console.log(id)

    dispatch(getCitySuccess(res.data.body.data));
    // dispatch(getPageCity(res.data.body.last_page));
  } catch (err) {
    dispatch(getCityFailure());
  }
};
///////////////category//////////////////////
export const getCategories = async (dispatch, page) => {
  dispatch(getCategoryStart());
  try {
    if (page == 1) {
      const res = await axios.get(
        `http://localhost:8000/api/v1/user/units/a/categories?page=1`
      );
      console.log(res.data.body.last_page);
      dispatch(getCategorySuccess(res.data.body.data));
      dispatch(getPageCategory(res.data.body.last_page));
    } else {
      const res = await axios.get(
        `http://localhost:8000/api/v1/user/units/a/categories?page=${page}`
      );
      console.log(res.data.body.last_page);
      dispatch(getCategorySuccess(res.data.body.data));
      dispatch(getPageCategory(res.data.body.last_page));
    }
  } catch (err) {
    dispatch(getCategoryFailure());
  }
};
export const getCategorByTitle = async (dispatch, title, type, page) => {
  dispatch(getCategoryStart());
  try {
    if (page == 1) {
      const res = await axios.get(
        `http://localhost:8000/api/v1/user/units/a/categories?title=${title}&type=${type}&page=1`
      );
      // console.log(res.data.body.data);
      dispatch(getCategorySuccess(res.data.body.data));
      dispatch(getPageCategory(res.data.body.last_page));
    } else {
      const res = await axios.get(
        `http://localhost:8000/api/v1/user/units/a/categories?title=${title}&type=${type}&page=${page}`
      );
      // console.log(res.data.body.data);
      dispatch(getCategorySuccess(res.data.body.data));
      dispatch(getPageCategory(res.data.body.last_page));
    }
  } catch (err) {
    dispatch(getCategoryFailure());
  }
};
export const fetchCategory = async (dispatch, id) => {
  dispatch(getCategoryStart());
  try {
    const res = await axios.get(
      `http://localhost:8000/api/v1/user/units/a/categories/${id}`
    );
    // console.log(res.data.body);
    dispatch(getCategorySuccess(res.data.body));
  } catch (err) {
    dispatch(getCategoryFailure());
  }
};
export const getTypes = async (dispatch, type, page) => {
  dispatch(getTypeStart());
  try {
    if (page == 1) {
      const res = await axios.get(
        `http://localhost:8000/api/v1/user/units/a/categories?type=${type}&page=1`
      );
      console.log(res.data.body.last_page);
      dispatch(getTypeSuccess(res.data.body.data));
      dispatch(getPageType(res.data.body.last_page));
    } else {
      const res = await axios.get(
        `http://localhost:8000/api/v1/user/units/a/categories?type=${type}&page=${page}`
      );
      console.log(res.data.body.last_page);
      dispatch(getTypeSuccess(res.data.body.data));
      dispatch(getPageType(res.data.body.last_page));
    }
  } catch (err) {
    dispatch(getTypeFailure());
  }
};
//
export const getTypeAndNameForUnit = async (
  dispatch,
  configuration,
  type,
  name
) => {
  dispatch(getCategoryStart());
  try {
    const res = await publicRequest2.get(
      `/units/a/categories?title=${name}&type=${type}`,
      configuration
    );
    // console.log(res.data.body.data);
    dispatch(getCategorySuccess(res.data.body.data));
  } catch (err) {
    dispatch(getCategoryFailure());
  }
};

///////////////////unit/////////////////////////////////
export const getUnits = async (dispatch, unit_category_id, page) => {
  dispatch(getUnitStart());
  try {
    if (page == 1) {
      const res = await axios.get(
        `http://localhost:8000/api/v1/user/units/middle-page/search?unit_category_id=${unit_category_id}&page=1`
      );
      console.log(res.data.body.data);
      dispatch(getUnitSuccess(res.data.body.data));
      dispatch(getPageUnit(res.data.body.last_page));
    } else {
      const res = await axios.get(
        `http://localhost:8000/api/v1/user/units/middle-page/search?unit_category_id=${unit_category_id}&page=${page}`
      );
      console.log(res.data.body.data);
      dispatch(getUnitSuccess(res.data.body.data));
      dispatch(getPageUnit(res.data.body.last_page));
    }
  } catch (err) {
    dispatch(getUnitFailure());
  }
};
export const getByTitle = async (dispatch, title, page) => {
  dispatch(getTypeStart());
  try {
    if (page == 1) {
      const res = await axios.get(
        `http://localhost:8000/api/v1/user/units/middle-page/search?title=${title}&page=1`
        
      );
      console.log(res.data.body.data);
      dispatch(getTypeSuccess(res.data.body.data));
      dispatch(getPageType(res.data.body.last_page));
    } else {
      const res = await axios.get(
        `http://localhost:8000/api/v1/user/units/middle-page/search?title=${title}&page=${page}`
        
      );
      console.log(res.data.body.data);
      dispatch(getTypeSuccess(res.data.body.data));
      dispatch(getPageType(res.data.body.last_page));
    }
  } catch (err) {
    dispatch(getTypeFailure());
  }
};

////////////////userlist/////////////////
export const getUserList = async (dispatch, configuration, page) => {
  dispatch(getUserListStart());
  try {
    const res = await publicRequest2.get(`/users?page=${page}`, configuration);
    console.log(res.data.body.data);
    dispatch(getUserListSuccess(res.data.body.data));
    dispatch(getPageUserList(res.data.body.last_page));
  } catch (err) {
    dispatch(getUserListFailure());
  }
};
export const getByGender = async (dispatch, configuration, gender, page) => {
  // dispatch(clear());
  dispatch(getTypeStart());
  try {
    if (page == 1) {
      const res = await publicRequest2.get(
        `/users?gender=${gender}&page=1`,
        configuration
      );
      console.log(res.data.body.data);
      dispatch(getTypeSuccess(res.data.body.data));
      dispatch(getPageType(res.data.body.last_page));
    } else {
      const res = await publicRequest2.get(
        `/users?gender=${gender}&page=${page}`,
        configuration
      );
      console.log(res.data.body.data);
      dispatch(getTypeSuccess(res.data.body.data));
      dispatch(getPageType(res.data.body.last_page));
    }
  } catch (err) {
    dispatch(getTypeFailure());
  }
};

import axios from "axios";

const BASE_URL = "http://localhost:5000";

const postApi = async (url, body, config = {}) => {
  try {
    let response = await axios.post(`${BASE_URL}/${url}`, body, config);
    return response.data;
  } catch (error) {
    console.log("error", error.message);
    return null;
  }
};

const updateApi = async (url, body, config = {}) => {
  try {
    let response = await axios.put(`${BASE_URL}/${url}`, body, config);
    return response.data;
  } catch (error) {
    console.log("error", error.message);
    return null;
  }
};

const getApi = async (url, config = {}) => {
  try {
    let response = await axios.get(`${BASE_URL}/${url}`, config);
    return response.data;
  } catch (error) {
    console.log("error", error.message);
    return null;
  }
};

const deleteApi = async (url, body, config = {}) => {
  try {
    let response = await axios.delete(`${BASE_URL}/${url}`, body, config);
    return response.data;
  } catch (error) {
    console.log("error", error.message);
    return null;
  }
};

export { deleteApi, getApi, postApi, updateApi 
};

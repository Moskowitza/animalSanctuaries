import axios from "axios";

export default {
  //these routes should match authcontroller
  getUser: function () {
    // return axios.get("/auth/check");
    return axios.get("/auth/check");
  },
  loginUser: function (loginData) {
    return axios.post("/auth/signin", loginData);
  },
  // Saves a book to the database
  registerUser: function (registerData) {
    return axios.post("/auth/signup", registerData);
  },
  logoutUser: function () {
    return axios.get("/auth/logout");
  },
  // Saves a book to the database
  saveUser: function (userData) {
    return axios.post("/auth/signup", userData);
  }

};

import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  // Gets all books
  getUser: function () {
    return axios.get("/auth/check");
  },
  loginUser: function (loginData) {
    return axios.post("/auth/signin/", loginData);
  },
  // Saves a book to the database
  registerUser: function (registerData) {
    return axios.post("/auth/signup", registerData);
  },
  logoutUser: function () {
    return axios.get("/auth/logout/");
  },
  // Saves a book to the database
  saveUser: function (userData) {
    return axios.post("/api/login", userData);
  }

};

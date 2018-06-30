import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
<<<<<<< HEAD
    // Saves a book to the database
=======
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
>>>>>>> 0a7e1fa27439324246ff5d13fd619f7f617dc3f1
  saveUser: function (userData) {
    return axios.post("/auth/register", userData);
  }

};

import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
    // Saves a book to the database
  saveUser: function (userData) {
    return axios.post("/auth/register", userData);
  }
  
};

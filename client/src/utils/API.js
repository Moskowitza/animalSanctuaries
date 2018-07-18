import axios from "axios";

export default {
  //these routes should match authcontroller
  getUser: function () {
    // checks if there is a user saved
    return axios.get("/auth/check");
  },
  //login user
  loginUser: function (loginData) {
    return axios.post("/auth/signin", loginData);
  },
  // Makes a NEW user to the database (I don't think we need this one)// 
  registerUser: function (registerData) {
    return axios.post("/auth/signup", registerData);
  },
  //logins out user
  logoutUser: function () {
    return axios.get("/auth/logout");
  },
  // Makes a NEW user to the database
  saveUser: function (userData) {
    return axios.post("/auth/signup", userData);
  },
  // Makes a NEW user to the database
  saveSanctuary: function (Data) {
    return axios.post("/auth/newSanctuary", Data);
  },
  getSanctuaries: function (data) {
    // Get all sanctuaries
    return axios.get("/auth/sanctuaries", data);
  },
  saveSearch: function (data) {
    return axios.post("/auth/saveSearch", data)
  },
  getSavedSanctuaries: function (data) {
    return axios.get(`/auth/savedSanctuaries/${data.userId}`);
  },
  getMyComments: function (data) {
    return axios.get(`/auth/userComments/${data.userId}`);
  },
  getSanctuary: function (id) {
    return axios.get("/api/sanctuary/" + id);
  },
  saveComment: function (comment) {
    return axios.post("/auth/newComment", comment);
  },
  getComments: function (id) {
    return axios.get(`/api/getComments${id}`);
  },
  deleteComment: function (data) {
    console.log("@@@@@@@@@@"+data.postId)
    return axios.delete(`/api/deleteComment${data.postId}`);
  }
};

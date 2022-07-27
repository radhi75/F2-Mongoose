const express = require("express");
const {
  Adduser,
  Getusers,
  Deleteuser,
  Updateuser,
} = require("../controlles/user");

const userRoutes = express.Router();

userRoutes.post("/add", Adduser);
userRoutes.get("/all", Getusers);
userRoutes.delete(`/del/:id`, Deleteuser);
userRoutes.put(`/edit/:id`, Updateuser);

module.exports = userRoutes;

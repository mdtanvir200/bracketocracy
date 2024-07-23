const express = require("express");
const { createRole, getRoles } = require("../controller/RoleController");

const Router = express.Router();

Router.post("/addrole", createRole);
Router.get("/getrole", getRoles);

module.exports = Router;
console.log("router is ready to use");
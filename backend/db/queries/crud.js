const knex = require("../connection");
const bodyParser = require("koa-bodyparser");
const Koa = require("koa");
const app = new Koa();
app.use(bodyParser());

module.exports = {

  login: async (user) =>
    knex("applandeo")
      .select("email")
      .where(user)
      .then(array => array.length > 0 ? array[0] : "wrong"),

  register: async (user) =>
    knex("applandeo")
      .insert(user)
      .returning("*")
      .then(array => array[0])

};

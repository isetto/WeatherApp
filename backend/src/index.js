const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const PORT = process.env.PORT || 38002;
const basicRoutes = require("./routes/basicRoutes");
const cors = require("@koa/cors");
const app = new Koa();




app.use(cors());
app.use(bodyParser());
app.use(basicRoutes.routes());


const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;

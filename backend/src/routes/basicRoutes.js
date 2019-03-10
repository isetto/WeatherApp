const Router = require("koa-router");
const queries = require("../../db/queries/crud");

const router = new Router();


 
router.post("/login", async ctx => {
  ctx.body = await queries.login(ctx.request.body);

});

router.post("/register", async ctx => {
  ctx.body = await queries.register(ctx.request.body);

});



module.exports = router;

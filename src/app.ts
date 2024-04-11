import express = require("express");
import userRouter from "./routes/user.routes";
import routeInformateionLogger from "./middleware/route-informate";

const app = express();
app.use(routeInformateionLogger);
app.use("/users", userRouter);
export default app;

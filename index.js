require("dotenv").config();
const express = require("express");
require("module-alias/register");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const baseUrl = process.env.BASE_URL;
const dotenv = require("dotenv");
const productRoute = require("@/routes/product.route");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("@/config/swagger-output.json");

dotenv.config();

app.use(bodyParser.json());
app.use("/product", productRoute);
app.get("/", (req, res) => {
  return res.send("Hello World");
});
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.listen(port, () => {
  console.log(`Server running on ${baseUrl}`);
});

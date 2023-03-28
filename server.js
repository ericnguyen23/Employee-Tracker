const express = require("express");
const routes = require("./routes");

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(3001, () => console.log("Now listening"));
});

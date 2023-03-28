const express = require("express");
const routes = require("./routes");
const sequelize = require("./config/connection");
const Prompts = require("./lib/prompts");

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// start prompts
const newPrompt = new Prompts();
newPrompt.render();

sequelize.sync({ force: false }).then(() => {
  app.listen(3001, () => console.log("Now listening"));
});

const path = require("path");

const BASE_PATH = path.join(__dirname, "db");

module.exports = {
  client: "pg",
  connection: "postgres://postgres:dwadwa@localhost:5432/postgres",
  migrations: {
    directory: path.join(BASE_PATH, "migrations")
  },
  seeds: {
    directory: path.join(BASE_PATH, "seeds")
  }
};

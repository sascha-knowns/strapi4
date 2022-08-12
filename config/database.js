const path = require("path");

module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      filename: path.join(
        __dirname,
        "..",
        env("DATABASE_FILENAME", ".tmp/data.db")
      ),
    },
    useNullAsDefault: true,
  },
});

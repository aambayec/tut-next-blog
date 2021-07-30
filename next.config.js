const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  return {
    env: {
      mongodb_username: "Ulya",
      mongodb_password: "xxxxxxxxxxx",
      mongodb_clustername: "cluster0",
      mongodb_database: "nextjs-blog",
    },
  };
};

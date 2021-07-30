const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "Ulya",
        mongodb_password: "xxxxxxxx",
        mongodb_clustername: "cluster0",
        mongodb_database: "nextjs-blog",
      },
    };
  }

  return {
    env: {
      mongodb_username: "Ulya",
      mongodb_password: "xxxxxxxx",
      mongodb_clustername: "cluster0",
      mongodb_database: "nextjs-blog",
    },
  };
};

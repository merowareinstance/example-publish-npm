const pino = require("pino");

const logger = pino({
  level: "debug",
  enabled: !!process.env.DEBUG,
  prettyPrint: process.env.NODE_ENV === "development",
});

const { Meroware, Weekly } = require("./modules");

function welcome() {
  const newVideo = new Weekly();
  const welcomeMessage =
    newVideo instanceof Meroware ? "Welcome to Meroware Instance" : "Meh!!!";
  logger.debug(welcomeMessage);
  return welcomeMessage;
}

module.exports = {
  welcome,
};

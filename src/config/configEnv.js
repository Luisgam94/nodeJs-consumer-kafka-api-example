const appConfig = () => ({
  topic: process.env.TOPIC,
  kafka: {
    brokers: [process.env.BROKER],
  },
  port: process.env.PORT || 3000,
});

module.exports = {
  appConfig,
};

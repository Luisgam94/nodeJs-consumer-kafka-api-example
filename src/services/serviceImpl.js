const { consumerMessages } = require('./consumer');
const { initLogger } = require('../config/logging');

const receivedMessages = async (config) => {
  const log = initLogger();
  try {

    await consumerMessages(config.topic, config.kafka);

    log.info('message received');
  } catch (error) {
    log.error({message: error.message}, error.message)
  }
};

module.exports = { receivedMessages }

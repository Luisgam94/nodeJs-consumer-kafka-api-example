const { Kafka } = require('kafkajs');
const { initLogger } = require('../config/logging');

const consumerMessages = async (topicName, broker) => {
  const log = initLogger();

  const kafka = new Kafka(broker);
  const consumer = kafka.consumer({ groupId: 'my-group' })
  await consumer.connect()
  await consumer.subscribe({ topic :topicName, fromBeginning: true })
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {

      log.info({event: JSON.parse(message.value), topic}, "message received")

    },
  })
};

module.exports = {
  consumerMessages,
};

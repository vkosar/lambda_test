'use strict';

module.exports.hello_echo = async (event) => {
  console.log('hello_echo');
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
};

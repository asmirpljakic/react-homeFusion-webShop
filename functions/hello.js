const items = [
  { id: 1, name: 'Aki' },
  { id: 2, name: 'Seki' },
];

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: 'Hello World',
  };
};

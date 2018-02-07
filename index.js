const fastify = require('fastify')()

fastify.get('/', async (request, reply) => {
  reply.type('application/json').code(200);
  return { hello: 'get' };
});

fastify.post('/', async (request, reply) => {
  reply.type('application/json').code(200);
  return { hello: 'post' };
});

fastify.put('/', async (request, reply) => {
  reply.type('application/json').code(200);
  return { hello: 'put' };
});

fastify.delete('/', async (request, reply) => {
  reply.type('application/json').code(200);
  return { hello: 'delete' };
});

fastify.listen(3000, '127.0.0.1', function (err) {
  if (err) throw err;
  console.log(`server listening on ${fastify.server.address().port}`);
});

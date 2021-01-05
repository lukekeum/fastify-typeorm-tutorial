import fastify, { FastifyInstance } from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http';

const PORT = process.env.PORT || '3000';
const server: FastifyInstance<
  Server,
  IncomingMessage,
  ServerResponse
> = fastify({ logger: true });

// test code
server.get('/', async (request, reply) => {
  return { hello: 'world' };
});

server.listen(+PORT, '0.0.0.0', (err) => {
  if (err) throw err;
});

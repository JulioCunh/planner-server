import fastify from 'fastify';

const app = fastify();

app.get('/test', () => {
  return { message: 'Hello, Barnabe!' };
});

app.listen({ port: 3333 }).then(() => {
  console.log('Server running!');
})
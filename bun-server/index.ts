const server = Bun.serve({
  port: 3000,
  fetch() {
    return new Response("Primeiro código Bun!");
  },
});

console.log(`Listening on port ${server.port}`);

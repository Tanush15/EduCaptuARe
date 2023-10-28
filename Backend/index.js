const app = require('./app');
const server = require('http').createServer(app);

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

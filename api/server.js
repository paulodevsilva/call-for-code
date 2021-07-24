const app = require('./src/app');
const server = require('http').createServer(app);

const port = process.env.PORT || 3333;

server.listen(port, () => console.log(`server is running in port ${port} 🚀🚀🚀`));

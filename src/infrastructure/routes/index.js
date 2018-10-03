import express from 'express';
import bodyParser from 'body-parser';
import routes from './cart/index';

const app = express();
app.use(bodyParser.json());

routes.forEach((route) => {
  app[route.method](route.path, (request, response) => {
    route.factory.create({ params: { request }, response });
  });
});

app.listen(80, () => {
  /* eslint-disable-next-line no-console */
  console.log('Run API in port 80!');
});

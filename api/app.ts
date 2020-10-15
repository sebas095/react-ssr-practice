import express, { Application, Request, Response } from 'express';

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
  res.send('HOLA MUNDO');
});

app.listen(3000, () => {
  console.log('App running in port 3000');
});

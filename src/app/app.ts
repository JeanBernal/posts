import express from 'express';
import bodyParser from 'body-parser';
import config from './config';
import { authRouter } from '../infraestructure/adapters/inbound/auth/auth.route';
import { userRouter } from '../infraestructure/adapters/inbound/user/user.route';
import { postRouter } from '../infraestructure/adapters/inbound/post/post.route';

require('dotenv').config();
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/users', userRouter);
app.use('/signin', authRouter);
app.use('/post', postRouter);


app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}`);
});

import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import UserRouter from './routes/User.router';
dotenv.config();

const app: Express = express();

app.use(cors());
app.use(express.json());

const uri: string | any = process.env.MONGODB;

mongoose.set('strictQuery', false);

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    throw err;
  });

app.get('/', (req: Request, res: Response): void => {
  res.json({
    status: 200,
    message: "This is the Home page of API's"
  })
})

app.use("/api/users", UserRouter)

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
import express from 'express';
import dotenv from "dotenv";
import authRouter from './routes/authRoutes.js'
import productRouter from './routes/productRoutes.js'
import cors from 'cors';

dotenv.config();
const app = express();

app.use(cors());

app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/products', productRouter);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
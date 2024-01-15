import express,{Request,Response} from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';
import userRoutes from './routes/users';

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
const PORT = 8000;

app.use('/api/users',userRoutes)

app.listen(PORT,()=>{
    console.log(`server is running on PORT===> ${PORT}`)
})
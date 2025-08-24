import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const port = 3000;

//Middleware
app.use(express.json())
app.use(cors())


//API Routes
app.get('/', (req, res) => res.send('Server is Live!!'))



app.listen(port, ()=> console.log(`Server is running on port http://localhost:${port}`));
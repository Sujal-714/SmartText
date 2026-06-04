import {config} from './config.js';
import express,{Application, Request , Response} from 'express';
import transformRoute from './routes/transformRoute.js';
import cors from 'cors';

const app: Application = express();

//middleware

app.use(express.json());
app.use('/transform',transformRoute);
app.use(cors({
  origin: config.corsOrigin.split(','),
  methods: ['GET','POST','DELETE'],
}));
//basic route

const PORT = config.PORT;
app.get('/',(req: Request,res: Response)=>{
  res.send('Basic route: SmartText 👾');
});

const startServer =  async () :Promise<void> => {
  try{ 
    app.listen(PORT, ()=>{
      console.log(`Server running on http://localhost:${PORT}`);
    });
  }catch(err){
    console.log('Failed to start Server',err);
  }
};
startServer();
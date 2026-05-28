import 'dotenv/config'; 
import express,{Application, Request , Response} from 'express';
import { log } from 'node:console';

const app: Application = express();

//middleware

app.use(express.json());

//basic route

const PORT = process.env.PORT;

app.get('/',(req: Request,res: Response)=>{
  res.send("Basic route: SmartText 👾");
});

const startServer =  async () :Promise<void> => {
    try{ 
    app.listen(PORT, ()=>{
        console.log(`Server running on http://localhost:${PORT}`);
     });
    }catch(err){
     console.log('Failed to start Server');
    }
}
startServer();

import mongoose  from 'mongoose';
import app from './app'

const port:number = 5000



async function connectionDB() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/mongo-test');
        console.log(`Database connection Successful`);
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
          })

        
    } catch (error) {
        console.log(`Failed to connect database`, error);
        
    }
  }
  connectionDB()



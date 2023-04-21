import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config();

const DBConnection = async() => {

  const USERNAME = process.env.DB_USERNAME;
  const PASSWORD = process.env.DB_PASSWORD;
  
    const MONGO_URI = `mongodb+srv://Ashish1:Ashish1@file.fqnbwhg.mongodb.net/?retryWrites=true&w=majority`;
    try {
     await mongoose.connect(MONGO_URI, {useNewUrlParser: true } ); 
     console.log('Database Connected Successfully');   
    } catch (error) {
      console.error('Error While Connecting with a database', error.message);  
    }
}

export default DBConnection;                                  
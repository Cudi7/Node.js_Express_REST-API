import mongoose from 'mongoose';


function connectDB(){
    try {
        mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});
        const db = mongoose.connection;
        console.log('connected to DB!')
        console.log(db)
    } catch (error) {
        console.log(error.message)
    }
}


export default connectDB
import { connect } from 'mongoose';

(async () => {
    try {
        await connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ikjjp.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`).then(() => console.log('Database connected'))
        console.log('Database connected successfully');
    } catch (error) {
        console.log(error);
    }
})();
// connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}}@cluster0.ikjjp.mongodb.net/${process.env.DB_NAME  }?retryWrites=true&w=majority`).then(() => console.log('Database connected'))
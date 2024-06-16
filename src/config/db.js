import mongoose from 'mongoose';

async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    
    const connection = mongoose.connection;

    connection.on('connected', () => {
      console.log('MongoDB connected successfully');
    });

    connection.on('error', (err) => {
      console.error('MongoDB connection error:', err);
      process.exit();
    });

    connection.on('disconnected', () => {
      console.log('MongoDB disconnected');
    });

    connection.on('reconnected', () => {
      console.log('MongoDB reconnected');
    });

    connection.on('reconnectFailed', () => {
      console.error('MongoDB failed to reconnect');
    });

    connection.on('fullsetup', () => {
      console.log('MongoDB replica set full setup');
    });

    connection.on('all', () => {
      console.log('MongoDB all replica set members connected');
    });

  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
}

export default connect;

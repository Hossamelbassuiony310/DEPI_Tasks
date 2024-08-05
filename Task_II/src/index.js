const express = require('express');
const mongoose = require('mongoose');
const redis = require('redis');

// Initialize app
const PORT = 4000;
const app = express();

// Connect to Redis
const REDIS_PORT = 6379;
const REDIS_HOST = 'redis';
const redisClient = redis.createClient({
  url: `redis://${REDIS_HOST}:${REDIS_PORT}`
});

redisClient.on('error', (error) => console.log('Redis client Error', error));
redisClient.on('connect', () => console.log('Connected to Redis'));
redisClient.connect().catch(console.error);

// MongoDB
const DB_USER = 'root';
const DB_PASSWORD = 'example';
const DB_PORT = 27017;
const DB_HOST = 'mongo';
const URL = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;

mongoose
  .connect(URL)
  .then(() => console.log('Connected to db..'))
  .catch((error) => console.error('Failed to connect..', error));

app.get('/', (req, res) => res.send('<h1>Welcome! Task_II is Completed!</h1>'));

app.listen(PORT, () => console.log(`App is up and running on port: ${PORT}`));
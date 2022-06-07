import redis from 'redis';

const redis_client = redis.createClient();

redis_client.on('connect', () => console.log('Redis client connected to the server'));

redis_client.on('error', (error) => console.log(`Redis client not connected to the server: ${error.message}`));

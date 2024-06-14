const redis = require('redis');

// Initialize Redis client
const client = redis.createClient({
    url: 'redis://127.0.0.1:6379' // Update this URL if your Redis server is on a different host or port
});

client.on('error', (err) => {
    console.error('Redis error: ', err);
});

// Attempt to connect to Redis server with retries
async function connectRedis() {
    let attempts = 0;
    const maxAttempts = 5;
    while (attempts < maxAttempts) {
        try {
            await client.connect();
            console.log('Connected to Redis');
            break;
        } catch (err) {
            attempts++;
            console.error(`Redis connection attempt ${attempts} failed: `, err);
            if (attempts < maxAttempts) {
                console.log('Retrying Redis connection...');
                await new Promise(resolve => setTimeout(resolve, 5000)); // wait 5 seconds before retrying
            } else {
                console.error('Max Redis connection attempts reached');
                throw err;
            }
        }
    }
}

connectRedis().catch(err => {
    console.error('Failed to connect to Redis: ', err);
    process.exit(1); // Exit the process if Redis connection fails
});

const blacklistToken = async (token, expiresIn) => {
    try {
        // Log the types of token and expiresIn
        console.log('Token:', token, 'Type of token:', typeof token);
        console.log('ExpiresIn:', expiresIn, 'Type of expiresIn:', typeof expiresIn);

        // Ensure token is a string and expiresIn is a number
        if (typeof token !== 'string' || typeof expiresIn !== 'number') {
            throw new TypeError('Invalid argument type');
        }
        await client.set(token, 'true'); // Use 'true' as a string
        await client.expire(token, expiresIn);
    } catch (err) {
        console.error('Error blacklisting token:', err);
    }
};

const isBlacklisted = async (req, res, next) => {
    const authHeader = req.header('Authorization');
    if (!authHeader) {
        return next();
    }

    const token = authHeader.replace('Bearer ', '');
    try {
        const data = await client.get(token);
        if (data) {
            return res.status(401).json({ error: 'Token blacklisted' });
        }
        next();
    } catch (err) {
        console.error('Error checking token blacklist:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { blacklistToken, isBlacklisted };
